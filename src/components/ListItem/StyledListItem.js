import styled from 'styled-components';

const StyledListItem = styled.li`
	display: flex;
	justify-content: space-between;
	background-color: ${({current}) => (current ? '#b6b6f4' : '')};
`;

export default StyledListItem;
