import styled from 'styled-components';

const StyledListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2.5px 5px;
	border-radius: 5px;
	background-color: ${({current}) => (current ? 'var(--light-accent)' : '')};
`;

export default StyledListItem;
