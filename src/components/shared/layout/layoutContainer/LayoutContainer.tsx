import React from 'react';
import { Container } from './LayoutContainer.styled';

interface Props {
	children: React.ReactNode;
}

export const LayoutContainer = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

export default LayoutContainer;
