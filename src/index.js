import React, {Component} from "react";
import ReactDom from "react-dom";
import {view as Todos} from "./todos/";
import {view as Filter} from "./filter/";
import {Provider} from 'react-redux';
import store from './store.js';

class TodoApp extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Todos />
					<Filter />
				</div>
			</Provider>
		)
	}
}

ReactDom.render(<TodoApp/>, document.getElementById("root"));