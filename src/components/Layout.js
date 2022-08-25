import Navbar from './Navbar/Navbar';
import StyledMain from './StyledMain';

export default function Layout({children}) {
	return (
		<>
			<StyledMain>{children}</StyledMain>
			<Navbar />
		</>
	);
}
