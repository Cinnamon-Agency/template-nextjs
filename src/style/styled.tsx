import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';
import emotionNormalize from 'emotion-normalize';
import { colors } from 'parameters';

export const globalStyles = (
	<>
		<Global
			styles={css`
				/* https://meyerweb.com/eric/tools/css/reset/ */
				${emotionReset}
				/* https://github.com/necolas/normalize.css/blob/master/normalize.css */
				/* normalizer is setting Y-axis margins on <h1> only. Don't be confused */
				${emotionNormalize}


				html,
				body {
					color: ${colors.body};
					font-family: 'Lato', sans-serif;
				}

				h1 {
					font-family: 'Epilogue', sans-serif;
					font-style: normal;
					font-size: 64px;
					line-height: 1.1;
					font-weight: 700;
				}

				h2 {
					font-family: 'Epilogue', sans-serif;
					font-style: normal;
					font-weight: 800;
					font-size: 32px;
					line-height: 1.1;
					font-weight: 700;
				}

				h3 {
					font-family: 'Epilogue', sans-serif;
					font-size: 27px;
					line-height: 1.25;
					font-weight: 700;
				}

				h4 {
					font-family: 'Epilogue', sans-serif;
					font-style: normal;
					font-size: 24px;
					line-height: 1.3;
					font-weight: 700;
				}

				h5 {
					font-family: 'Epilogue', sans-serif;
					font-style: normal;
					font-size: 20px;
					line-height: 1.3;
					font-weight: 700;
				}

				h6 {
					font-family: 'Epilogue', sans-serif;
					font-style: normal;
					font-size: 18px;
					line-height: 1.3;
					font-weight: 600;
				}

				a {
					color: ${colors.body};
				}
			`}
		/>
	</>
);
