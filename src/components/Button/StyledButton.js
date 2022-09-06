import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	padding: 3px 8px;
	border: 2px solid var(--brand-color);
	border-radius: 15px;
	background-color: var(--light-color);
	color: var(--brand-color);
	font-family: 'Tillana', cursive;
	font-weight: bold;
	:hover {
		background-color: var(--light-accent);
	}
	:active {
		background-color: var(--dark-color);
		color: var(--light-accent);
	}
`;

export default StyledButton;
