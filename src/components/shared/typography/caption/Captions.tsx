import React, { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';
import { CaptionSize } from './Captions.parameters';
import { StyledCaption, StyledCaptionProps } from './Captions.styled';

interface HandleCaptionWrappingProps {
	text: string;
	color?: string;
	size?: CaptionSize;
	bold?: boolean;
	isDangerouslySet?: boolean;
	position?: string;
}

type PropsHeading = StyledCaptionProps & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const handleCaptionWrapping = (
	Component: ComponentType<PropsHeading>,
	{ text, color, size, bold, isDangerouslySet, ...props }: HandleCaptionWrappingProps
) => {
	return isDangerouslySet ? (
		<Component textColor={color} dangerouslySetInnerHTML={{ __html: text }} size={size} bold={bold} {...props} />
	) : (
		<Component textColor={color} size={size} bold={bold} {...props}>
			{text}
		</Component>
	);
};

export const Caption = (props: HandleCaptionWrappingProps) => handleCaptionWrapping(StyledCaption, props);
