import useStore from '../../hooks/useStore';
import Button from '../Button/Button';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);
	function handleClick() {
		console.log('done');
	}

	return (
		<StyledCurrentTask>
			<p>{tasks[0].name}</p>
			<p>{tasks[0].time} min</p>
			<Button onClick={handleClick}>done</Button>
		</StyledCurrentTask>
	);
}
