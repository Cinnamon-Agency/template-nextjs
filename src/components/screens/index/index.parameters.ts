import { Size } from 'hooks/useWindowSize';
import { HomePageProps } from './index.models';

export const getHome = ({ screenSize }: { screenSize: Size }): HomePageProps => ({
	welcome: {
		title: 'Template'
	}
})
