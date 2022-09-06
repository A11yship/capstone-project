import Button from '../Button/Button';
import StyledButtonContainer from '../ButtonContainer/StyledButtonContainer';

import {StyledModal, StyledModalText, StyledModalWrapper} from './StyledModal';

export default function Modal({text, onCancel, onSubmit}) {
	return (
		<StyledModalWrapper>
			<StyledModal>
				<StyledModalText>{text}</StyledModalText>
				<StyledButtonContainer>
					<Button onClick={onCancel}>Nein</Button>
					<Button onClick={onSubmit}>Ja</Button>
				</StyledButtonContainer>
			</StyledModal>
		</StyledModalWrapper>
	);
}
