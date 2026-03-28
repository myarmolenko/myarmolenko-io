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
 * Formats an ISO date string into a numeric format
 * @param dateString - ISO date string (e.g., "2024-01-15")
 * @returns Numeric date string (e.g., "01/15/2024")
 */
export function formatDateNumeric(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	});
}

/**
 * Formats an ISO date string into a short format
 * @param dateString - ISO date string (e.g., "2024-01-15")
 * @returns Short formatted date string (e.g., "Jan 15, 2024")
 */
export function formatDateShort(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
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

/**
 * Gets a relative time string for a date
 * @param dateString - ISO date string (e.g., "2024-01-15")
 * @returns Relative time string (e.g., "2 days ago", "in 3 days")
 */
export function getRelativeTime(dateString: string): string {
	const date = new Date(dateString);
	const now = new Date();
	const diffInMs = now.getTime() - date.getTime();
	const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

	if (diffInDays === 0) {
		return 'Today';
	} else if (diffInDays === 1) {
		return 'Yesterday';
	} else if (diffInDays > 1 && diffInDays < 7) {
		return `${diffInDays} days ago`;
	} else if (diffInDays < 0 && diffInDays > -7) {
		return `in ${Math.abs(diffInDays)} days`;
	} else {
		return formatDateShort(dateString);
	}
}
