import React from 'react';

import { Container, Title } from './Welcome.styled';

export interface WelcomeProps {
	title: string;
}

export const Welcome: React.FunctionComponent<WelcomeProps> = ({ title }) => {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
};
