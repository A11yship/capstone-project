import Head from 'next/head';

import CurrentTask from '../components/CurrentTask/CurrentTask';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import StyledMain from '../components/StyledMain';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const tasks = useStore(state => state.tasks);

	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledMain>
				<h1>Meine Aufgaben App</h1>
				<h2>Aktuelle Aufgabe</h2>
				<CurrentTask />
				<h2>Aufgabenliste</h2>
				<StyledList role="list">
					{tasks.map((task, index) => (
						<StyledListItem key={task.id} current={index === 0}>
							<span>{task.name}</span>
							<span>{task.time}min</span>
						</StyledListItem>
					))}
				</StyledList>
			</StyledMain>
		</>
	);
}
