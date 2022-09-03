import Button from '../components/Button/Button';
import Layout from '../components/Layout';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import Modal from '../components/Modal/Modal';
import useStore from '../hooks/useStore';

export default function TaskList() {
	const tasks = useStore(state => state.tasks);
	const deleteTask = useStore(state => state.deleteTask);

	return (
		<Layout>
			<h1>Alle Aufgaben</h1>
			<Modal />
			<StyledList role="list">
				{tasks.map(task => (
					<StyledListItem key={task.id}>
						<span>{task.name}</span>
						<span>{task.time}min</span>
						<Button onClick={() => deleteTask(task.id)}>Löschen</Button>
					</StyledListItem>
				))}
			</StyledList>
		</Layout>
	);
}
