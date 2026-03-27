/**
 * Returns a deterministic index (0–7) for the sketchy SVG tag filter,
 * based on a hash of the given slug. Used to give each tag/type badge
 * a slightly different hand-drawn look across pages.
 */
export function tagFilterIndex(slug: string): number {
	let h = 0;
	for (const c of slug) h = (h * 31 + c.charCodeAt(0)) | 0;
	return Math.abs(h) % 8;
}
