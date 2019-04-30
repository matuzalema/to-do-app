import React, {Component} from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoForm from '../components/TodoForm.js';
import TodoList from '../components/TodoList.js';
import Todo from '../components/Todo.js';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                { 
                    id: 0,
                    text: 'wash the car',
                },
                { 
                    id: 1,
                    text: 'do shopping',
                }
            ]
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const tasks = [...this.state.tasks, todo];
        this.setState({tasks});
    }

    removeTodo(id) {
        const remainder = this.state.tasks.filter(todo => todo.id !== id);
        this.setState({tasks: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title/>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <h3>You have {this.state.tasks.length} tasks to do</h3>
                <TodoList tasks={this.state.tasks} removeTodo={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default App;
