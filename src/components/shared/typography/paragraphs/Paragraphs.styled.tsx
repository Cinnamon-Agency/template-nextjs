import styled from '@emotion/styled';
import { devices } from 'parameters';
import { ParagraphsSize, FontSizesParagraphs, LineHeightsParagraphs } from './Paragraphs.parameters';

export interface StyledParagraphProps {
	textColor?: string;
	size?: ParagraphsSize;
	bold?: boolean;
	position?: string;
}

const getFontSize = (size: ParagraphsSize | undefined): string => {
	switch (size) {
		case 's':
			return FontSizesParagraphs.S;
		case 'm':
			return FontSizesParagraphs.M;
		default:
			return '17px';
	}
};

const getLineHeight = (size: ParagraphsSize | undefined): string => {
	switch (size) {
		case 's':
			return LineHeightsParagraphs.S;
		case 'm':
			return LineHeightsParagraphs.M;
		default:
			return '1.7';
	}
};


export const StyledParagraph = styled.p<StyledParagraphProps>`
	color: ${props => props.textColor && props.textColor};
	font-size: ${props => getFontSize(props.size)};
	line-height: ${props => getLineHeight(props.size)};
	position: ${props => props.position && props.position};
	font-family: 'Lato', sans-serif;
`;

////

export const StyledTag = styled.p<StyledParagraphProps>`
	color: ${props => props.textColor && props.textColor};
	font-weight: 800;
	font-size: 12px;
	line-height: 12px;
	text-transform: uppercase;
	font-family: 'Lato', sans-serif;
`;


export const StyledSubHeadline = styled.p<StyledParagraphProps>`
	color: ${props => props.textColor && props.textColor};
	font-weight: 600;
	font-size: 18px;
	line-height: 30px;

	@media ${devices.laptop} {
		font-size: 20px;
		line-height: 32px;
	}
`;
