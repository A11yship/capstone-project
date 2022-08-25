import styled from 'styled-components';

const StyledCurrentTask = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	border: 1px solid black;
	border-radius: 5px;
`;

const StyledSpan = styled.span`
	padding: 5px;
	color: ${({over}) => (over ? 'green' : 'black')};
	font-size: ${({over}) => (over ? '1.7rem' : '1.3rem')};
	font-weight: bold;
`;

export {StyledCurrentTask, StyledSpan};
