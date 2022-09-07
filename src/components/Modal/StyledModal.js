import styled from 'styled-components';

const StyledModalWrapper = styled.div`
	display: flex;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: rgb(35 32 32 / 72%);
`;

const StyledModal = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80vw;
	margin-top: 35vh;
	padding: 10px;
	gap: 5px;
	border: 5px solid var(--dark-color);
	border-radius: 20px;
	background-color: var(--light-color);
`;

const StyledModalText = styled.p`
	text-align: center;
`;

export {StyledModalWrapper, StyledModal, StyledModalText};
