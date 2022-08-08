import { toast } from 'react-toastify';
import { localAxios } from 'services';

export async function getBlog() {
	const res = await localAxios
		.get(`/api/rss-blogs`)
		.then(response => {
			if (response.status === 200) {
				const { data } = response;
				return data;
			} else {
				throw new Error('Blog fetch failed.');
			}
		})
		.catch(err => {
			console.error('error', err.message);
			toast.error(err.message, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined
			});
			return [];
		});
	return res;
}
