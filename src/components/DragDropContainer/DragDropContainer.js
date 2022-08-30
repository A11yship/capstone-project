import {DragDropContext} from '@hello-pangea/dnd';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import Column from '../Column/Column';

export default function DragDropContainer() {
	const columns = ['Nicht gewählte Aufgaben', 'Ausgewählte Aufgaben'];
	const tasks = useStore(state => state.tasks);
	const [unselectedTasks, setUnselectedTasks] = useState([...tasks]);
	const [selectedTasks, setSelectedTasks] = useState([]);

	function handleOnDragEnd(result) {
		const {destination, source, draggableId} = result;

		const draggableTask = tasks.filter(task => task.id === draggableId);
		console.log(...draggableTask);

		if (!destination) {
			return;
		}

		if (destination.droppableId === source.droppableId) {
			if (destination.droppableId === columns[0]) {
				const newTasks = unselectedTasks;
				newTasks.splice(source.index, 1);
				newTasks.splice(destination.index, 0, ...draggableTask);
				setUnselectedTasks([...newTasks]);
			} else if (destination.droppableId === columns[1]) {
				const newTasks = selectedTasks;
				newTasks.splice(source.index, 1);
				newTasks.splice(destination.index, 0, ...draggableTask);
				setSelectedTasks([...newTasks]);
			}
		} else {
			if (source.droppableId === columns[0]) {
				const sourceTasks = unselectedTasks;
				sourceTasks.splice(source.index, 1);
				const destinationTasks = selectedTasks;
				destinationTasks.splice(destination.index, 0, ...draggableTask);
				setUnselectedTasks([...sourceTasks]);
				setSelectedTasks([...destinationTasks]);
			} else if (source.droppableId === columns[1]) {
				const sourceTasks = selectedTasks;
				sourceTasks.splice(source.index, 1);
				const destinationTasks = unselectedTasks;
				destinationTasks.splice(destination.index, 0, ...draggableTask);
				setUnselectedTasks([...destinationTasks]);
				setSelectedTasks([...sourceTasks]);
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
