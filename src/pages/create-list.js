import {DragDropContext} from '@hello-pangea/dnd';
import {useState} from 'react';

import StyledColumn from '../components/Column/StyledColumn';
import StyledContainer from '../components/Container/StyledContainer';
import StyledTask from '../components/Task/StyledTask';
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
					{columns.map(column => {
						return (
							<StyledColumn key={column}>
								<h2>{column}</h2>
								{column === 'Nicht gewählte Aufgaben'
									? unselectedTasks.map(task => {
											return (
												<StyledTask key={task.id}>
													{task.name}, {task.time} min
												</StyledTask>
											);
									  })
									: selectedTasks.map(task => {
											return (
												<StyledTask key={task.id}>
													{task.name}, {task.time} min
												</StyledTask>
											);
									  })}
							</StyledColumn>
						);
					})}
				</DragDropContext>
			</StyledContainer>
		</>
	);
}
