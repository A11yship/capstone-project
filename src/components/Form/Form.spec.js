/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './form';

describe('Form component', () => {
	it('should be displayed', () => {
		render(<Form />);
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
	it('should be clickable', async () => {
		const handleClick = jest.fn();
		render(<Form onSubmit={handleClick} />);
		const button = screen.getByText(`Speichern`);
		await userEvent.click(button);
		expect(handleClick).toBeCalled;
	});
});
