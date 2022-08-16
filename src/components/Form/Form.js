import useStore from '../../hooks/useStore';

import StyledForm from './StyledForm';

export default function Form() {
	const addTask = useStore(state => state.addTask);

	function handleSubmit(event) {
		event.preventDefault();
		const name = event.target.task.value.trim();
		const duration = Number.parseInt(event.target.duration.value, 10);
		addTask(name, duration);
		event.target.reset();
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label htmlFor="task">Aufgabe</label>
			<input type="text" name="task" id="task" required placeholder="Neue Aufgabe" />
			<label htmlFor="duration">Dauer in Minuten</label>
			<input type="number" name="duration" id="duration" required min={1} placeholder="1" />
			<button>Speichern</button>
		</StyledForm>
	);
}
