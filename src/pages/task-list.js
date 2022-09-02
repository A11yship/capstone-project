import Button from '../components/Button/Button';
import Layout from '../components/Layout';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import useStore from '../hooks/useStore';

export default function TaskList() {
	const tasks = useStore(state => state.tasks);
	return (
		<Layout>
			<h1>Alle Aufgaben</h1>
			<StyledList role="list">
				{tasks.map(task => (
					<StyledListItem key={task.id}>
						<span>{task.name}</span>
						<span>{task.time}min</span>
						<Button onClick={() => console.log('Bearbeiten')}>Edit</Button>
					</StyledListItem>
				))}
			</StyledList>
		</Layout>
	);
}
