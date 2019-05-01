import React, {Component} from 'react';
import style from './Title.css';

class Title extends Component {
	constructor(props) {
		super(props); 
	}

	render(){
		return(
		<>
			<h1 className={style.header}>Todo app</h1>
			<h2>react + webpack</h2>
		</>
		)
	}
}

export default Title;