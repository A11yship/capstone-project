import StyledForm from '../components/Form/StyledForm';

export default function GenerateList() {
	return (
		<>
			<h1>Liste generieren</h1>
			<StyledForm>
				<label htmlFor="totalDuration">Gesamtdauer in Minuten</label>
				<input
					type="number"
					name="totalDuration"
					id="totalDuration"
					required
					min={1}
					placeholder="45"
				></input>
				<label htmlFor="numberOfTasks">Anzahl der Aufgaben</label>
				<input
					type="number"
					name="numberOfTasks"
					id="numberOfTasks"
					required
					min={1}
					placeholder="5"
				></input>
				<button type="button">Abbrechen</button>
				<button>Generieren</button>
			</StyledForm>
		</>
	);
}
