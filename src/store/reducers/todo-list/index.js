import { todolistActionTypes  } from "@/store/action-types";

const defaultState = {
  isLoading: false,
  todoInput: "",
  list: [{
      id: 1,
      txt: "吃饭",
      complete: true,
    },
    {
      id: 2,
      txt: "睡觉",
      complete: false,
    },
    {
      id: 3,
      txt: "打豆豆",
      complete: false,
    }],
  filter: 'all'
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
  }
}