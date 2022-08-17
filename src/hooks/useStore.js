import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	tasks: [
		{id: nanoid(), name: 'Abwaschen', time: 15},
		{id: nanoid(), name: 'Post sortieren', time: 2},
	],
	addTask(name, time) {
		set(({tasks}) => ({tasks: [{id: nanoid(), name, time}, ...tasks]}));
	},
}));

export default useStore;
