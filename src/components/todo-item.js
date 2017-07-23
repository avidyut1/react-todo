/**
 * Created by asheshvidyut on 16/07/17.
 */

import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    update() {
        this.props.update(this.props.index, {text: this.refs.text.value, done: this.props.item.done});
        this.unsetEditing();
    }
    updateDone() {
        this.props.update(this.props.index, {text: this.props.item.text, done: !this.props.item.done});
    }
    setEditing() {
        this.setState({editing: true});
    }
    unsetEditing() {
        this.setState({editing: false});
    }
    delete() {
        this.props.delete(this.props.index);
    }
    render() {
        if (this.state.editing) {
            return <div>
                <input type="text" defaultValue={this.props.item.text} ref="text"/>
                <button onClick={() => {this.update()}}>Update</button>
            </div>;
        }
        else {
            return <div>
                <input type="checkbox" onClick={() => {this.updateDone()}}/>
                <span>{this.props.item.text}</span>
                <button onClick={this.setEditing.bind(this)}>Edit</button>
                <button onClick={() => {this.delete()}}>Delete</button>
            </div>;
        }
    }
}
export default TodoItem;