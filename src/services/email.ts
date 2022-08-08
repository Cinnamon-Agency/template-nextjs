
import { ContactFormFinalData } from 'models';
import { toast } from 'react-toastify';

export async function postEmail(data: ContactFormFinalData, files: File[]) {
	const upload = JSON.stringify(data);

	const formData = new FormData();

	for (let index = 0; index < files.length; index++) {
		formData.append('files', files[index]);
	}
	formData.append('data', upload);

	const res = await fetch(`/api/email`, {
		method: 'POST',
		body: formData
		// headers: {
		// 	'Content-Type': 'multipart/form-data'
		// }
	})
		.then(response => {
			if (response.status === 200) {
				return true;
			} else {
				return false;
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
			return false;
		});
	return res;
}
