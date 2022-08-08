import { css } from '@emotion/react';
import styled from '@emotion/styled';



interface LayoutWrapperProps {
	isFirstLoad: boolean
}

export const LayoutWrapper = styled.main<LayoutWrapperProps>`
	padding-top: 112px; /* height of fixed header */

	${props =>
		props?.isFirstLoad &&
		css`
			animation: MainFadeIn 433ms ease 2000ms 1 normal forwards running;
			opacity: 0;
			margin: -16px auto 0 auto;

			@keyframes MainFadeIn {
				to {
					opacity: 1;
					margin: 0 auto 0;
				}
			}
		`}
`
