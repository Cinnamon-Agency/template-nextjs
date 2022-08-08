import React from 'react'
import Head from 'next/head'
import { MetaTagsModel } from 'models'



interface Props {
	metaTags: MetaTagsModel
}

export const CustomHead = ({ metaTags }: Props) => {
	const { title, description, url, image, type } = metaTags

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:url" content={url} />
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} key={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} key={image} />
			<meta name="twitter:image:alt" content="blog thumbnail_image" />

			<meta property="og:type" content={type ? type : 'website'} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
		</Head>
	)
}