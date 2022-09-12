import TaskForm from '../components/Form/TaskForm';
import Layout from '../components/Layout';

export default function CreateTask() {
	return (
		<Layout>
			<h1>Aufgabe hinzufügen</h1>
			<TaskForm />
		</Layout>
	);
}
