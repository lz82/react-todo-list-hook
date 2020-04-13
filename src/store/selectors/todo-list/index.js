export const getTodoInputVal = state => {
  return state.getIn(['todolist', 'todoInput'])
}

export const getTodoList = state => {
  return state.getIn(['todolist', 'list']).toJS()
}

export const getTodoFilter = state => {
  return state.getIn(['todolist', 'filter'])
}

export const getLoadingStatus = state => {
  return state.getIn(['todolist', 'isLoading'])
}