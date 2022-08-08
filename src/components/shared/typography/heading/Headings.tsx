import React, { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledHeadingProps, StyledH6 } from './Headings.styled';

interface HeadingProps {
	text: string;
	color?: string;
	isDangerouslySet?: boolean;
	position?: string;
}

type PropsHeading = StyledHeadingProps & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const handleHeadingWrapping = (Component: ComponentType<PropsHeading>, { text, color, isDangerouslySet, ...props }: HeadingProps) => {
	return isDangerouslySet ? (
		<Component textColor={color} dangerouslySetInnerHTML={{ __html: text }} {...props} />
	) : (
		<Component textColor={color} {...props}>
			{text}
		</Component>
	);
};

export const Heading1 = (props: HeadingProps) => handleHeadingWrapping(StyledH1, props);
export const Heading2 = (props: HeadingProps) => handleHeadingWrapping(StyledH2, props);
export const Heading3 = (props: HeadingProps) => handleHeadingWrapping(StyledH3, props);
export const Heading4 = (props: HeadingProps) => handleHeadingWrapping(StyledH4, props);
export const Heading5 = (props: HeadingProps) => handleHeadingWrapping(StyledH5, props);
export const Heading6 = (props: HeadingProps) => handleHeadingWrapping(StyledH6, props);
