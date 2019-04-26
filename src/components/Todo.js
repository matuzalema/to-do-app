import React from 'react';

const Todo = (props) => {
	return (
		<>
			<h3> {props.task.text}</h3>
			<button onClick={() => props.removeTodo(props.task.id)}>x</button>
		</>
	);
};

export default Todo;