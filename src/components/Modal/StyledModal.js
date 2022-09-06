import styled from 'styled-components';

const StyledModal = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80vw;
	padding: 10px;
	gap: 5px;
	border: 5px solid var(--dark-color);
	border-radius: 20px;
`;

const StyledModalText = styled.p`
	text-align: center;
`;

export {StyledModal, StyledModalText};
