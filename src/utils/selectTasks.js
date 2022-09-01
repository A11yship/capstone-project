export default function selectTasks(
	orderedTasks,
	number,
	totalDuration,
	upperIndex,
	lowerIndex,
	currentDuration = 0,
	selectedTasks = [],
	up = true
) {
	const avarageDuration = totalDuration / number;
	if (!upperIndex) {
		upperIndex = orderedTasks.findIndex(task => task.time >= avarageDuration);
		lowerIndex = upperIndex - 1;
	}
	if (
		number === selectedTasks.length ||
		currentDuration >= totalDuration ||
		selectedTasks.length === orderedTasks.length
	) {
		return selectedTasks;
	} else if (up) {
		if (upperIndex < orderedTasks.length) {
			if (orderedTasks[upperIndex].time === avarageDuration) {
				up = !up;
			}
			selectedTasks.push(orderedTasks[upperIndex]);
			currentDuration += orderedTasks[upperIndex].time;
			upperIndex += 1;
		}
	} else {
		if (lowerIndex >= 0) {
			selectedTasks.push(orderedTasks[lowerIndex]);
			currentDuration += orderedTasks[lowerIndex].time;
			lowerIndex -= 1;
		}
	}
	up = !up;
	return selectTasks(
		orderedTasks,
		number,
		totalDuration,
		upperIndex,
		lowerIndex,
		currentDuration,
		selectedTasks,
		up
	);
}
