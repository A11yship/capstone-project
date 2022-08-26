import StyledColumn from '../components/Column/StyledColumn';
import StyledContainer from '../components/Container/StyledContainer';

export default function CreateList() {
	const columns = ['Alle Aufgaben', 'Ausgewählte Aufgaben'];

	return (
		<>
			<h1>Wähle aktuelle Aufgaben </h1>
			<StyledContainer>
				{columns.map(column => {
					return <StyledColumn key={column}>{column}</StyledColumn>;
				})}
			</StyledContainer>
		</>
	);
}
