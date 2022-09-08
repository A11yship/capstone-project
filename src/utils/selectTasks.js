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
	//initialize indeces
	if (upperIndex === undefined) {
		upperIndex = orderedTasks.findIndex(task => task.duration >= avarageDuration);
		lowerIndex = upperIndex - 1;
	}
	//termination conditions
	if (
		number === selectedTasks.length ||
		currentDuration >= totalDuration ||
		selectedTasks.length === orderedTasks.length
	) {
		return selectedTasks;
	}
	//Adding new tasks depending on the next higher or lower index
	if (up) {
		if (upperIndex < orderedTasks.length) {
			if (orderedTasks[upperIndex].duration === avarageDuration) {
				up = !up;
			}
			selectedTasks.push(orderedTasks[upperIndex]);
			currentDuration += orderedTasks[upperIndex].duration;
			upperIndex += 1;
		}
	} else {
		if (lowerIndex >= 0) {
			selectedTasks.push(orderedTasks[lowerIndex]);
			currentDuration += orderedTasks[lowerIndex].duration;
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
