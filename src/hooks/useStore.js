import {nanoid} from 'nanoid';
import create from 'zustand';
import {persist} from 'zustand/middleware';

const useStore = create(
	persist(
		(set, get) => ({
			tasks: [],
			addTask(name, duration) {
				set(({tasks}) => ({tasks: [...tasks, {id: nanoid(), name, duration}]}));
			},
			deleteTask(currentTaskId) {
				set(({tasks}) => ({tasks: tasks.filter(task => task.id !== currentTaskId)}));
				get().deleteFromCurrentTasks(currentTaskId);
			},
			editTask(currentId, name, duration) {
				set(({tasks}) => ({
					tasks: tasks.map(task =>
						task.id === currentId ? {...task, name, duration} : task
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
