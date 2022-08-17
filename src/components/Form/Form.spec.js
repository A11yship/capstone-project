/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

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
		expect(handleClick).toHaveBeenCalled;
	});
	it('should accept inputs', async () => {
		const onSubmit = jest.fn();
		const task = 'Post';
		const duration = '5';
		render(<Form onSubmit={onSubmit} />);
		const inputTask = screen.getByLabelText('Aufgabe');
		const inputDuration = screen.getByLabelText('Dauer in Minuten');
		const button = screen.getByRole('button', {name: /speichern/i});
		await userEvent.type(inputTask, task);
		await userEvent.type(inputDuration, duration);
		await userEvent.click(button);
		expect(onSubmit).toBeCalled;
	});
});
