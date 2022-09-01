import {useRouter} from 'next/router';

import StyledForm from '../components/Form/StyledForm';
import useStore from '../hooks/useStore';
import shuffle from '../utils/shuffle';

export default function GenerateList() {
	const router = useRouter();
	const tasks = useStore(state => state.tasks);
	const updateCurrentTasks = useStore(state => state.updateCurrentTasks);

	function selectTasks(
		orderedTasks,
		number,
		totalDuration,
		upperIndex,
		lowerIndex,
		currentDuration = 0,
		selectedTasks = [],
		up = true
	) {
		const avarageDuration = totalDuration / number;
		if (!upperIndex) {
			upperIndex = orderedTasks.findIndex(task => task.time >= avarageDuration);
			lowerIndex = upperIndex - 1;
		}
		if (
			number === selectedTasks.length ||
			currentDuration >= totalDuration ||
			selectedTasks.length === orderedTasks.length
		) {
			return selectedTasks;
		} else if (up) {
			if (upperIndex < orderedTasks.length) {
				if (orderedTasks[upperIndex].time === avarageDuration) {
					up = !up;
				}
				selectedTasks.push(orderedTasks[upperIndex]);
				currentDuration += orderedTasks[upperIndex].time;
				upperIndex += 1;
			}
		} else {
			if (lowerIndex >= 0) {
				selectedTasks.push(orderedTasks[lowerIndex]);
				currentDuration += orderedTasks[lowerIndex].time;
				lowerIndex -= 1;
			}
		}
		up = !up;
		return selectTasks(
			orderedTasks,
			number,
			totalDuration,
			upperIndex,
			lowerIndex,
			currentDuration,
			selectedTasks,
			up
		);
	}

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
