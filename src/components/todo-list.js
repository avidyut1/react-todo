/**
 * Created by asheshvidyut on 16/07/17.
 */

import React, {Component} from 'react'
import TodoItem from './todo-item'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            {this.props.todos.map((item, index) => {
                return <TodoItem update={this.props.update} delete={this.props.delete} key={index} index={index} item={item}/>
            })}
        </div>)
    }
}
export default TodoList;
