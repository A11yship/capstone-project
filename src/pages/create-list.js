import StyledColumn from '../components/Column/StyledColumn';
import StyledContainer from '../components/Container/StyledContainer';
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
								return <div key={task.id}>{task.name}</div>;
							})}
						</StyledColumn>
					);
				})}
			</StyledContainer>
		</>
	);
}
