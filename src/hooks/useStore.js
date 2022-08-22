import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	tasks: [
		{id: nanoid(), name: 'Abwaschen', time: 15},
		{id: nanoid(), name: 'Post sortieren', time: 2},
	],
	addTask(name, time) {
		set(({tasks}) => ({tasks: [...tasks, {id: nanoid(), name, time}]}));
	},
	deleteTask(currentTaskId) {
		set(({tasks}) => ({tasks: tasks.filter(task => task.id !== currentTaskId)}));
	},
}));

export default useStore;
