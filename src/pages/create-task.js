import {useRouter} from 'next/router';

import Form from '../components/Form/Form';
import Layout from '../components/Layout';

export default function CreateTask() {
	const {query} = useRouter();

	return (
		<Layout>
			<h1>Aufgabe hinzufügen</h1>
			<Form task={query} />
		</Layout>
	);
}
