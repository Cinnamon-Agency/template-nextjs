import styled from '@emotion/styled';
import { colors, devices } from 'parameters';

export const Container = styled.div`
	background-color: ${colors.background2};
	color: ${colors.primaryBlue2};
	padding: 96px 0;

	@media ${devices.laptop} {
		padding: 160px 0;
	}
`;
export const Title = styled.h1`
	text-align: center;
`;
