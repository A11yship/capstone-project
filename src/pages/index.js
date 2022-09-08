import dynamic from 'next/dynamic';
import Head from 'next/head';
import {useRouter} from 'next/router';

import Button from '../components/Button/Button';
import Layout from '../components/Layout';
import {StyledListItem} from '../components/ListItem/StyledListItem';
import useStore from '../hooks/useStore';

const CurrentTaskWrapper = dynamic(() => import('../components/CurrentTask/CurrentTask'), {
	ssr: false,
});

const StyledListWrapper = dynamic(() => import('../components/List/StyledList'), {
	ssr: false,
});
const StyledButtonContainerWrapper = dynamic(
	() => import('../components/ButtonContainer/StyledButtonContainer'),
	{
		ssr: false,
	}
);

export default function HomePage() {
	const currentTasks = useStore(state => state.currentTasks);
	const router = useRouter();

	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Layout>
				<h1>My TaskTimer</h1>
				<h2>Aktuelle Aufgabe</h2>
				<CurrentTaskWrapper />
				<h2>Aufgaben</h2>
				<StyledListWrapper role="list">
					{currentTasks.map((task, index) => (
						<StyledListItem key={task.id} current={index === 0}>
							<span>{task.name}</span>
							<span>{task.time}min</span>
						</StyledListItem>
					))}
				</StyledListWrapper>
				<StyledButtonContainerWrapper>
					<Button onClick={() => router.push('/create-list')}>
						{currentTasks.length === 0 ? 'Neue Liste' : 'Liste bearbeiten'}
					</Button>
					<Button onClick={() => router.push('/generate-list')}>Liste generieren</Button>
				</StyledButtonContainerWrapper>
			</Layout>
		</>
	);
}
