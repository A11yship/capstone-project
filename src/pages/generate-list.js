import {useRouter} from 'next/router';

import StyledForm from '../components/Form/StyledForm';
import useStore from '../hooks/useStore';
import selectTasks from '../utils/selectTasks';
import shuffle from '../utils/shuffle';

export default function GenerateList() {
	const router = useRouter();
	const tasks = useStore(state => state.tasks);
	const updateCurrentTasks = useStore(state => state.updateCurrentTasks);

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const totalDuration = Number.parseInt(form.elements.totalDuration.value, 10);
		const number = Number.parseInt(form.elements.numberOfTasks.value, 10);
		const shuffledTasks = [...tasks];
		shuffle(shuffledTasks);
		const orderedTasks = shuffledTasks.sort(
			(firstTask, secondTask) => firstTask.time - secondTask.time
		);
		const selectedTasks = selectTasks(orderedTasks, number, totalDuration);
		shuffle(selectedTasks);
		updateCurrentTasks(selectedTasks);
		form.reset();
		router.push('/');
	}

	return (
		<>
			<h1>Liste generieren</h1>
			<StyledForm name="generateList" onSubmit={handleSubmit}>
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
				<button type="button" onClick={() => router.push('/')}>
					Abbrechen
				</button>
				<button>Generieren</button>
			</StyledForm>
		</>
	);
}
