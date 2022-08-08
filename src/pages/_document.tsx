import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="favicon" href="/favicon.ico" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700&family=Lato&display=swap" rel="stylesheet"></link>

					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.GA_TRACKING_ID}', {
									page_path: window.location.pathname,
								});
							`
						}}
					/>
					<link rel="preload" as="font"></link>
					<script></script>
				</Head>
				<body>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GA_TRACKING_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
						}}
					></noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
