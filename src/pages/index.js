import Head from 'next/head';

import Form from '../components/Form/Form';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const tasks = useStore(state => state.tasks);

	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Meine Aufgaben App</h1>
			<h2>Aktuelle Aufgabe</h2>
			<div>
				<p>{tasks[0].name}</p>
				<p>{tasks[0].time} min</p>
			</div>
			<h2>Aufgabenliste</h2>
			<StyledList role="list">
				{tasks.map(task => (
					<StyledListItem key={task.id}>
						<span>{task.name}</span>
						<span>{task.time}min</span>
					</StyledListItem>
				))}
			</StyledList>
			<h2>Aufgabe hinzufügen</h2>
			<Form />
		</>
	);
}
