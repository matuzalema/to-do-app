import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
	return (
		<div>
			<h3 className= {style.task}> {props.task.text}</h3>
			<button className={style.btnRemove} onClick={() => props.removeTodo(props.task.id)}>x</button>
		</div>
	);
};

export default Todo;