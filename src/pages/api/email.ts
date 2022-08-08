import nodemailer from 'nodemailer';
import formidable from 'formidable';
import { ContactFormFinalData, NodemailerFiles } from 'components/screens/api';

// this must be included, otherwise its not working, it disables nextjs parser
export const config = {
	api: {
		bodyParser: false
	}
};

export default async (req: any, res: any) => {
	if (req.method === 'POST') {
		// console.log('/body', req.body)

		const myFields: any = [];

		const myFiles: any = [];

		// i couldnt get it otherwise to wait till its completecd
		await new Promise(function (resolve, reject) {
			const form = new formidable.IncomingForm({ keepExtensions: true });
			form.on('field', function (field: any, value: any) {
				myFields.push(value);
			});

			form.on('file', function (field: any, file: any) {
				myFiles.push(file);
			});

			form.parse(req, function (err: any, fields: any, files: any) {
				if (err) return reject(err);
				resolve({ fields, files });
			});
		});

		//console.log('myFields', myFields)

		//console.log('myFiles', myFiles)

		const formData = !!myFields.length ? JSON.parse(myFields[0]) : ({} as ContactFormFinalData);

		const formFiles: NodemailerFiles[] = [];

		if (Array.isArray(myFiles)) {
			for (let i = 0; i < myFiles.length; i++) {
				const file: any = myFiles[i];
				formFiles.push({
					filename: file.name,
					path: file.path
				});
			}
		} else {
			// formFiles.push({
			// 	filename: files.name,
			// 	path: files.path
			// })
		}

		// console.log('formData', formData)
		// console.log('formFiles', formFiles)

		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASSWORD
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		const mailOptions = {
			from: formData.email,
			/* to: [
				'receiver@hello.com',
			], */
			to: [formData.email],
			subject: 'hello.com contact form',
			html: `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" ><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="x-apple-disable-message-reformatting" /><title></title><style>@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Merriweather:wght@700&display=swap'); </style></head><body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222"><center style="width: 100%; background-color: #ffffff"><div style=" display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; font-family: sans-serif; " ><p class="text info_text">Email: ${formData.email}</p><p class="text info_text">Message: ${formData.message}</p><p class="text info_text">Company: ${formData.company}</p></div>
			<img class="full_image" src="cid:email_image" style="height: 315px; margin-left: auto; margin-right: auto" /></center></body></html>`,
			attachments: [
				{
					filename: 'illustration.png',
					path: `${process.env.HOST}/email_image.png`,
					cid: 'email_image'
				},
				...formFiles
			]
		};

		console.log('mailOptions 1');

		await transporter
			.sendMail(mailOptions)
			.then((response: any) => {
				const responseMailOptions = {
					from: 'Company <hello@hello.com>',
					to: [formData.email],
					subject: 'Company has received your message :)',
					html: `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" ><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="x-apple-disable-message-reformatting" /><title></title><style>@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Merriweather:wght@700&display=swap'); </style></head><body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222"><center style="width: 100%; background-color: #ffffff"><div style=" display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; font-family: sans-serif; " ><p class="text info_text">WRITE EMAIL RESPONSE HERE</p></div>
					<img class="full_image" src="cid:email_image" style="height: 315px; margin-left: auto; margin-right: auto" /></center></body></html>`,
					attachments: [
						{
							filename: 'illustration.png',
							path: `${process.env.HOST}/email_image.png`,
							cid: 'email_image'
						}
					]
				};

				transporter
					.sendMail(responseMailOptions)
					.then((info: any) => {
						res.status(200).send({ message: 'OK' });
						return;
					})
					.catch((err: Error) => {
						res.status(500).send({ err });
						return;
					});
			})
			.catch((err: Error) => {
				res.status(500).send({ err });
				return;
			});
	} else {
		// Handle any other HTTP method
		res.status(200).json({ name: 'GET' });
	}
};
