import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import {Clock, Time} from '../AnalogTimer/StyledAnalogtimer';
import Button from '../Button/Button';
import StyledButtonContainer from '../ButtonContainer/StyledButtonContainer';

import {StyledCurrentTask, StyledSpan} from './StyledCurrentTask';

export default function CurrentTask() {
	const currentTasks = useStore(state => state.currentTasks);
	const deleteFromCurrentTasks = useStore(state => state.deleteFromCurrentTasks);

	const [time, setTime] = useState(0);
	const [timerIsRunnig, setTimerIsRunnig] = useState(false);

	useEffect(() => {
		setTime(currentTasks.length ? currentTasks[0].time * 60 : 0);
	}, [currentTasks]);

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
		deleteFromCurrentTasks(currentTasks[0].id);
		setTimerIsRunnig(false);
	}

	return (
		<StyledCurrentTask>
			{currentTasks.length ? (
				<>
					<StyledSpan>{currentTasks[0].name}</StyledSpan>
					{time ? (
						<>
							<StyledSpan>
								{Math.floor(time / 60)}:{String(time % 60).padStart(2, '0')} min
							</StyledSpan>
							<Clock role="img" alt="analoge Darstellung des Timers">
								<Time
									style={{
										background: `conic-gradient(var(--danger) ${
											time * 0.1
										}deg, var(--brand-color) 0 ${
											currentTasks[0].time * 6
										}deg, transparent ${currentTasks[0].time * 6}deg)`,
									}}
								></Time>
							</Clock>
						</>
					) : (
						<StyledSpan over>Fertig!</StyledSpan>
					)}
					<StyledButtonContainer>
						{time ? (
							<Button onClick={() => setTimerIsRunnig(!timerIsRunnig)}>
								{timerIsRunnig ? 'Pause' : 'Start'}
							</Button>
						) : (
							''
						)}
						<Button onClick={handleDone}>done</Button>
					</StyledButtonContainer>
				</>
			) : (
				<StyledSpan>Keine aktuellen Aufgabe</StyledSpan>
			)}
		</StyledCurrentTask>
	);
}
