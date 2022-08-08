import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { useRouter } from 'next/router';
import { createContext, useEffect, useRef, useState } from 'react';
import { triggerEventGTM } from 'services';
import { globalStyles } from 'style';

interface AppContextInterface {
	isFirstLoad: boolean
}

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface)



const TemplateApp = ({ Component, pageProps }: AppProps) => {
	const isBrowser = typeof window !== 'undefined'

	// hacky way to ensure page-tracking is called on initial page load:
	const [initialRouteTracked, setInitialRouteTracked] = useState(false)

	const router = useRouter()
	const [isFirstLoad, setIsFirstLoad] = useState(true)

	/* Check if is the first load */

	const firstUpdate = useRef(true)
	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false
			return
		}
		setIsFirstLoad(false)
	})

	const triggerGoogle = (url: string) => {
		console.log('trigger-g-event')
		setTimeout(() => {
			triggerEventGTM({
				eventId: 'TemplatePageView',
				info: {
					pagePath: url,
					event_label: 'TemplatePageView',
					event_category: 'Page Statistics'
				}
			})
		}, 100)
		setTimeout(() => {
			triggerEventGTM({
				eventId: 'TemplateBouceTest5s',
				info: {
					pagePath: url,
					event_label: 'TemplateBouceTest5s',
					event_category: 'Page Statistics'
				}
			})
		}, 5000)

		setTimeout(() => {
			triggerEventGTM({
				eventId: 'TemplateBouceTest20s',
				info: {
					pagePath: url,
					event_label: 'TemplateBouceTest20s',
					event_category: 'Page Statistics'
				}
			})
		}, 20000)
	}

	if (isBrowser && !initialRouteTracked && window.dataLayer && window.location.search === '') {
		triggerGoogle(window.location.href)
		setInitialRouteTracked(true)
	}

	useEffect(() => {
		const handleRouteChangeStart = (url: string) => {
			// console.log('handleRouteChangeStart url', url)
		}

		const handleRouteChangeComplete = (url: string) => {
			// console.log('handleRouteChangeComplete url', url)
			triggerGoogle(url)
		}

		const handleRouteChangeError = (err: any, url: string) => {
			console.error('handleRouteChangeError err', err)
			// console.log('handleRouteChangeError url', url)
		}
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeStart', handleRouteChangeStart)
		router.events.on('routeChangeComplete', handleRouteChangeComplete)
		router.events.on('routeChangeError', handleRouteChangeError)

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart)
			router.events.off('routeChangeComplete', handleRouteChangeComplete)
			router.events.off('routeChangeError', handleRouteChangeError)
		}
	}, [router])

	return (
		<>
			{globalStyles}
			<AppContext.Provider
				value={{
					isFirstLoad
				}}>
				<Component {...pageProps} />
			</AppContext.Provider>
		</>
	)
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	// console.log(metric)
}

export default TemplateApp;
