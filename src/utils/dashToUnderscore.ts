export function dashToUnderscore(slug: string): string {
	return slug.replace(/-/g, '_');
}
