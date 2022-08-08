import styled from '@emotion/styled';
import { CaptionSize, FontSizesCaptions, LineHeightsCaptions } from './Captions.parameters';


export interface StyledCaptionProps {
	textColor?: string;
	size?: CaptionSize;
	bold?: boolean;
	position?: string;
}

const getFontSize = (size: CaptionSize | undefined): string => {
	switch (size) {
		case 's':
			return FontSizesCaptions.S;
		case 'm':
			return FontSizesCaptions.M;
		default:
			return '12px';
	}
};

const getLineHeight = (size: CaptionSize | undefined): string => {
	switch (size) {
		case 's':
			return LineHeightsCaptions.S;
		case 'm':
			return LineHeightsCaptions.M;
		default:
			return '1.3';
	}
};


export const StyledCaption = styled.p<StyledCaptionProps>`
	color: ${props => props.textColor && props.textColor};
	font-size: ${props => getFontSize(props.size)};
	line-height: ${props => getLineHeight(props.size)};
	position: ${props => props.position && props.position};
	font-family: 'Epilogue', sans-serif;
	font-weight: 700;
`;
