import {useRouter} from 'next/router';

import TaskForm from '../components/Form/TaskForm';
import Layout from '../components/Layout';

export default function EditTask() {
	const {query} = useRouter();

	return (
		<Layout>
			<h1>Aufgabe bearbeiten</h1>
			<TaskForm task={query} />
		</Layout>
	);
}
