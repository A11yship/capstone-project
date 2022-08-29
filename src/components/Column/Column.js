import {Droppable} from '@hello-pangea/dnd';

import Task from '../Task/Task';

import StyledColumn from './StyledColumn';

export default function Column({column, tasks}) {
	return (
		<StyledColumn>
			<h2>{column}</h2>
			<Droppable droppableId={column}>
				{provided => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{tasks.map((task, index) => {
							return <Task key={task.id} task={task} index={index} />;
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</StyledColumn>
	);
}
