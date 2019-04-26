import React, {Component} from 'react';

class Title extends Component {
	constructor(props) {
		super(props); 
		this.state = {numberOfTasks: 0};
	}

	render(){
		return(
		<div>
			<h1>To do list</h1>
			<h2>You have {this.state.numberOfTasks} tasks to do</h2>
		</div>
		)
	}
}

export default Title;