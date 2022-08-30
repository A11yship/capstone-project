import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	tasks: [
		{id: nanoid(), name: 'Test Timer', time: 0.25},
		{id: nanoid(), name: 'Abwaschen', time: 15},
		{id: nanoid(), name: 'Post sortieren', time: 2},
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
