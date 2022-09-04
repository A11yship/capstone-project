import Link from 'next/link';
import {useRouter} from 'next/router';
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
	border-radius: 1px;
	background-color: var(--brand-color);
	color: ${({active}) => (active ? 'var(--dark-color);' : 'var(--light-color);')};
`;

export default function Navbar() {
	const router = useRouter();

	return (
		<StyledNavbar>
			<Link href="/task-list">
				<StyledLink active={router.pathname === '/task-list'}>
					<Icon variant="list" size="40px" />
				</StyledLink>
			</Link>
			<Link href="/">
				<StyledLink active={router.pathname === '/'}>
					<Icon variant="play" size="40px" />
				</StyledLink>
			</Link>
			<Link href="/create-task">
				<StyledLink active={router.pathname === '/create-task'}>
					<Icon variant="add" size="40px" />
				</StyledLink>
			</Link>
		</StyledNavbar>
	);
}
