import Button from '../Button/Button';

import StyledModal from './StyledModal';

export default function Modal({text, onCancel, onSubmit}) {
	return (
		<StyledModal>
			<p>{text}</p>
			<Button onClick={onCancel}>Nein</Button>
			<Button onClick={onSubmit}>Ja</Button>
		</StyledModal>
	);
}
