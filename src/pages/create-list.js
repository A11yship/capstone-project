import StyledColumn from '../components/Column/StyledColumn';
import StyledContainer from '../components/Container/StyledContainer';
import StyledTask from '../components/Task/StyledTask';
import useStore from '../hooks/useStore';

export default function CreateList() {
	const columns = ['Alle Aufgaben', 'Ausgewählte Aufgaben'];
	const tasks = useStore(state => state.tasks);

	return (
		<>
			<h1>Wähle aktuelle Aufgaben </h1>
			<StyledContainer>
				{columns.map(column => {
					return (
						<StyledColumn key={column}>
							{column}{' '}
							{tasks.map(task => {
								return (
									<StyledTask key={task.id}>
										{task.name}, {task.time} min
									</StyledTask>
								);
							})}
						</StyledColumn>
					);
				})}
			</StyledContainer>
		</>
	);
}
