import type { Component } from 'svelte';

export const POST_TYPES = {
	Note: 'note',
	Post: 'post'
} as const;

const SLUG_PATTERN = /\.\.\/\.\.\/content\/posts\/(.+)\.md$/;
const VALID_POST_TYPES = new Set<string>(Object.values(POST_TYPES));

export type PostType = (typeof POST_TYPES)[keyof typeof POST_TYPES];

export interface PostMetadata {
	title: string;
	slug: string;
	tags: string[];
	published: boolean;
	date: string;
	description?: string;
	author?: string;
	type?: PostType;
}

export type Post = PostMetadata;


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

function parsePostType(value: unknown): PostType | undefined {
	if (typeof value === 'string' && VALID_POST_TYPES.has(value)) {
		return value as PostType;
	}
	return undefined;
}

function toPostMetadata(metadata: RawFrontmatter & { date: string }, slug: string): PostMetadata {
	return {
		...metadata,
		slug,
		tags: metadata.tags ?? [],
		published: metadata.published ?? false,
		type: parsePostType(metadata.type)
	};
}


export async function getAllPosts(): Promise<PostMetadata[]> {
	const modules = import.meta.glob<MarkdownModule>('../../content/posts/*.md', { eager: true });
	const posts: PostMetadata[] = [];

	for (const path in modules) {
		const { metadata } = modules[path];
		const slug = path.match(SLUG_PATTERN)?.[1];

		if (metadata.published && metadata.date && slug) {
			posts.push(toPostMetadata(metadata, slug));
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

		return toPostMetadata(metadata, slug);
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
