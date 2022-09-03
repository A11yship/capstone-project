import {useRouter} from 'next/router';
import {useState} from 'react';

import Button from '../components/Button/Button';
import Layout from '../components/Layout';
import StyledList from '../components/List/StyledList';
import StyledListItem from '../components/ListItem/StyledListItem';
import Modal from '../components/Modal/Modal';
import useStore from '../hooks/useStore';

export default function TaskList() {
	const tasks = useStore(state => state.tasks);
	const deleteTask = useStore(state => state.deleteTask);
	const [showModal, setShowModal] = useState(false);
	const [deletingTask, setDeletingTask] = useState({});
	const router = useRouter();

	function handleCancel() {
		setShowModal(!showModal);
		setDeletingTask({});
	}

	function handleSubmit() {
		deleteTask(deletingTask.id);
		setShowModal(!showModal);
		setDeletingTask({});
	}

	function handleClick(task) {
		setShowModal(!showModal);
		setDeletingTask(task);
	}

	return (
		<Layout>
			<h1>Alle Aufgaben</h1>
			{showModal && (
				<Modal
					text={`Soll ${deletingTask.name} wirklich gelöscht werden?`}
					onCancel={handleCancel}
					onSubmit={handleSubmit}
				/>
			)}
			<StyledList role="list">
				{tasks.map(task => (
					<StyledListItem key={task.id}>
						<span>{task.name}</span>
						<span>{task.time}min</span>
						<Button
							onClick={() =>
								router.push(
									{
										pathname: '/create-task',
										query: task,
									},
									'/create-task'
								)
							}
						>
							Edit
						</Button>
						<Button onClick={() => handleClick(task)}>Löschen</Button>
					</StyledListItem>
				))}
			</StyledList>
		</Layout>
	);
}
