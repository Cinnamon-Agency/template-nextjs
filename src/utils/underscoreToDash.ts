export function underscoreToDash(slug: string): string {
	return slug.replace(/_/g, '-');
}
