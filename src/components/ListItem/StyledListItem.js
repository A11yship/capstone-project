import styled from 'styled-components';

const StyledListItem = styled.li`
	display: flex;
	justify-content: space-between;
	background-color: ${({current}) => (current ? 'lavender' : '')};
`;

export default StyledListItem;
