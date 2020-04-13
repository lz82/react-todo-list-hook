import { todolistActionTypes  } from "@/store/action-types";

const defaultState = {
  isLoading: false,
  todoInput: "",
  list: [],
  filter: 'all',
  errMsg: ''
};
let index = 4

export default function (state = defaultState, action) {
  switch(action.type) {
    default:
      return state
    case todolistActionTypes.TODO_INPUT_CHANGE:
      return {
        ...state,
        todoInput: action.payload
      }
    case todolistActionTypes.TODO_INPUT_ADD:
      return {
        ...state,
        todoInput: "",
        list: [
          {
            id: index++,
            txt: state.todoInput,
            complete: false,
          },
          ...state.list,
        ],
      };
    case todolistActionTypes.TOGGLE_TODO_STATUS:
      return {
        ...state,
        list: state.list.map(item => item.id === action.payload ? {...item, complete: !item.complete} : item)
      }
    case todolistActionTypes.CHANGE_TODO_TAB:
      return {
        ...state,
        filter: action.payload
      }
    case todolistActionTypes.QUERY_TODO_LIST_START:
      return {
        ...state,
        isLoading: true
      }
    case todolistActionTypes.QUERY_TODO_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
        errMsg: ''
      }
    case todolistActionTypes.QUERY_TODO_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        list: [],
        errMsg: action.payload
      }
  }
}