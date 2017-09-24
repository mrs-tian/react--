import React, {Component} from "react";
import {connect} from "react-redux";
import {addItem} from "../actions.js";

class AddTodo extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.refInput = this.refInput.bind(this);
	}

	handleSubmit() {
		this.props.addTodo(this._input.value);
	}

	refInput(input) {
		this._input = input;
	}

	render(){
		return (
			<div>
				<input type="text" ref={this.refInput}/>
				<button onClick={this.handleSubmit}>提交</button>
			</div>
		)
	}
}

const mapState = (state) => ({
	todos: state.todos
});

const mapDispatch = (dispatch) => ({
	addTodo(value) {
		dispatch(addItem(value));
	}
});

export default connect(mapState, mapDispatch)(AddTodo);