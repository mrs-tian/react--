import React, {Component} from "react";
import {connect} from "react-redux";
import {checkItem} from "../actions.js";
import {ALL, COMPLETED} from "../../constant.js";

class TodoList extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let id = e.target.getAttribute("id");
		this.props.changeChecked(id);
	}

	render(){
		return (
			<ul>
				{
					this.props.todos.map((item) => {
						let checked = item.completed ? {checked: true}: {checked:false};
						return <li key={item.id}><input id={item.id} type="checkbox" onChange={this.handleChange} {...checked}/>{item.value}</li>
					})
				}
			</ul>
		)
	}
}

const filterTodos = (todos, filter) => {
	if (filter === ALL) {
		return todos;
	}else if(filter === COMPLETED) {
		return todos.filter((item) => {
			if (item.completed === true) {
				return true
			}
		})
	}else {
		return todos.filter((item) => {
			if (item.completed === false) {
				return true
			}
		})
	}
	
}

const mapState = (state) => ({
	todos: filterTodos(state.todos, state.filter)
});

const mapDispatch = (dispatch) => ({
	changeChecked(id) {
		dispatch(checkItem(id));
	}
})

export default connect(mapState, mapDispatch)(TodoList);