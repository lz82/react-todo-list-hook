import { todolistActionTypes  } from "@/store/action-types";
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isLoading: false,
  todoInput: "",
  list: [],
  filter: 'all',
  errMsg: ''
});
let index = 4

export default function (state = defaultState, action) {
  switch(action.type) {
    default:
      return state
    case todolistActionTypes.TODO_INPUT_CHANGE:
      return fromJS({
        ...state.toJS(),
        todoInput: action.payload
      })
    case todolistActionTypes.TODO_INPUT_ADD:
      console.log(state)
      return fromJS({
        ...state.toJS(),
        todoInput: "",
        list: fromJS([
          {
            id: index++,
            txt: state.get('todoInput'),
            complete: false,
          },
          ...state.get('list').toJS(),
        ]),
      });
    case todolistActionTypes.TOGGLE_TODO_STATUS:
      return fromJS({
        ...state.toJS(),
        list: state.get('list').toJS().map(item => item.id === action.payload ? {...item, complete: !item.complete} : item)
      })
    case todolistActionTypes.CHANGE_TODO_TAB:
      return fromJS({
        ...state.toJS(),
        filter: action.payload
      })
    case todolistActionTypes.QUERY_TODO_LIST_START:
      return fromJS({
        ...state.toJS(),
        isLoading: true
      })
    case todolistActionTypes.QUERY_TODO_LIST_SUCCESS:
      return fromJS({
        ...state.toJS(),
        isLoading: false,
        list: action.payload,
        errMsg: ''
      })
    case todolistActionTypes.QUERY_TODO_LIST_FAILURE:
      return fromJS({
        ...state.toJS(),
        isLoading: false,
        list: [],
        errMsg: action.payload
      })
  }
}