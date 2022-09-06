import styled from 'styled-components';

const size = '45vw';

const Clock = styled.div`
	width: calc(${size} + 4px);
	height: calc(${size} + 4px);
	border: 2px var(--dark-color) solid;
	border-radius: 50%;
`;
const Time = styled.div`
	width: ${size};
	height: ${size};
	border-radius: 50%;
`;
export {Clock, Time};
