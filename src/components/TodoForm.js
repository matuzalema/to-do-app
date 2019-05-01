import React, {Component} from 'react';
import style from './TodoForm.css';

class TodoForm extends Component {
	constructor(props){
        super(props);
        this.state = { value: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(e) {
    	e.preventDefault();
    	if(this.state.value.length < 2 ) {
    		alert("It't to short");
    	} else {
	    	this.props.addTodo(this.state.value);
	    	this.setState({value: ''}); 		
    	}
    }

    handleChange(e) {
    	this.setState({value: e.target.value});
    }
   
	render(){
		return(
		<form onSubmit={this.handleClick} className={style.form}>
			<label className={style.label}> Add a task</label>
			<input 
				className={style.input}
				type='text' 
				placeholder="Enter your task"
				value = {this.state.value}
				onChange = {this.handleChange}
			/>
			<button  type="submit" className={style.submit}>save</button>
		</form>
		)
	}
}

export default TodoForm;