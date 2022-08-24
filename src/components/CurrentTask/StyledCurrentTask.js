import styled from 'styled-components';

const StyledCurrentTask = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: fit-content;
	border: 1px solid black;
	border-radius: 5px;

	& p {
		padding: 5px;
		font-size: 1.3rem;
		font-weight: bold;
		&.over {
			color: green;
			font-size: 1.5rem;
		}
	}
`;

export default StyledCurrentTask;
