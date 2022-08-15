import Head from 'next/head';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Meine Aufgaben</h1>
		</Layout>
	);
}
