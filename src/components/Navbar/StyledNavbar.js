import styled from 'styled-components';

const StyledNavbar = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
	justify-content: space-around;
	width: 100vw;
	height: 50px;
	background-color: var(--light-color);
`;

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	border: 2px solid black;
	border-radius: 1px;
	background-color: var(--brand-color);
	color: ${({active}) => (active ? 'var(--light-color);' : 'var(--dark-color);')};
`;

export {StyledNavbar, StyledLink};
