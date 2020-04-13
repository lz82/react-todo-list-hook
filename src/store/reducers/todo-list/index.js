import { todolistActionTypes } from "@/store/action-types";
import { fromJS } from "immutable";

const defaultState = fromJS({
  isLoading: false,
  todoInput: "",
  list: [],
  filter: "all",
  errMsg: "",
});
let index = 4;

export default function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
    case todolistActionTypes.TODO_INPUT_CHANGE:
      return state.set("todoInput", action.payload);
    case todolistActionTypes.TODO_INPUT_ADD:
      return state.merge({
        list: state.get("list").unshift(
          fromJS({
            id: index++,
            txt: state.get("todoInput"),
            complete: false,
          })
        ),
        todoInput: "",
      });
    case todolistActionTypes.TOGGLE_TODO_STATUS:
      return state.set(
        "list",
        state
          .get("list")
          .map((item) =>
            item.get("id") === action.payload
              ? item.set("complete", !item.get("complete"))
              : item
          )
      );
    case todolistActionTypes.CHANGE_TODO_TAB:
      return state.set('filter', action.payload)
    case todolistActionTypes.QUERY_TODO_LIST_START:
      return state.set('isLoading', true)
    case todolistActionTypes.QUERY_TODO_LIST_SUCCESS:
      return state.merge({
        isLoading: false,
        errMsg: '',
        list: fromJS(action.payload)
      })
    case todolistActionTypes.QUERY_TODO_LIST_FAILURE:
      return state.merge({
        isLoading: false,
        list: fromJS([]),
        errMsg: action.payload
      });
  }
}
