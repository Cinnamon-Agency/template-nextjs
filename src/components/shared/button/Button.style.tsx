import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors, devices } from 'parameters'
import { ButtonSize, ButtonVariant } from './Button.model'
import { ButtonVariants } from './Button.parameters'


export interface ButtonStyledProps {
	size?: ButtonSize
	variant?: ButtonVariant
	disabled?: boolean
	fullWidth?: boolean
	disableMargin?: boolean
	disablePadding?: boolean
	iconFirst?: boolean
}

const getButtonTheme = (variant: ButtonVariant | undefined) => {
	switch (variant) {
		case 'primary':
			return ButtonVariants.primary
		case 'secondary':
			return ButtonVariants.secondary
		case 'tertiary':
			return ButtonVariants.tertiary
		default:
			break
	}
}

export const ButtonLink = styled.a`
	text-decoration: none;
	max-width: fit-content;
`

const StyledBaseButton = styled.button<ButtonStyledProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	outline-color: ${colors.primaryGeeen1};
	border: none;
	font-size: 1.3rem;
	line-height: 1.3;
	font-style: normal;
	font-weight: 700;
	border-radius: 0px;
	transition: all 0.2s ease-in;
	outline-style: solid;
	outline-width: 1px;
	padding-left: 30px;
	padding-right: 30px;
	padding-top: 16px;
	padding-bottom: 16px;
	${props =>
		props.iconFirst &&
		css`
			flex-direction: row-reverse;
			gap: 1.2rem;
			${WrapperIcon} {
				left: 0;
			}
		`}

	${props =>
		props.disabled &&
		css`
			pointer-events: none;
		`}
	${props =>
		props.size === 'small' &&
		css`
			padding-left: 14px;
			padding-right: 14px;
			padding-top: 12px;
			padding-bottom: 12px;
		`}
	
	${props => props.size === 'big' && css``}

	${props =>
		props.disablePadding &&
		css`
			padding: 0;
		`}

	${props =>
		css`
			color: ${props.disabled ? getButtonTheme(props.variant)?.text.disabled : getButtonTheme(props.variant)?.text.normal};
			background-color: ${props.disabled ? getButtonTheme(props.variant)?.background.disabled : getButtonTheme(props.variant)?.background.normal};
			outline-color: ${props.disabled ? getButtonTheme(props.variant)?.outline.disabled : getButtonTheme(props.variant)?.outline.normal};
			${Text} {
				font-size: ${props.variant === 'primary' ? '1.6rem' : '1.3rem'};
				font-weight: 700;
			}
			${WrapperIcon} {
				transition: all 0.1s ease-out;
				display: flex;
			}

			&:hover {
				color: ${getButtonTheme(props.variant)?.text.hover};
				background-color: ${getButtonTheme(props.variant)?.background.hover};
				outline-color: ${getButtonTheme(props.variant)?.outline.hover};
			}
		`};

	@media ${devices.laptop} {
		${props => css`
			&:hover {
				${WrapperIcon} {
					${props.variant === 'tertiary' &&
					!props.disableMargin &&
					css`
						left: 2rem;
						transition: all 0.1s ease-out;
					`};
				}
			}
		`}
	}
`
export const StyledButton = styled(StyledBaseButton)<ButtonStyledProps>``

export const WrapperIcon = styled.div`
	position: relative;
	left: 1.2rem;
	flex-shrink: 0;
	display: flex;
`

export const Text = styled.p`
	pointer-events: none;
`