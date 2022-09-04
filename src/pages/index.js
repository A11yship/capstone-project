import Head from 'next/head';
import {useRouter} from 'next/router';

import Button from '../components/Button/Button';
import CurrentTask from '../components/CurrentTask/CurrentTask';
import Icon from '../components/Icon/Icon';
import Layout from '../components/Layout';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
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
				<h2>Aktuelle Aufgaben</h2>
				<Button onClick={() => router.push('/create-list')}>
					{currentTasks.length === 0 ? 'Neue Liste' : 'Liste editieren'}
				</Button>
				<Button onClick={() => router.push('/generate-list')}>Liste generieren</Button>
				<StyledList role="list">
					{currentTasks.map((task, index) => (
						<StyledListItem key={task.id} current={index === 0}>
							<span>{task.name}</span>
							<span>{task.time}min</span>
						</StyledListItem>
					))}
				</StyledList>
				<Icon variant="delete" color="var(--light-color)" />
				<Icon variant="edit" color="var(--light-accent)" />
				<Icon variant="play" color="var(--brand-color)" />
				<Icon variant="pause" color="var(--dark-accent)" />
				<Icon variant="done" color="var(--dark-color)" />
				<Icon variant="add" />
				<Icon variant="list" />
			</Layout>
		</>
	);
}
