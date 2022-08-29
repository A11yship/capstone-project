import {DragDropContext} from '@hello-pangea/dnd';
import {useState} from 'react';

import Column from '../components/Column/Column';
import StyledContainer from '../components/Container/StyledContainer';
import useStore from '../hooks/useStore';

export default function CreateList() {
	const columns = ['Nicht gewählte Aufgaben', 'Ausgewählte Aufgaben'];
	const tasks = useStore(state => state.tasks);
	const [unselectedTasks, setUnselectedTasks] = useState([...tasks]);
	const [selectedTasks, setSelectedTasks] = useState([]);

	function handleOnDragEnd() {
		setUnselectedTasks([...tasks]);
		setSelectedTasks([]);
	}

	return (
		<>
			<h1>Wähle aktuelle Aufgaben </h1>
			<StyledContainer>
				<DragDropContext onDragEnd={handleOnDragEnd}>
					{columns.map(column =>
						column === 'Nicht gewählte Aufgaben' ? (
							<Column key={column} column={column} tasks={unselectedTasks} />
						) : (
							<Column key={column} column={column} tasks={selectedTasks} />
						)
					)}
				</DragDropContext>
			</StyledContainer>
		</>
	);
}
