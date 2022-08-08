import { routes } from 'parameters';
import { I500Page } from './500.models';

// Page500
export const page500: I500Page = {
	title: 'Blooper...</br>Servers could not handle your awesomeness',
	text: 'Please try out later once they cool down.',
	button: {
		text: 'Back to Homepage',
		link: routes.home
	},
	seoTags: {
		description: 'These are not the droids you are looking for',
		title: '404 Title',
		image: `${process.env.HOST}/images/meta/404.png`,
		url: `${process.env.HOST}/${routes[500]}`,
		keywords: 'keywords, missing, here'
	}
};
