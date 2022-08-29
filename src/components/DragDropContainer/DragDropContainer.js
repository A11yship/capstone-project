import {DragDropContext} from '@hello-pangea/dnd';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import Column from '../Column/Column';

export default function DragDropContainer() {
	const columns = ['Nicht gewählte Aufgaben', 'Ausgewählte Aufgaben'];
	const tasks = useStore(state => state.tasks);
	const [unselectedTasks, setUnselectedTasks] = useState([...tasks]);
	const [selectedTasks, setSelectedTasks] = useState([]);

	function handleOnDragEnd() {
		setUnselectedTasks([...tasks]);
		setSelectedTasks([]);
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
