import { toast } from 'react-toastify';

export async function postSubscribe(email: string) {
	const res = await fetch(`/api/subscribe`, {
		method: 'POST',
		body: email
	})
		.then((response: any) => {
			return response.json();
		})
		.then(res2 => {
			if (!!res2.id) {
				return true;
			}
			if (res2.status === 400 && res2.title === 'Member Exists') {
				toast.error('User exists', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: false,
					progress: undefined
				});
				return false;
			} else {
				throw new Error(res2.title);
			}
		})
		.catch(err => {
			console.error('postSubscribe error', err);
			toast.error(err.message, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined
			});
			throw new Error(err.message);
		});

	return res;
}
