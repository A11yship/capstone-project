import {DragDropContext} from '@hello-pangea/dnd';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import Column from '../Column/Column';

export default function DragDropContainer() {
	const columns = ['Nicht gewählte Aufgaben', 'Ausgewählte Aufgaben'];
	const tasks = useStore(state => state.tasks);
	const [unselectedTasks, setUnselectedTasks] = useState([...tasks]);
	const [selectedTasks, setSelectedTasks] = useState([]);

	function updateArrays(task, source, destination, sourceArray, destinationArray = sourceArray) {
		sourceArray.splice(source.index, 1);
		destinationArray.splice(destination.index, 0, task);
		return {sourceArray, destinationArray};
	}

	function handleOnDragEnd(result) {
		const {destination, source, draggableId} = result;
		const draggableTask = tasks.filter(task => task.id === draggableId);

		if (!destination) {
			return;
		}

		if (destination.droppableId === source.droppableId) {
			if (destination.droppableId === columns[0]) {
				setUnselectedTasks([
					...updateArrays(...draggableTask, source, destination, unselectedTasks)
						.sourceArray,
				]);
			} else if (destination.droppableId === columns[1]) {
				setSelectedTasks([
					...updateArrays(...draggableTask, source, destination, selectedTasks)
						.sourceArray,
				]);
			}
		} else {
			if (source.droppableId === columns[0]) {
				const resultArrays = updateArrays(
					...draggableTask,
					source,
					destination,
					unselectedTasks,
					selectedTasks
				);
				setUnselectedTasks([...resultArrays.sourceArray]);
				setSelectedTasks([...resultArrays.destinationArray]);
			} else if (source.droppableId === columns[1]) {
				const resultArrays = updateArrays(
					...draggableTask,
					source,
					destination,
					selectedTasks,
					unselectedTasks
				);
				setSelectedTasks([...resultArrays.sourceArray]);
				setUnselectedTasks([...resultArrays.destinationArray]);
			}
		}
	}

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			{columns.map(column =>
				column === 'Nicht gewählte Aufgaben' ? (
					<Column key={column} column={column} tasks={unselectedTasks} />
				) : (
					<Column key={column} column={column} tasks={selectedTasks} />
				)
			)}
		</DragDropContext>
	);
}
