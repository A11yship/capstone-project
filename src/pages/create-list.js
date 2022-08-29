import dynamic from 'next/dynamic';

import StyledContainer from '../components/Container/StyledContainer';

const DragDropContainer = dynamic(
	() => import('../components/DragDropContainer/DragDropContainer'),
	{
		ssr: false,
	}
);

export default function CreateList() {
	return (
		<>
			<h1>Wähle aktuelle Aufgaben </h1>
			<StyledContainer>
				<DragDropContainer />
			</StyledContainer>
		</>
	);
}
