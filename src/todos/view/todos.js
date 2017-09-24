import React, {Component} from "react";
import TodoList from "./todoList.js";
import AddTodo from "./addTodo.js";

export default class Todos extends Component {
	render() {
		return (
			<div>
				<AddTodo/>
				<TodoList/>
			</div>
		)
	}
}