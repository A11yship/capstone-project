import {useEffect, useRef, useState} from 'react';

import useStore from '../../hooks/useStore';
import Button from '../Button/Button';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);
	const completeTask = useStore(state => state.deleteTask);

	const [min, setMin] = useState(tasks[0].time);
	const [sec, setSec] = useState(0);
	//const [time, setTime] = useState(tasks[0].time);
	const [timerIsRunnig, setTimerIsRunnig] = useState(false);
	let interval = useRef();

	// useEffect(() => {
	// 	setTime(tasks[0].time * 60);
	// }, [tasks]);

	useEffect(() => {
		//let interval;
		let id;
		let time = tasks[0].time * 60 - 1;
		if (timerIsRunnig) {
			id = setInterval(() => {
				if (time >= 0) {
					setMin(Math.floor(time / 60));
					setSec(time % 60);
					//setTime(time - 1);
					time = time - 1;
				}
			}, 1000);
		}
		interval.current = id;
		// } else {
		//return clearInterval(interval.current);
		// }
	}, [timerIsRunnig, tasks]);

	function handleClick() {
		setTimerIsRunnig(!timerIsRunnig);
		if (timerIsRunnig) {
			//timer(tasks[0].time);
			console.log('start', timerIsRunnig);
		} else {
			clearInterval(interval.current);
			console.log('stop', timerIsRunnig);
		}
	}

	return (
		<StyledCurrentTask>
			{tasks.length ? (
				<>
					<p>{tasks[0].name}</p>
					<p>
						{min}:{String(sec).padStart(2, '0')} min
					</p>
					<Button onClick={handleClick}>{timerIsRunnig ? 'Pause' : 'Start'}</Button>
					<Button onClick={() => completeTask(tasks[0].id)}>done</Button>
				</>
			) : (
				<p>Keine Aufgabe</p>
			)}
		</StyledCurrentTask>
	);
}
