import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: ${({hasNavbar}) => (hasNavbar ? 'calc(100vh - 70px)' : 'calc(100vh - 20px)')};
	gap: 10px;
	margin: ${({hasNavbar}) => (hasNavbar ? '10px 0 60px' : '10px 0')};
`;

export default StyledMain;
