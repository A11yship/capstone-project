import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {useState} from 'react';

import Button from '../components/Button/Button';
import Icon from '../components/Icon/Icon';
import Layout from '../components/Layout';
import {StyledListItem, GrowingSpan} from '../components/ListItem/StyledListItem';
import Modal from '../components/Modal/Modal';
import useStore from '../hooks/useStore';

const StyledListWrapper = dynamic(() => import('../components/List/StyledList'), {
	ssr: false,
});

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
			<StyledListWrapper role="list">
				{tasks.map(task => (
					<StyledListItem key={task.id}>
						<GrowingSpan>{task.name}</GrowingSpan>
						<span>{task.time}min</span>
						<Button
							variant="icon"
							onClick={() =>
								router.push(
									{
										pathname: '/edit-task',
										query: task,
									},
									'/edit-task'
								)
							}
						>
							<Icon variant="edit" size="20px" />
						</Button>
						<Button variant="icon" onClick={() => handleClick(task)}>
							<Icon variant="delete" size="20px" />
						</Button>
					</StyledListItem>
				))}
			</StyledListWrapper>
		</Layout>
	);
}
