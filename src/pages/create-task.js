import Form from '../components/Form/Form';
import Navbar from '../components/Navbar/Navbar';
import StyledMain from '../components/StyledMain';

export default function CreateTask() {
	return (
		<>
			<StyledMain>
				<h1>Aufgabe hinzufügen</h1>
				<Form />
			</StyledMain>
			<Navbar />
		</>
	);
}
