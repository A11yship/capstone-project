/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Icon from '../Icon/Icon';

import Button from './Button';

describe('Button component', () => {
	it('should render children', () => {
		const text = 'Click me';
		render(<Button>{text}</Button>);
		const button = screen.getByRole('button', {name: text});
		expect(button).toBeInTheDocument();
	});
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		const text = 'Click me';
		render(<Button onClick={handleClick}>{text}</Button>);
		const button = screen.getByRole('button', {name: text});
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	it('with icon should be clickable', async () => {
		const handleClick = jest.fn();
		render(
			<Button variant="icon" onClick={handleClick}>
				<Icon variant="done" />
			</Button>
		);
		const button = screen.getByRole('button');
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
