/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Modal from './Modal';

describe('Modal component', () => {
	it('should be rendered', () => {
		const text = 'Test text';
		const onCancel = jest.fn();
		const onSubmit = jest.fn();

		render(<Modal text={text} onCancel={onCancel} onSubmit={onSubmit} />);

		const content = screen.getByText(text);
		const cancelButton = screen.getByRole('button', {name: /nein/i});
		const submitButton = screen.getByRole('button', {name: /ja/i});

		expect(content).toBeInTheDocument();
		expect(cancelButton).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
