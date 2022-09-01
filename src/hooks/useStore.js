import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	tasks: [
		{id: nanoid(), name: 'Test Timer', time: 0.25},
		{id: nanoid(), name: 'Abwaschen', time: 15},
		{id: nanoid(), name: 'Post sortieren', time: 2},
		{id: nanoid(), name: 'Task 1', time: 10},
		{id: nanoid(), name: 'Task 2', time: 10},
		{id: nanoid(), name: 'Task 3', time: 10},
		{id: nanoid(), name: 'Task 4', time: 10},
	],
	addTask(name, time) {
		set(({tasks}) => ({tasks: [...tasks, {id: nanoid(), name, time}]}));
	},
	currentTasks: [],
	updateCurrentTasks(taskArray) {
		set(() => ({currentTasks: [...taskArray]}));
	},
	deleteFromCurrentTasks(currentTaskId) {
		set(({currentTasks}) => ({
			currentTasks: currentTasks.filter(task => task.id !== currentTaskId),
		}));
	},
}));

export default useStore;
