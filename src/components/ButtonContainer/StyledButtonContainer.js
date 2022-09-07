import styled from 'styled-components';

const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 80vw;
	padding-top: ${({inForm}) => (inForm ? '10px' : '0')};
`;

export default StyledButtonContainer;
