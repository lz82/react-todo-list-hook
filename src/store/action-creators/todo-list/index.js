import { todolistActionTypes } from "@/store/action-types";
import axios from 'axios'

export function queryTodoListCreator() {
  return async (dispatch) => {
    const res = await axios.get('/mock/list.json')
    console.log(res.data)
  };
}

export function todoInputChangeCreator(val) {
  return {
    type: todolistActionTypes.TODO_INPUT_CHANGE,
    payload: val,
  };
}

export function todoInputAddCreator() {
  return {
    type: todolistActionTypes.TODO_INPUT_ADD,
  };
}

export function toggleTodoStatusCreator(id) {
  return {
    type: todolistActionTypes.TOGGLE_TODO_STATUS,
    payload: id,
  };
}

export function changeTodoTabCreator(val) {
  return {
    type: todolistActionTypes.CHANGE_TODO_TAB,
    payload: val,
  };
}
