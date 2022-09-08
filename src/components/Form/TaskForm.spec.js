/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useStore from '../../hooks/useStore';

import TaskForm from './TaskForm';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			push: jest.fn(),
		};
	},
}));

describe('TaskForm component', () => {
	it('should be displayed', () => {
		render(<TaskForm />);
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
	it('should not add a task when inputs are empty', async () => {
		const store = renderHook(() => useStore());
		const {addTask} = store.result.current;

		const {container} = render(<TaskForm />);

		const button = screen.getByRole('button', {name: /speichern/i});

		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(addTask).not.toHaveBeenCalled();
	});
	it('should accept correct inputs', async () => {
		const store = renderHook(() => useStore());
		const {addTask} = store.result.current;

		const task = 'Post';
		const duration = 5;

		render(<TaskForm />);

		const inputTask = screen.getByLabelText(/Aufgabe/i);
		const inputDuration = screen.getByLabelText(/Dauer in Minuten/i);
		const button = screen.getByRole('button', {name: /speichern/i});

		await userEvent.type(inputTask, task);
		await userEvent.type(inputDuration, duration.toString());
		await userEvent.click(button);

		expect(addTask).toBeCalledTimes(1);
		expect(addTask).toBeCalledWith(task, duration);
	});
	it('should not accept whitespaces for the task', async () => {
		const store = renderHook(() => useStore());
		const {addTask} = store.result.current;

		const task = '  ';
		const duration = 5;

		const {container} = render(<TaskForm />);

		const inputTask = screen.getByLabelText(/Aufgabe/i);
		const inputDuration = screen.getByLabelText(/Dauer in Minuten/i);
		const button = screen.getByRole('button', {name: /speichern/i});

		await userEvent.type(inputTask, task);
		await userEvent.type(inputDuration, duration.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(addTask).not.toHaveBeenCalled();
	});
	it('should not accept a string for the duration', async () => {
		const store = renderHook(() => useStore());
		const {addTask} = store.result.current;

		const task = 'Post';
		const duration = 'abc';

		const {container} = render(<TaskForm />);

		const inputTask = screen.getByLabelText(/Aufgabe/i);
		const inputDuration = screen.getByLabelText(/Dauer in Minuten/i);
		const button = screen.getByRole('button', {name: /speichern/i});

		await userEvent.type(inputTask, task);
		await userEvent.type(inputDuration, duration);
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(addTask).not.toHaveBeenCalled();
	});
	it('should not accept negative duration', async () => {
		const store = renderHook(() => useStore());
		const {addTask} = store.result.current;

		const task = 'Post';
		const duration = -2;

		const {container} = render(<TaskForm />);

		const inputTask = screen.getByLabelText(/Aufgabe/i);
		const inputDuration = screen.getByLabelText(/Dauer in Minuten/i);
		const button = screen.getByRole('button', {name: /speichern/i});

		await userEvent.type(inputTask, task);
		await userEvent.type(inputDuration, duration.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(addTask).not.toHaveBeenCalled();
	});
});
