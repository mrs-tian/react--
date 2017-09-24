import {ADD_ITEM, CHECK_ITEM} from "./actionTypes.js";

let number = 1;

export default (state = [], action) => {

	switch(action.type) {
		case ADD_ITEM: {
			return [...state, {
				id: number++,
				value: action.value,
				completed: false	
			}]
		}
		case CHECK_ITEM: {
			return state.map((item) => {
				if (item.id === parseInt(action.id, 10)) {
					return {
						...item,
						completed: !item.completed
					}
				}else {
					return item;
				}
			})
		}
		default: {
			return state;
		}

	}

}