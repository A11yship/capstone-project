import useStore from '../../hooks/useStore';
import Button from '../Button/Button';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);
	const completeTask = useStore(state => state.deleteTask);

	if (tasks.length) {
		return (
			<StyledCurrentTask>
				<p>{tasks[0].name}</p>
				<p>{tasks[0].time} min</p>
				<Button onClick={() => completeTask(tasks[0].id)}>done</Button>
			</StyledCurrentTask>
		);
	} else {
		return (
			<StyledCurrentTask>
				<p>Keine Aufgabe</p>
			</StyledCurrentTask>
		);
	}
}
