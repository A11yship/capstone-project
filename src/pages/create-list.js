import dynamic from 'next/dynamic';
import {useState} from 'react';

import StyledContainer from '../components/Container/StyledContainer';
import useStore from '../hooks/useStore';

const DragDropContainer = dynamic(
	() => import('../components/DragDropContainer/DragDropContainer'),
	{
		ssr: false,
	}
);

export default function CreateList() {
	const columns = ['Nicht gewählte Aufgaben', 'Ausgewählte Aufgaben'];
	const tasks = useStore(state => state.tasks);
	const [unselectedTasks, setUnselectedTasks] = useState([...tasks]);
	const [selectedTasks, setSelectedTasks] = useState([]);

	return (
		<>
			<h1>Wähle aktuelle Aufgaben </h1>
			<StyledContainer>
				<DragDropContainer
					columns={columns}
					unselectedTasks={unselectedTasks}
					setUnselectedTasks={setUnselectedTasks}
					selectedTasks={selectedTasks}
					setSelectedTasks={setSelectedTasks}
				/>
			</StyledContainer>
		</>
	);
}
