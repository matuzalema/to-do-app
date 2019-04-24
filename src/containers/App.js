import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeToDo(id) {
    	const remainder = this.state.data.filter(todo => todo.id
    		!==id);
    	this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                    <h1 className="title">
                    <Title numberOfTasks={this.state.numberOfTasks}/>
                    </h1>
                Tutaj pojawią się komponenty naszej aplikacji.
            </div>
        );
    }
}

export default App;
