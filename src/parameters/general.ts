export const colors = {
	// TODO: remove and add colors from your design
	background1: '#FFFFFF',
	background2: '#F5F3F1',
	white: '#FFFFFF',
	body: '#313A43',
	primaryBlue1: '#29424B',
	primaryBlue2: '#163553',
	primaryBlue3: '#011E3E',
	primaryBlue4: '#203F5E',
	primaryGeeen1: '#21CE99',
	primaryGeeen2: '#79B3C0',
	primaryGeeen3: '#167E8A'
};

export const sizes = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560
};

export const devices = {
	mobileS: `(min-width: ${sizes.mobileS}px)`,
	mobileM: `(min-width: ${sizes.mobileM}px)`,
	mobileL: `(min-width: ${sizes.mobileL}px)`,
	tablet: `(min-width: ${sizes.tablet}px)`,
	laptop: `(min-width: ${sizes.laptop}px)`,
	laptopL: `(min-width: ${sizes.laptopL}px)`,
	desktop: `(min-width: ${sizes.desktop}px)`
};

export const routes = {
	home: '/',
	404: '404',
	500: '500'
};
