import Head from 'next/head';
import {useRouter} from 'next/router';

import Button from '../components/Button/Button';
import StyledButtonContainer from '../components/ButtonContainer/StyledButtonContainer';
import CurrentTask from '../components/CurrentTask/CurrentTask';
import Layout from '../components/Layout';
import StyledList from '../components/List/StyledList';
import {StyledListItem} from '../components/ListItem/StyledListItem';
import useStore from '../hooks/useStore';

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
				<h1>Meine Aufgaben App</h1>
				<h2>Aktuelle Aufgabe</h2>
				<CurrentTask />
				<h2>Weitere Aufgaben</h2>
				<StyledList role="list">
					{currentTasks.map((task, index) => (
						<StyledListItem key={task.id} current={index === 0}>
							<span>{task.name}</span>
							<span>{task.time}min</span>
						</StyledListItem>
					))}
				</StyledList>
				<StyledButtonContainer>
					<Button onClick={() => router.push('/create-list')}>
						{currentTasks.length === 0 ? 'Neue Liste' : 'Liste bearbeiten'}
					</Button>
					<Button onClick={() => router.push('/generate-list')}>Liste generieren</Button>
				</StyledButtonContainer>
			</Layout>
		</>
	);
}
