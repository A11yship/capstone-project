import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: ${({hasNavbar}) => (hasNavbar ? 'calc(100vh - 50px)' : '100vh')};
	gap: 10px;
	margin: ${({hasNavbar}) => (hasNavbar ? '0 0 50px' : '0')};
	padding: 10px 0;
`;

export default StyledMain;
