import { remoteAxios } from 'services';

// this must be included, otherwise its not working, it disables nextjs parser
export const config = {
	api: {
		bodyParser: false
	}
};

export default async (req: any, res: any) => {
	if (req.method === 'GET') {
		remoteAxios
			.get(`/api/rss-blogs`)
			.then((response: any) => {
				res.status(200).send({ message: 'OK' });
				return;
			})
			.catch((err: Error) => {
				res.status(500).send({ err });
				return;
			});
	} else {
		res.status(403).send({ message: 'Unsupported request type' });
	}
};
