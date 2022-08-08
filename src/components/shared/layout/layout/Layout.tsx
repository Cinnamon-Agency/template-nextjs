import { MetaTagsModel } from 'models'
import React, { useContext } from 'react';
import { LayoutWrapper } from './Layout.styled';
import { AppContext } from 'pages/_app'
import { CustomHead } from 'components/shared';

interface LayoutProps {
	metaTags: MetaTagsModel
	children: React.ReactNode
}

export const Layout = ({ metaTags, children }: LayoutProps) => {
	return (
		<LayoutWrapper isFirstLoad={useContext(AppContext).isFirstLoad}>
			<CustomHead metaTags={metaTags} />
			{children}
		</LayoutWrapper>
	)
}
