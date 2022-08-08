import styled from '@emotion/styled';
import { devices } from 'parameters';

export interface StyledHeadingProps {
	textColor?: string;
	position?: string;
}

export const StyledH1 = styled.h1<StyledHeadingProps>`
	color: ${props => props.textColor && props.textColor};
	font-family: 'Epilogue', sans-serif;
	font-size: 64px;
	line-height: 1.1;
	font-weight: 700;
	word-break: break-word; /* edge case in hero section */

	@media ${devices.mobileM} {
		font-size: 46px;
	}
`;
export const StyledH2 = styled.h2<StyledHeadingProps>`
	color: ${props => props.textColor && props.textColor};
	font-family: 'Epilogue', sans-serif;
	font-size: 32px;
	line-height: 1.1;
	font-weight: 700;

	@media ${devices.mobileM} {
		font-size: 48px;
		line-height: 52.8px;
	}
`;
export const StyledH3 = styled.h3<StyledHeadingProps>`
	color: ${props => props.textColor && props.textColor};
	font-family: 'Epilogue', sans-serif;
	font-size: 27px;
	line-height: 1.25;
	font-weight: 700;

	position: ${props => props.position && props.position};

	@media ${devices.mobileM} {
		font-size: 24px;
		line-height: 30px;
	}
`;
export const StyledH4 = styled.h4<StyledHeadingProps>`
	color: ${props => props.textColor && props.textColor};
	font-family: 'Epilogue', sans-serif;
	font-size: 24px;
	line-height: 1.3;
	font-weight: 700;

	@media ${devices.mobileM} {
		font-size: 24px;
		line-height: 31px;
	}
`;
export const StyledH5 = styled.h5<StyledHeadingProps>`
	color: ${props => props.textColor && props.textColor};
	font-family: 'Epilogue', sans-serif;
	font-size: 20px;
	line-height: 1.3;
	font-weight: 700;

	@media ${devices.mobileM} {
		font-size: 20px;
		line-height: 26px;
	}
`;
export const StyledH6 = styled.h6<StyledHeadingProps>`
	color: ${props => props.textColor && props.textColor};
	font-family: 'Epilogue', sans-serif;
	font-size: 18px;
	line-height: 1.3;
	font-weight: 600;

	@media ${devices.mobileM} {
		font-size: 20px;
		line-height: 26px;
	}
`;
