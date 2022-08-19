/**
 * @see https://docs.pmnd.rs/zustand/testing
 */

import {act} from 'react-dom/test-utils';
import actualCreate from 'zustand';

const initialTasks = [
	{id: '1', name: 'First Item', duration: 5},
	{id: '2', name: 'Second Item', duration: 3},
	{id: '3', name: 'Third Item', duration: 10},
];

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = createState => {
	const store = actualCreate(createState);
	const initialState = store.getState();

	initialState.tasks = initialTasks;
	initialState.addTask = jest.fn();

	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

// Reset all stores after each test run
afterEach(() => {
	jest.clearAllMocks();
	act(() => storeResetFns.forEach(resetFn => resetFn()));
});

export default create;
