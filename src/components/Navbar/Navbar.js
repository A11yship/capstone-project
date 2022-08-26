import Link from 'next/link';

import StyledNavbar from './StyledNavbar';

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/">
				<a>Startseite</a>
			</Link>
			<Link href="/create-task">
				<a>Neue Aufgabe</a>
			</Link>
		</StyledNavbar>
	);
}
