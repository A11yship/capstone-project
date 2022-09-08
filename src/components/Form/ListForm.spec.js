/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useStore from '../../hooks/useStore';

import ListForm from './ListForm';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			push: jest.fn(),
		};
	},
}));

describe('TaskForm component', () => {
	it('should be displayed', () => {
		render(<ListForm />);
		const form = screen.getByRole('form');
		expect(form).toBeInTheDocument();
	});
	it('should accept correct inputs', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const totalDuration = 50;
		const numberOfTasks = 5;

		render(<ListForm />);

		const inputDuration = screen.getByLabelText(/Gesamtdauer in Minuten/i);
		const inputNumber = screen.getByLabelText(/Anzahl der Aufgaben/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputDuration, totalDuration.toString());
		await userEvent.type(inputNumber, numberOfTasks.toString());
		await userEvent.click(button);

		expect(updateCurrentTasks).toHaveBeenCalledTimes(1);
	});
	it('should not generate a list when total duration is empty', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const numberOfTasks = 5;

		const {container} = render(<ListForm />);

		const inputNumber = screen.getByLabelText(/Anzahl der Aufgaben/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputNumber, numberOfTasks.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(updateCurrentTasks).not.toHaveBeenCalled();
	});
	it('should not generate a list when number of tasks is empty', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const totalDuration = 40;

		const {container} = render(<ListForm />);

		const inputDuration = screen.getByLabelText(/Gesamtdauer in Minuten/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputDuration, totalDuration.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(updateCurrentTasks).not.toHaveBeenCalled();
	});
	it('should only accept numbers as total duration', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const totalDuration = 'abc';
		const numberOfTasks = 5;

		const {container} = render(<ListForm />);

		const inputDuration = screen.getByLabelText(/Gesamtdauer in Minuten/i);
		const inputNumber = screen.getByLabelText(/Anzahl der Aufgaben/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputDuration, totalDuration);
		await userEvent.type(inputNumber, numberOfTasks.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(updateCurrentTasks).not.toHaveBeenCalled();
	});
	it('should only accept numbers as number of tasks', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const totalDuration = 50;
		const numberOfTasks = 'a';

		const {container} = render(<ListForm />);

		const inputDuration = screen.getByLabelText(/Gesamtdauer in Minuten/i);
		const inputNumber = screen.getByLabelText(/Anzahl der Aufgaben/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputDuration, totalDuration.toString());
		await userEvent.type(inputNumber, numberOfTasks);
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(updateCurrentTasks).not.toHaveBeenCalled();
	});
	it('should only accept numbers greater than 0 as total duration', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const totalDuration = -50;
		const numberOfTasks = 5;

		const {container} = render(<ListForm />);

		const inputDuration = screen.getByLabelText(/Gesamtdauer in Minuten/i);
		const inputNumber = screen.getByLabelText(/Anzahl der Aufgaben/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputDuration, totalDuration.toString());
		await userEvent.type(inputNumber, numberOfTasks.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(updateCurrentTasks).not.toHaveBeenCalled();
	});
	it('should only accept numbers greater than 0 as number of tasks', async () => {
		const store = renderHook(() => useStore());
		const {updateCurrentTasks} = store.result.current;

		const totalDuration = 50;
		const numberOfTasks = -3;

		const {container} = render(<ListForm />);

		const inputDuration = screen.getByLabelText(/Gesamtdauer in Minuten/i);
		const inputNumber = screen.getByLabelText(/Anzahl der Aufgaben/i);
		const button = screen.getByRole('button', {name: /generieren/i});

		await userEvent.type(inputDuration, totalDuration.toString());
		await userEvent.type(inputNumber, numberOfTasks.toString());
		await userEvent.click(button);

		const invalidInput = container.querySelector('input:invalid');
		expect(invalidInput).toBeInTheDocument();

		expect(updateCurrentTasks).not.toHaveBeenCalled();
	});
});
