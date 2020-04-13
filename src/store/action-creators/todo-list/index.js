import { todolistActionTypes } from "@/store/action-types";
import axios from 'axios'

const queryTodoListStart = () => {
  return {
    type: todolistActionTypes.QUERY_TODO_LIST_START
  }
}

const queryTodoListSuccess = data => {
  return {
    type: todolistActionTypes.QUERY_TODO_LIST_SUCCESS,
    payload: data
  }
}

const queryTodoListFailure = msg => {
  return {
    type: todolistActionTypes.QUERY_TODO_LIST_FAILURE,
    payload: msg
  }
}



export function queryTodoListCreator() {
  return async (dispatch) => {
    dispatch(queryTodoListStart())
    try {
      const res = await axios.get('/mock/list.json')
      dispatch(queryTodoListSuccess(res.data))
    } catch (err) {
      dispatch(queryTodoListFailure(err.toString()))
    }
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
