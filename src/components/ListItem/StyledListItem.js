import styled from 'styled-components';

const StyledListItem = styled.li`
	display: flex;
	justify-content: space-between;
	background-color: ${({current}) => (current ? 'var(--light-accent)' : '')};
`;

export default StyledListItem;
