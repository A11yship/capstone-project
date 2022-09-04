import Link from 'next/link';
import {useRouter} from 'next/router';

import Icon from '../Icon/Icon';

import {StyledNavbar, StyledLink} from './StyledNavbar';

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
