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

	//Beispielcode
	counter: 0,
	setCounter(counter) {
		set({counter});
	},
	decrementCounter(step = 1) {
		set(({counter}) => ({counter: counter - step}));
	},
	incrementCounter(step = 1) {
		set(({counter}) => ({counter: counter + step}));
	},
}));

export default useStore;
