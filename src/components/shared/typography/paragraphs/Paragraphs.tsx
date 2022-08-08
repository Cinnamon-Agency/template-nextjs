import React, { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledTag, StyledParagraph, StyledSubHeadline, StyledParagraphProps } from './Paragraphs.styled';
import { ParagraphsSize } from './Paragraphs.parameters';

interface HandleParagraphWrappingProps {
	text: string;
	color?: string;
	size?: ParagraphsSize;
	bold?: boolean;
	isDangerouslySet?: boolean;
	position?: string;
}

type PropsHeading = StyledParagraphProps & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const handleParagraphWrapping = (
	Component: ComponentType<PropsHeading>,
	{ text, color, size, bold, isDangerouslySet, ...props }: HandleParagraphWrappingProps
) => {
	return isDangerouslySet ? (
		<Component textColor={color} dangerouslySetInnerHTML={{ __html: text }} size={size} bold={bold} {...props} />
	) : (
		<Component textColor={color} size={size} bold={bold} {...props}>
			{text}
		</Component>
	);
};


export const Paragraph = (props: HandleParagraphWrappingProps) => handleParagraphWrapping(StyledParagraph, props);

///
export const Tag = (props: HandleParagraphWrappingProps) => handleParagraphWrapping(StyledTag, props);
export const SubHeadline = (props: HandleParagraphWrappingProps) => handleParagraphWrapping(StyledSubHeadline, props);
