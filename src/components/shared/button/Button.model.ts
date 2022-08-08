export interface TemplateButtonParameters {
	background: TemplateButtonState;
	outline: TemplateButtonState;
	text: TemplateButtonState;
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonState = 'normal' | 'hover' | 'disabled';

export type ButtonSize = 'small' | 'base' | 'big';

export type TemplateButtonColors = { [key in ButtonVariant]: TemplateButtonParameters };

export type TemplateButtonState = { [key in ButtonState]: string };
