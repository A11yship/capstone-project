import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 5px 10px;
	border: none;
	border-radius: 15px;
	background-color: var(--brand-color);
	color: var(--light-color);
	:active {
		background-color: var(--dark-color);
	}
`;

export default StyledButton;
