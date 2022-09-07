import styled from 'styled-components';

const StyledListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 5px;
	padding: 2.5px 5px;
	border-radius: 5px;
	background-color: ${({current}) => (current ? 'var(--light-accent)' : '')};
	font-size: 1.4rem;
`;

const GrowingSpan = styled.span`
	flex-grow: 2;
`;

export {StyledListItem, GrowingSpan};
