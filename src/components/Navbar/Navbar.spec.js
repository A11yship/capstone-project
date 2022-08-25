/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar component', () => {
	it('should be displayed', () => {
		render(<Navbar />);
		const navbar = screen.getByRole('navigation');
		expect(navbar).toBeInTheDocument();
	});
});
