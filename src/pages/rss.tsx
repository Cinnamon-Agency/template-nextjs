import { IBlogPost } from 'models';
import { NextApiResponse } from 'next';
import React from 'react';
import { getBlog } from 'services';

interface Response {
	res: NextApiResponse;
}

const feed = () => <></>;

export default feed;

export const getServerSideProps = async ({ res }: Response) => {
	const blogs: IBlogPost[] = await getBlog();

	const title = 'Template Title';
	const desc = 'The one-stop shop to design, develop and deploy your next digital project.';

	// encode &, <, >, " and '
	const encodeXML = (data: string) =>
		data.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

	const items = blogs.map(
		(item: IBlogPost) => `
      <item>
      <title>${encodeXML(item.title)}</title>
      <author>${encodeXML(`${item.author} <${item.authorEmail}>`)}</author>
      <link>${process.env.APP_BASE_URL}/blog/post/${item.slug}</link>
      <pubDate>${new Date(item.dateWritten).toUTCString()}</pubDate>
      <guid>${process.env.APP_BASE_URL}/blog/post/${item.slug}</guid>
      </item>
        `
	);

	const xml: string = `<?xml version="1.0"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <atom:link href="${process.env.APP_BASE_URL}/rss" rel="self" type="application/rss+xml" />
      <title>${title}</title>
      <link>${process.env.APP_BASE_URL}/rss</link>
      <description>${desc}</description>  
      ${items.join('')}
    </channel>
    </rss>`;

	res.setHeader('Content-Type', 'text/xml');
	res.write(xml);
	res.end();

	return {
		props: {}
	};
};
