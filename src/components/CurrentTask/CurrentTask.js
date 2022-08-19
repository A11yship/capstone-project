import useStore from '../../hooks/useStore';

export default function CurrentTask() {
	const tasks = useStore(state => state.tasks);

	return (
		<div>
			<p>{tasks[0].name}</p>
			<p>{tasks[0].time} min</p>
		</div>
	);
}
