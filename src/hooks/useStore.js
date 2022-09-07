import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist((set, get) => ({
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
		deleteTask(currentTaskId) {
			set(({tasks}) => ({tasks: tasks.filter(task => task.id !== currentTaskId)}));
			get().deleteFromCurrentTasks(currentTaskId);
		},
		editTask(currentId, name, time) {
			set(({tasks}) => ({
				tasks: tasks.map(task => (task.id === currentId ? {...task, name, time} : task)),
			}));
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
	}))
);

export default useStore;
