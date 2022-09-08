import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import {Clock, Time} from '../AnalogTimer/StyledAnalogtimer';
import Button from '../Button/Button';
import StyledButtonContainer from '../ButtonContainer/StyledButtonContainer';
import Icon from '../Icon/Icon';

import {StyledCurrentTask, StyledP, StyledSpan} from './StyledCurrentTask';

export default function CurrentTask() {
	const currentTasks = useStore(state => state.currentTasks);
	const deleteFromCurrentTasks = useStore(state => state.deleteFromCurrentTasks);

	const [time, setTime] = useState(0);
	const [timerIsRunnig, setTimerIsRunnig] = useState(false);

	useEffect(() => {
		setTime(currentTasks.length ? currentTasks[0].duration * 60 : 0);
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
										background: `conic-gradient(var(--brand-color) ${
											time * 0.1
										}deg, var(--succes) 0 ${
											currentTasks[0].duration * 6
										}deg, var(--light-color) ${
											currentTasks[0].duration * 6
										}deg)`,
									}}
								></Time>
							</Clock>
						</>
					) : (
						<StyledSpan over>Fertig!</StyledSpan>
					)}
					<StyledButtonContainer>
						{time ? (
							<Button variant="icon" onClick={() => setTimerIsRunnig(!timerIsRunnig)}>
								{timerIsRunnig ? <Icon variant="break" /> : <Icon variant="play" />}
							</Button>
						) : (
							''
						)}
						<Button variant="icon" onClick={handleDone}>
							<Icon variant="done" />
						</Button>
					</StyledButtonContainer>
				</>
			) : (
				<StyledP>
					Willkommen bei My TaskTimer. <br />
					Stell dir unter &quot;Neue Liste&quot; eine Liste an Aufgaben selber zusammen
					oder lass dir unter &quot;Liste generieren&quot; eine erzeugen. Gibt ein wie
					lange du fleißig sein willst und wie viele Aufgaben du erledigen willst, den
					Rest erledigt die App.
				</StyledP>
			)}
		</StyledCurrentTask>
	);
}
