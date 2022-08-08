declare global {
	interface Window {
		gtag: any;
		dataLayer: any;
	}
}

interface GaEvent {
	eventId: string;
	info: {
		event_category?: string;
		event_label?: string;
		pagePath?: string;
		pageTitle?: string;
		send_to?: string;
		action?: string;
	};
}

declare const gtag: any;

// log specific events happening.
export const triggerEventGTM = (event: GaEvent) => {
	if (gtag) {
		gtag('event', event.eventId, event.info);
	}
};

// get specific source.
export const getSource = (query: string) => {
	let gaCategory: string = '';
	let gaSource: string = '';
	let cookiesAccepted: boolean = false;

	const queries = query.split('&');

	for (let i = 0; i < queries.length; i++) {
		const query = queries[i];

		const split = query.split('=');
		if (split.length) {
			if (split[0] === 'utm_source') {
				gaSource = split[1].toUpperCase();
				gaCategory = 'LEAD';
			} else if (split[0] === 'source') {
				gaSource = split[1].toUpperCase();
				gaCategory = 'LEAD';
			} else if (split[0] === 'fbclid') {
				gaSource = 'FACEBOOK';
				gaCategory = 'LEAD';
			} else if (split[0] === 'upwork') {
				// legacy
				gaSource = 'UPWORK';
				gaCategory = 'LEAD';
			} else {
				// if (!cookieService.get('ga_source') || !localStorage.getItem('ga_source')) {
				// 	gaSource = 'SOURCE_UNKNOWN'
				// 	gaCategory = 'VISITOR'
				// }
			}
			if (!!cookiesAccepted && !!gaSource) {
				sessionStorage.setItem('ga_source', gaSource);
				localStorage.setItem('ga_source', gaSource);
			}
			if (!!cookiesAccepted && !!gaCategory) {
				sessionStorage.setItem('ga_category', gaCategory);
				localStorage.setItem('ga_category', gaCategory);
			}

			// this.cookieService.setWithExpiryInYears('ga_source', this.gaSource, 1)
		}
	}
};
