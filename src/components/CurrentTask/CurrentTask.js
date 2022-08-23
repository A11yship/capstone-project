import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import Button from '../Button/Button';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);
	const completeTask = useStore(state => state.deleteTask);

	const [time, setTime] = useState(tasks[0].time * 60);
	const [timerIsRunnig, setTimerIsRunnig] = useState(false);

	useEffect(() => {
		let interval;
		if (timerIsRunnig) {
			interval = setInterval(() => {
				if (time >= 0) {
					setTime(time => time - 1);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [timerIsRunnig]);

	return (
		<StyledCurrentTask>
			{tasks.length ? (
				<>
					<p>{tasks[0].name}</p>
					<p>
						{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')} min
					</p>
					<Button onClick={() => setTimerIsRunnig(!timerIsRunnig)}>
						{timerIsRunnig ? 'Pause' : 'Start'}
					</Button>
					<Button onClick={() => completeTask(tasks[0].id)}>done</Button>
				</>
			) : (
				<p>Keine Aufgabe</p>
			)}
		</StyledCurrentTask>
	);
}
