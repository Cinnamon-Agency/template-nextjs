import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'parameters';

export interface StyleProps {
	isActive: boolean;
	textColor?: string;
}

export const StyledNavItem = styled.a<StyleProps>`
	cursor: pointer;
	color: ${props => (props.textColor ? props.textColor : colors.primaryBlue1)};
	font-family: 'Epilogue', sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 40px;
	text-decoration: none;
	text-align: center;
	transition: color 0.2s ease-in-out;

	&:hover {
		::after {
			content: '';
			position: absolute;
			background: ${colors.primaryGeeen1};
			max-width: 100%;
			width: 100%;
			height: 8px;
			left: 0;
			bottom: calc(-5px - 3px);
		}
	}

	${props =>
		props.isActive &&
		css`
			::after {
				content: '';
				position: absolute;
				background: ${colors.primaryGeeen1};
				max-width: 100%;
				width: 35px;
				height: 8px;
				left: 0;
				bottom: calc(-5px - 3px);
			}
		`}
`;

///
export const StyledSubNavItem = styled.a<StyleProps>`
	color: ${props => (props.textColor ? props.textColor : colors.primaryBlue1)};
	font-family: 'Epilogue';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 40px;
	text-align: center;

	&:hover {
		color: ${colors.primaryBlue1};
	}

	${props =>
		props.isActive &&
		css`
			color: ${colors.primaryBlue1};
			::before {
				content: '';
				position: absolute;
				background: ${colors.primaryBlue1};
				max-width: 100%;
				width: 35px;
				height: 8px;
				left: 0;
				bottom: calc(-5px - 3px);
			}
		`}
`;

export const StyledFooterNavItem = styled.a<StyleProps>`
	color: ${props => (props.textColor ? props.textColor : colors.primaryBlue1)};
	text-decoration: none;
	transition: color 0.2s ease-in;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
`;
