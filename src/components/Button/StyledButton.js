import styled, {css} from 'styled-components';

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

	${({variant}) =>
		variant === 'icon' &&
		css`
			padding: 2px;
			border-radius: 50%;
		`}
`;

export default StyledButton;
