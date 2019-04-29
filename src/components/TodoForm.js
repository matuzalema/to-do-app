import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    }

	render(){
		return(
		<div>
		<label> Add a task</label>
			<input type='text' placeholder='enter task'/>	
		</div>
		)
	}
}

export default TodoForm;