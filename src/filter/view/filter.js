import React, {Component} from "react";
import {connect} from "react-redux";
import {changeType} from "../actions.js";
import {ALL, COMPLETED, UNCOMPLETED} from "../../constant.js";

class Filter extends Component {

	constructor(props) {
		super(props);
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	handleFilterChange(e){
		const type = e.target.getAttribute("type");
		this.props.changeType(type)
	}

	render() {
		return (
			<ul>
				<li type={ALL} onClick={this.handleFilterChange}>全部</li>
				<li type={COMPLETED} onClick={this.handleFilterChange}>完成</li>
				<li type={UNCOMPLETED} onClick={this.handleFilterChange}>未完成</li>
			</ul>
		)
	}
}

const mapDispatch = (dispatch) => ({
	changeType(type) {
		dispatch(changeType(type));
	}
})

export default connect(null, mapDispatch)(Filter)