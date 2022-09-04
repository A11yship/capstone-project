import {useRouter} from 'next/router';

import Button from '../components/Button/Button';
import StyledButtonContainer from '../components/ButtonContainer/StyledButtonContainer';
import StyledForm from '../components/Form/StyledForm';
import StyledInput from '../components/Input/StyledInput';
import StyledMain from '../components/StyledMain';
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
		<StyledMain>
			<h1>Liste generieren</h1>
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
				<StyledButtonContainer>
					<Button type="button" onClick={() => router.push('/')}>
						Abbrechen
					</Button>
					<Button type="submit">Generieren</Button>
				</StyledButtonContainer>
			</StyledForm>
		</StyledMain>
	);
}
