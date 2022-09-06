import {useRouter} from 'next/router';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import Button from '../Button/Button';
import StyledButtonContainer from '../ButtonContainer/StyledButtonContainer';
import StyledInput from '../Input/StyledInput';

import StyledForm from './StyledForm';

export default function Form({task = {}}) {
	const [taskName, setTaskName] = useState(task.name ?? '');
	const [duration, setDuration] = useState(task.time ?? '');
	const addTask = useStore(state => state.addTask);
	const editTask = useStore(state => state.editTask);
	const router = useRouter();

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		if (task.id) {
			editTask(task.id, taskName, duration);
		} else {
			addTask(taskName, duration);
		}
		form.reset();
		router.push('/task-list');
	}

	return (
		<StyledForm onSubmit={handleSubmit} name="task">
			<label htmlFor="task">Aufgabe</label>
			<StyledInput
				type="text"
				name="task"
				id="task"
				required
				placeholder="Neue Aufgabe"
				minLength={1}
				pattern=".*\S.*"
				value={taskName}
				onChange={event => setTaskName(event.target.value)}
			/>
			<label htmlFor="duration">Dauer in Minuten</label>
			<StyledInput
				type="number"
				name="duration"
				id="duration"
				required
				min={1}
				placeholder="10"
				value={duration}
				onChange={event => setDuration(Number.parseInt(event.target.value), 10)}
			/>
			<StyledButtonContainer inForm>
				{task.id && <Button onClick={() => router.push('/task-list')}>Abbrechen</Button>}
				<Button type="submit">Speichern</Button>
			</StyledButtonContainer>
		</StyledForm>
	);
}
