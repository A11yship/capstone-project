import useStore from '../../hooks/useStore';

import StyledForm from './StyledForm';

export default function Form() {
	const addTask = useStore(state => state.addTask);

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const name = form.elements.task.value.trim();
		const duration = Number.parseInt(form.elements.duration.value, 10);
		addTask(name, duration);
		form.reset();
	}

	return (
		<StyledForm onSubmit={handleSubmit} name="task">
			<label htmlFor="task">Aufgabe</label>
			<input type="text" name="task" id="task" required placeholder="Neue Aufgabe" />
			<label htmlFor="duration">Dauer in Minuten</label>
			<input type="number" name="duration" id="duration" required min={1} placeholder="1" />
			<button>Speichern</button>
		</StyledForm>
	);
}
