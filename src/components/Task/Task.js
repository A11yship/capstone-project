import {Draggable} from '@hello-pangea/dnd';

import StyledTask from './StyledTask';

export default function Task({task, index}) {
	return (
		<Draggable draggableId={task.id} index={index}>
			{provided => (
				<StyledTask
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<span>{task.name}</span> <span>{task.time} min</span>
				</StyledTask>
			)}
		</Draggable>
	);
}
