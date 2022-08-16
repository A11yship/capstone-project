/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Form from './form';

describe('Form component', () => {
	it('should be displayed', () => {
		render(<Form />);
		const form = screen.getByLabelText('Aufgabe');
		expect(form).toBeInTheDocument();
	});
});
