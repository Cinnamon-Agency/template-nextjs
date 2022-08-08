const nodemailer = require('nodemailer');
import axios from 'axios';

function SendEmail(email) {
	const responseMailOptions = {
		from: 'Company <contact@hello.com>',
		to: [email],
		subject: 'Company has received your message :)',
		// tslint:disable-next-line: max-line-length quotemark
		html: `<!DOCTYPE html><html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" ><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="x-apple-disable-message-reformatting" /><title></title><style>@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Merriweather:wght@700&display=swap'); </style></head><body width="100%" style="margin: 0; padding: 0 !important; background-color: #222222"><center style="width: 100%; background-color: #ffffff"><div style=" display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; font-family: sans-serif; " ><p class="text info_text">WRITE EMAIL RESPONSE HERE</p></div>
			<img class="full_image" src="cid:email_image" style="height: 315px; margin-left: auto; margin-right: auto" /></center></body></html>`,
		attachments: [
			{
				filename: 'illustration.png',
				path: 'http://localhost:3000/email_image.png',
				cid: 'email_image'
			}
		]
	};

	transporter
		.sendMail(responseMailOptions)
		.then(info => {
			res.status(200).send({ message: 'ok' });
			return;
		})
		.catch(err => {
			res.status(500).send({ err });
			return;
		});
}

export default async function handler(req, res) {
	const mailchimpInstance = process.env.MAILCHIMP_ISTANCE;
	const listUniqueId = process.env.MAILCHIMP_ID;
	const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;

	const axiosConfig = {
		headers: {
			Authorization: 'Basic ' + Buffer.from('randomstring:' + mailchimpApiKey).toString('base64'),
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};

	const postData = {
		email_address: req.body,
		status: 'subscribed'
	};

	console.log('postData', postData);

	try {
		const mcResponse = await axios.post(
			'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/',
			postData,
			axiosConfig
		);
		console.log('Mailchimp List Response: ', mcResponse.data);
		res.status(200).json(mcResponse.data);
	} catch (err) {
		const errdata = err['response']['data'];
		console.log('Mailchimp Error:  ', errdata);
		res.status(errdata.status).json(errdata);
	}
}
