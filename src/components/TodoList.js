import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
		const tasks = props.tasks.map(task => <Todo key={task.id} task={task} removeTodo={props.removeTodo}/>);
	return (
		<div>
			<h1> Zadania do zrobienia</h1>
			{tasks}
			<h2> Zadania zrobione</h2>
		</div>
	);
};

export default TodoList;