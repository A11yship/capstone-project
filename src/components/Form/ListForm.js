import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';
import selectTasks from '../../utils/selectTasks';
import shuffle from '../../utils/shuffle';
import Button from '../Button/Button';
import StyledButtonContainer from '../ButtonContainer/StyledButtonContainer';
import StyledInput from '../Input/StyledInput';

import StyledForm from './StyledForm';

export default function ListForm() {
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
			(firstTask, secondTask) => firstTask.duration - secondTask.duration
		);
		const selectedTasks = selectTasks(orderedTasks, number, totalDuration);
		shuffle(selectedTasks);
		updateCurrentTasks(selectedTasks);
		form.reset();
		router.push('/');
	}

	return (
		<StyledForm name="generateList" onSubmit={handleSubmit}>
			<label htmlFor="totalDuration">Gesamtdauer in Minuten</label>
			<StyledInput
				type="number"
				name="totalDuration"
				id="totalDuration"
				required
				min={1}
				placeholder="45"
			/>
			<label htmlFor="numberOfTasks">Anzahl der Aufgaben</label>
			<StyledInput
				type="number"
				name="numberOfTasks"
				id="numberOfTasks"
				required
				min={1}
				placeholder="5"
			/>
			<StyledButtonContainer inForm>
				<Button type="button" onClick={() => router.push('/')}>
					Abbrechen
				</Button>
				<Button type="submit">Generieren</Button>
			</StyledButtonContainer>
		</StyledForm>
	);
}
