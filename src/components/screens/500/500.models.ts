import { MetaTagsModel } from "models"
export interface I500Page {
	title: string
	text: string
	button: {
		text: string
		link: string
	}
	seoTags: MetaTagsModel
}
