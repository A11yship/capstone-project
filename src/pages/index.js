import Head from 'next/head';
import {useRouter} from 'next/router';

import Button from '../components/Button/Button';
import CurrentTask from '../components/CurrentTask/CurrentTask';
import Layout from '../components/Layout';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const tasks = useStore(state => state.tasks);
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
				<h2>Aktuelle Aufgaben</h2>
				<Button onClick={() => router.push('/create-list')}>Neue Liste</Button>
				<StyledList role="list">
					{currentTasks.map((task, index) => (
						<StyledListItem key={task.id} current={index === 0}>
							<span>{task.name}</span>
							<span>{task.time}min</span>
						</StyledListItem>
					))}
				</StyledList>
				<h2>Alle Aufgaben</h2>
				<StyledList role="list">
					{tasks.map(task => (
						<StyledListItem key={task.id}>
							<span>{task.name}</span>
							<span>{task.time}min</span>
						</StyledListItem>
					))}
				</StyledList>
			</Layout>
		</>
	);
}
