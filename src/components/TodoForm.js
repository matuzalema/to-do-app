import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(props){
        super(props);
        this.state = { value: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(e) {
    	e.preventDefault();
    	this.props.addTodo(this.state.value);
    	this.setState({value: ''});
    	if(this.state.value.length < 2 ) {
    		alert("It't to short");
    	}
    }

    handleChange(e) {
    	this.setState({value: e.target.value});
    }
   
	render(){
		return(
		<form onSubmit={this.handleClick}>
			<label> Add a task</label>
			<input 
				type='text' 
				placeholder="Enter your task"
				value = {this.state.value}
				onChange = {this.handleChange}
			/>
			<button  type="submit">Submit</button>
		</form>
		)
	}
}

export default TodoForm;