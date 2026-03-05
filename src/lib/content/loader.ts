/**
 * Blog post metadata structure from frontmatter
 */
export interface PostMetadata {
	title: string;
	description: string;
	date: string;
	author: string;
	tags: string[];
	published: boolean;
	slug: string;
}

/**
 * Full blog post - for server-side use only (without content component)
 * Content component should be loaded client-side to avoid serialization issues
 */
export type Post = PostMetadata;

/**
 * Module type for markdown imports
 */
interface MarkdownModule {
	default: any;
	metadata: Omit<PostMetadata, 'slug'>;
}

/**
 * Load all published blog posts, sorted by date (newest first)
 * @returns Array of post metadata
 */
export async function getAllPosts(): Promise<PostMetadata[]> {
	const modules = import.meta.glob<MarkdownModule>('../../content/posts/*.md', { eager: true });
	const posts: PostMetadata[] = [];

	for (const path in modules) {
		const module = modules[path];
		const slug = path.match(/\.\.\/\.\.\/content\/posts\/(.+)\.md$/)?.[1];

		if (module.metadata && module.metadata.published && slug) {
			posts.push({
				...module.metadata,
				slug
			});
		}
	}

	// Sort by date descending (newest first)
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Load a single blog post by slug
 * @param slug - URL slug of the post (filename without extension)
 * @returns Post metadata, or null if not found
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const module = await import(`../../content/posts/${slug}.md`);

		if (!module.metadata || !module.metadata.published) {
			return null;
		}

		return {
			...module.metadata,
			slug
		};
	} catch (error) {
		console.error(`Failed to load post: ${slug}`, error);
		return null;
	}
}

/**
 * Get posts by tag
 * @param tag - Tag to filter by
 * @returns Array of post metadata matching the tag
 */
export async function getPostsByTag(tag: string): Promise<PostMetadata[]> {
	const allPosts = await getAllPosts();
	return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * Get all unique tags from all posts
 * @returns Array of unique tags
 */
export async function getAllTags(): Promise<string[]> {
	const allPosts = await getAllPosts();
	const tagsSet = new Set<string>();

	allPosts.forEach((post) => {
		post.tags.forEach((tag) => tagsSet.add(tag));
	});

	return Array.from(tagsSet).sort();
}
