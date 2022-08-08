import { MetaTagsModel } from 'models';

export const defaultMetaTags: MetaTagsModel = {
	title: 'Meta Title',
	description: 'Meta description',
	keywords: 'meta keywords',
	image: `${process.env.HOST}/images/meta/general.png`,
	url: `${process.env.HOST}`
};
