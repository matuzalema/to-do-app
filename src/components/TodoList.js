import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
		const tasks = props.tasks.map(task => <Todo key={task.id} task={task} removeTodo={props.removeTodo} />);
	return (
		<div>
			<ul>{tasks}</ul>
		</div>
	);
};
export default TodoList;