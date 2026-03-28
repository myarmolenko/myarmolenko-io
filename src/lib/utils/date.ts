/**
 * Formats an ISO date string into a human-readable format
 * @param dateString - ISO date string (e.g., "2024-01-15")
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

/**
 * Formats an ISO date string into a display format
 * @param dateString - ISO date string (e.g., "2024-01-15")
 * @returns Display date string (e.g., "15 Jan 2024")
 */
export function formatDateDisplay(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
