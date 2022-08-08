import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import useWindowSize from 'hooks/useWindowSize';
import { Layout } from 'components/shared';
import { getHome, Welcome } from 'components/screens/index';
import { defaultMetaTags } from 'parameters';


interface ServerSideProps {}

const IndexPage: NextPage<ServerSideProps> = (props: ServerSideProps) => {
	const screenSize = useWindowSize();
	const home = getHome({ screenSize });

	return (
		<Layout metaTags={defaultMetaTags}>
			<Welcome title={home.welcome.title} />
		</Layout>
	);
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async () => {
	return {
		props: {

		}
	};
};
