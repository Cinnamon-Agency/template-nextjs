export interface IBlogPost {
	/** Title */
	title: string

	/** Slug */
	slug: string

	/** Featured */
	isFeatured: boolean

	/** Highlighted */
	highlighted?: boolean | undefined

	/** Topic */
	topic: 'Design' | 'Development' | 'Quality Assurance' | 'Marketing' | 'Human Resources'

	/** Author */
	author: string

	/** Author Email */
	authorEmail: string

	/** Description */
	description: string

	/** Image */
	image: string

	/** Date Written */
	dateWritten: string

	/** Content */
	content: Document

	/** metaTitle */
	metaTitle: string

	/** metaDescription */
	metaDescription: string

	/** metaKeywords */
	metaKeywords: string[]

	/** metaImage */
	metaImage: string
}