import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {useState} from 'react';

import Button from '../components/Button/Button';
import StyledButtonContainer from '../components/ButtonContainer/StyledButtonContainer';
import StyledContainer from '../components/Container/StyledContainer';
import StyledMain from '../components/StyledMain';
import useStore from '../hooks/useStore';

const DragDropContainer = dynamic(
	() => import('../components/DragDropContainer/DragDropContainer'),
	{
		ssr: false,
	}
);

export default function CreateList() {
	const columns = ['Offen', 'Gewählt'];
	const tasks = useStore(state => state.tasks);
	const currentTasks = useStore(state => state.currentTasks);
	const updateCurrentTasks = useStore(state => state.updateCurrentTasks);
	const [unselectedTasks, setUnselectedTasks] = useState(
		tasks.filter(task => !currentTasks.some(currentTask => currentTask.id === task.id))
	);
	const [selectedTasks, setSelectedTasks] = useState([...currentTasks]);
	const router = useRouter();

	function handleCancel() {
		router.push('/');
	}

	function handleSubmit() {
		updateCurrentTasks(selectedTasks);
		router.push('/');
	}

	return (
		<StyledMain>
			<h1>Wähle Aufgaben</h1>
			<StyledContainer>
				<DragDropContainer
					columns={columns}
					unselectedTasks={unselectedTasks}
					setUnselectedTasks={setUnselectedTasks}
					selectedTasks={selectedTasks}
					setSelectedTasks={setSelectedTasks}
				/>
			</StyledContainer>
			<StyledButtonContainer>
				<Button onClick={handleCancel}>Abbrechen</Button>
				<Button onClick={handleSubmit}>Speichern</Button>
			</StyledButtonContainer>
		</StyledMain>
	);
}
