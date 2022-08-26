import {useRouter} from 'next/router';

import useStore from '../../hooks/useStore';

import StyledForm from './StyledForm';

export default function Form() {
	const addTask = useStore(state => state.addTask);
	const router = useRouter();

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const taskName = form.elements.task.value.trim();
		const duration = Number.parseInt(form.elements.duration.value, 10);
		addTask(taskName, duration);
		form.reset();
		router.push('/');
	}

	return (
		<StyledForm onSubmit={handleSubmit} name="task">
			<label htmlFor="task">Aufgabe</label>
			<input
				type="text"
				name="task"
				id="task"
				required
				placeholder="Neue Aufgabe"
				minLength={1}
				pattern=".*\S.*"
			/>
			<label htmlFor="duration">Dauer in Minuten</label>
			<input type="number" name="duration" id="duration" required min={1} placeholder="10" />
			<button>Speichern</button>
		</StyledForm>
	);
}
