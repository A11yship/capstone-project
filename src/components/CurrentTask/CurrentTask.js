import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import {Clock, Time} from '../AnalogTimer/StyledAnalogtimer';
import Button from '../Button/Button';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);
	const completeTask = useStore(state => state.deleteTask);

	const [time, setTime] = useState(0);
	const [timerIsRunnig, setTimerIsRunnig] = useState(false);

	useEffect(() => {
		setTime(tasks.length ? tasks[0].time * 60 : 0);
	}, [tasks]);

	useEffect(() => {
		let interval;
		if (timerIsRunnig) {
			interval = setInterval(() => {
				if (time > 0) {
					setTime(time => time - 1);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [timerIsRunnig, time]);

	function handleDone() {
		completeTask(tasks[0].id);
		setTimerIsRunnig(false);
	}

	return (
		<StyledCurrentTask>
			{tasks.length ? (
				<>
					<p>{tasks[0].name}</p>
					{time ? (
						<>
							<p>
								{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')} min
							</p>
							<Clock role="img" alt="analoge Darstellung des Timers">
								<Time
									style={{
										background: `conic-gradient(red ${time * 0.1}deg, blue 0 ${
											tasks[0].time * 6
										}deg, transparent ${tasks[0].time * 6}deg)`,
									}}
								></Time>
							</Clock>
							<Button onClick={() => setTimerIsRunnig(!timerIsRunnig)}>
								{timerIsRunnig ? 'Pause' : 'Start'}
							</Button>
						</>
					) : (
						<p className="over">Fertig!</p>
					)}
					<Button onClick={handleDone}>done</Button>
				</>
			) : (
				<p>Keine Aufgabe</p>
			)}
		</StyledCurrentTask>
	);
}
