import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		(set, get) => ({
			tasks: [],
			addTask(name, time) {
				set(({tasks}) => ({tasks: [...tasks, {id: nanoid(), name, time}]}));
			},
			deleteTask(currentTaskId) {
				set(({tasks}) => ({tasks: tasks.filter(task => task.id !== currentTaskId)}));
				get().deleteFromCurrentTasks(currentTaskId);
			},
			editTask(currentId, name, time) {
				set(({tasks}) => ({
					tasks: tasks.map(task =>
						task.id === currentId ? {...task, name, time} : task
					),
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
		}),
		{
			name: 'TaskTimer',
		}
	)
);

export default useStore;
