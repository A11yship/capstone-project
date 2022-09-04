import Link from 'next/link';
import styled from 'styled-components';

import Icon from '../Icon/Icon';

import StyledNavbar from './StyledNavbar';

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	border: 2px solid black;
	border-radius: 2px;
	background-color: var(--brand-color);
	color: var(--light-color);
	:active {
		color: var(--dark-color);
	}
`;

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/task-list">
				<StyledLink>
					<Icon variant="list" size="40px" />
				</StyledLink>
			</Link>
			<Link href="/">
				<StyledLink>
					<Icon variant="play" size="40px" />
				</StyledLink>
			</Link>
			<Link href="/create-task">
				<StyledLink>
					<Icon variant="add" size="40px" />
				</StyledLink>
			</Link>
		</StyledNavbar>
	);
}
