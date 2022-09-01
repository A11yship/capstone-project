import {useRouter} from 'next/router';

import StyledForm from '../components/Form/StyledForm';
import useStore from '../hooks/useStore';

export default function GenerateList() {
	const router = useRouter();
	const tasks = useStore(state => state.tasks);
	const updateCurrentTasks = useStore(state => state.updateCurrentTasks);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	function selectTasks(
		orderedTasks,
		upperIndex,
		number,
		totalDuration,
		avarageDuration,
		lowerIndex = upperIndex - 1,
		currentDuration = 0,
		selectedTasks = [],
		up = true
	) {
		if (
			number === selectedTasks.length ||
			currentDuration >= totalDuration ||
			selectedTasks.length === orderedTasks.length
		) {
			return selectedTasks;
		} else if (
			up &&
			upperIndex < orderedTasks.length &&
			orderedTasks[upperIndex].time === avarageDuration
		) {
			selectedTasks.push(orderedTasks[upperIndex]);
			currentDuration += orderedTasks[upperIndex].time;
			upperIndex += 1;
			return selectTasks(
				orderedTasks,
				upperIndex,
				number,
				totalDuration,
				avarageDuration,
				lowerIndex,
				currentDuration,
				selectedTasks,
				up
			);
		} else if (up) {
			if (upperIndex < orderedTasks.length) {
				selectedTasks.push(orderedTasks[upperIndex]);
				currentDuration += orderedTasks[upperIndex].time;
				upperIndex += 1;
				up = !up;
				return selectTasks(
					orderedTasks,
					upperIndex,
					number,
					totalDuration,
					avarageDuration,
					lowerIndex,
					currentDuration,
					selectedTasks,
					up
				);
			} else {
				up = !up;
				return selectTasks(
					orderedTasks,
					upperIndex,
					number,
					totalDuration,
					avarageDuration,
					lowerIndex,
					currentDuration,
					selectedTasks,
					up
				);
			}
		} else if (!up) {
			if (lowerIndex >= 0) {
				selectedTasks.push(orderedTasks[lowerIndex]);
				currentDuration += orderedTasks[lowerIndex].time;
				lowerIndex -= 1;
				up = !up;
				return selectTasks(
					orderedTasks,
					upperIndex,
					number,
					totalDuration,
					avarageDuration,
					lowerIndex,
					currentDuration,
					selectedTasks,
					up
				);
			} else {
				up = !up;
				return selectTasks(
					orderedTasks,
					upperIndex,
					number,
					totalDuration,
					avarageDuration,
					lowerIndex,
					currentDuration,
					selectedTasks,
					up
				);
			}
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const totalDuration = Number.parseInt(form.elements.totalDuration.value, 10);
		const number = Number.parseInt(form.elements.numberOfTasks.value, 10);
		const avarageDuration = totalDuration / number;
		const shuffledTasks = [...tasks];
		shuffle(shuffledTasks);
		const orderedTasks = shuffledTasks.sort(
			(firstTask, secondTask) => firstTask.time - secondTask.time
		);
		const index = orderedTasks.findIndex(task => task.time >= avarageDuration);
		const selectedTasks = selectTasks(
			orderedTasks,
			index,
			number,
			totalDuration,
			avarageDuration
		);
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
