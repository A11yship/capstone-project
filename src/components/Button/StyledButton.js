import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	padding: 5px 10px;
	border: none;
	border-radius: 15px;
	background-color: var(--brand-color);
	color: var(--light-color);
	font-family: 'Tillana', cursive;
	:active {
		background-color: var(--dark-color);
	}
`;

export default StyledButton;
