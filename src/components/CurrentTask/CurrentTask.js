import {useState} from 'react';

import useStore from '../../hooks/useStore';
import Button from '../Button/Button';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);
	const completeTask = useStore(state => state.deleteTask);

	const [min, setMin] = useState(tasks[0].time);
	const [sec, setSec] = useState(0);

	function timer(time) {
		time = time * 60;
		setInterval(() => {
			if (time > 0) {
				setMin(Math.floor(time / 60));
				setSec(time % 60);
				time = time - 1;
			}
		}, 1000);
	}

	function handleClick() {
		timer(tasks[0].time);
	}

	return (
		<StyledCurrentTask>
			{tasks.length ? (
				<>
					<p>{tasks[0].name}</p>
					<p>
						{min}:{String(sec).padStart(2, '0')} min
					</p>
					<Button onClick={handleClick}>Start</Button>
					<Button onClick={() => completeTask(tasks[0].id)}>done</Button>
				</>
			) : (
				<p>Keine Aufgabe</p>
			)}
		</StyledCurrentTask>
	);
}
