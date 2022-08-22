import useStore from '../../hooks/useStore';

import StyledCurrentTask from './StyledCurrentTask';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);

	return (
		<StyledCurrentTask>
			<p>{tasks[0].name}</p>
			<p>{tasks[0].time} min</p>
		</StyledCurrentTask>
	);
}
