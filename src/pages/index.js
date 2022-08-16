import Head from 'next/head';

import StyledForm from '../components/Form/StyledForm';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import useStore from '../hooks/useStore';

export default function HomePage() {
	const tasks = useStore(state => state.tasks);
	const addTask = useStore(state => state.addTask);

	function handleSubmit(event) {
		event.preventDefault();
		addTask(event.target.task.value, event.target.duration.value);
	}

	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Meine Aufgaben App</h1>
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
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor="task">Aufgabe</label>
				<input type="text" name="task" id="task" />
				<label htmlFor="duration">Dauer in Minuten</label>
				<input type="number" name="duration" id="duration" />
				<button>Speichern</button>
			</StyledForm>
		</>
	);
}
