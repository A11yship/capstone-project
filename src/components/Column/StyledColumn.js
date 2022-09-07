import styled from 'styled-components';

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	width: 100%;
	padding: 5px;
	border-radius: 10px;
	background-color: var(--light-accent);
`;

const StyledDiv = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 2px;
	border: 1px dotted var(--dark-color);
	border-radius: 10px;
`;

export {StyledColumn, StyledDiv};
