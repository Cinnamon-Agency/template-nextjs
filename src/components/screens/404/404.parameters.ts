import { routes } from 'parameters'
import { I404Page } from './404.models'

// Page404
export const page404: I404Page = {
	title: 'Whoops...</br>Seems like you’re off the track.',
	text: " The specific page you're trying to access can't be reached. Don’t sweat it, we’ve got your back!",
	button: {
		text: 'Back to Homepage',
		link: routes.home
	},
	seoTags: {
		description: 'These are not the droids you are looking for.',
		title: '404 Title',
		image: `${process.env.HOST}/images/meta/404.png`,
		url: `${process.env.HOST}/${routes[404]}`,
		keywords: 'keywords, missing, here'
	}
}
