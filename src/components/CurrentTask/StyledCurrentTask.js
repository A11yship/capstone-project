import styled from 'styled-components';

const StyledCurrentTask = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80vw;
	padding: 10px;
	gap: 5px;
	border-radius: 30px;
	background-color: var(--light-accent);
`;

const StyledSpan = styled.span`
	color: ${({over}) => (over ? 'var(--succes)' : 'var(--dark-color)')};
	font-size: ${({over}) => (over ? '2.5rem' : '2rem')};
	font-weight: bold;
`;

export {StyledCurrentTask, StyledSpan};
