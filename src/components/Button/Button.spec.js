/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button component', () => {
	it('shold render children', () => {
		const text = 'Click me';
		render(<Button>{text}</Button>);
		const button = screen.getByText(text);
		expect(button).toBeInTheDocument();
	});
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		const text = 'Click me';
		render(<Button onClick={handleClick}>{text}</Button>);
		const button = screen.getByText(text);
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
