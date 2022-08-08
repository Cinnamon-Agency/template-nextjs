import React, { ComponentType, PropsWithChildren } from 'react';
import { StyledNavItem, StyledSubNavItem, StyledFooterNavItem, StyleProps } from './Navigation.styled';
import Link from 'next/link';

interface Props {
	text: string;
	color?: string;
	href: string;
	isActive: boolean;
}

const handleNavigationWrapping = (Component: ComponentType<PropsWithChildren<StyleProps>>, props: Props) => {
	const { text, href } = props;
	return (
		<Link href={href} passHref>
			<Component {...props}>
				{text}
			</Component>
		</Link>
	);
};

export const NavItem = (props: Props) => handleNavigationWrapping(StyledNavItem, props);
export const SubNavItem = (props: Props) => handleNavigationWrapping(StyledSubNavItem, props);
export const FooterNavItem = (props: Props) => handleNavigationWrapping(StyledFooterNavItem, props);
