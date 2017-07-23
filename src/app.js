/**
 * Created by asheshvidyut on 16/07/17.
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/todo-list.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            todos: JSON.parse(window.localStorage.getItem('todos')) || []
        }
    }
    addTodo() {
        this.setState({todos: [...this.state.todos, {text: this.refs.text.value, done: false}]}, () => {
            window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }
    update(index, data) {
        this.state.todos.splice(index, 1, data);
        this.setState({todos: this.state.todos}, () => {
            window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }
    delete(index) {
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos}, () => {
            window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }
    render() {
        return (<div>
            <input type="text" ref="text"/>
            <button onClick={this.addTodo}>Add new todo</button>
            <TodoList todos={this.state.todos} update={this.update} delete={this.delete}/>
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById("container"));
