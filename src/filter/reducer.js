import {CHANGE_TYPE} from './actionTypes.js';

export default (state = "ALL", action) => {

	switch(action.type) {
		case CHANGE_TYPE: {
			return action.value
		}
		default:{
			return state;
		}
	}
}