import { NextPage } from 'next'
import styled from '@emotion/styled'
import { Layout, LayoutContainer, Heading2, Paragraph } from 'components/shared'
import { page404 } from 'components/screens/404'
import { Button } from 'components/shared/button'

const Custom404: NextPage = () => {
	return (
		<Layout metaTags={page404.seoTags}>
			<LayoutContainer>
				<Section>
					<HeadingWrapper>
						<Heading2 text={page404.title} isDangerouslySet />
					</HeadingWrapper>
					<Paragraph text={page404.text} size="m" />
					<Button text={page404.button.text} href={page404.button.link} />
				</Section>
			</LayoutContainer>
		</Layout>
	)
}

const Section = styled.section`
	text-align: center;
	margin: 58px auto 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	& > * {
		margin-bottom: 32px;
		max-width: 448px;
	}
	a {
		margin-bottom: 0;
	}
`
const HeadingWrapper = styled.div`
	max-width: 545px;
`

export default Custom404
