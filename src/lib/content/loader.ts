import type { Component } from 'svelte';

// --- Constants ---

export const POST_TYPES = {
	Note: 'note',
	Post: 'post'
} as const;

const SLUG_PATTERN = /\.\.\/\.\.\/content\/posts\/(.+)\.md$/;
const VALID_POST_TYPES = new Set<string>(Object.values(POST_TYPES));
const WORDS_PER_MINUTE = 200;

// --- Exported types ---

export type PostType = (typeof POST_TYPES)[keyof typeof POST_TYPES];

export interface PostMetadata {
	title: string;
	slug: string;
	tags: string[];
	published: boolean;
	date: string;
	readingTime: number;
	description?: string;
	author?: string;
	type?: PostType;
}

export type Post = PostMetadata;

// --- Internal types ---

interface RawFrontmatter {
	title: string;
	description?: string;
	date?: string;
	author?: string;
	tags?: string[];
	published?: boolean;
	type?: unknown;
}

interface MarkdownModule {
	default: Component;
	metadata: RawFrontmatter;
}

// --- Module-level glob imports (must be literals for Vite) ---

const modules = import.meta.glob<MarkdownModule>('../../content/posts/*.md', { eager: true });
const rawModules = import.meta.glob<string>('../../content/posts/*.md', {
	query: '?raw',
	eager: true,
	import: 'default'
});

// --- Helpers ---

function parsePostType(value: unknown): PostType | undefined {
	if (typeof value === 'string' && VALID_POST_TYPES.has(value)) {
		return value as PostType;
	}
	return undefined;
}

function calculateReadingTime(raw: string): number {
	const withoutFrontmatter = raw.replace(/^---[\s\S]*?---\n?/, '');
	const withoutCodeBlocks = withoutFrontmatter.replace(/```[\s\S]*?```/g, '');
	const wordCount = withoutCodeBlocks.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

function getRawBySlug(slug: string): string {
	const path = Object.keys(rawModules).find((p) => p.match(SLUG_PATTERN)?.[1] === slug);
	return path ? rawModules[path] : '';
}

function toPostMetadata(
	metadata: RawFrontmatter & { date: string },
	slug: string,
	raw: string
): PostMetadata {
	return {
		...metadata,
		slug,
		tags: metadata.tags ?? [],
		published: metadata.published ?? false,
		type: parsePostType(metadata.type),
		readingTime: calculateReadingTime(raw)
	};
}

// --- Public API ---

export async function getAllPosts(): Promise<PostMetadata[]> {
	const posts: PostMetadata[] = [];

	for (const path in modules) {
		const { metadata } = modules[path];
		const slug = path.match(SLUG_PATTERN)?.[1];

		if (metadata.published && metadata.date && slug) {
			const raw = rawModules[path] ?? '';
			posts.push(toPostMetadata(metadata as RawFrontmatter & { date: string }, slug, raw));
		}
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const { metadata } = await import(`../../content/posts/${slug}.md`);

		if (!metadata?.published || !metadata.date) {
			return null;
		}

		return toPostMetadata(metadata, slug, getRawBySlug(slug));
	} catch (error) {
		console.error(`Failed to load post: ${slug}`, error);
		return null;
	}
}

export async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
	const posts = await getAllPosts();
	return posts.filter((post) => post.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
	const posts = await getAllPosts();
	const tags = new Set(posts.flatMap((post) => post.tags));
	return Array.from(tags).sort();
}
