/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import CurrentTask from './CurrentTask';

describe('Current task component', () => {
	it('should be displayed', () => {
		render(<CurrentTask />);
		const currentTask = screen.getByText(/First Item/i);
		expect(currentTask).toBeInTheDocument();
	});
});
