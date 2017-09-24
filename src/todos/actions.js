import {ADD_ITEM, CHECK_ITEM} from "./actionTypes.js";

export const addItem = (value) => ({
	type: ADD_ITEM,
	value: value
})

export const checkItem = (id) => ({
	type: CHECK_ITEM,
	id: id
})