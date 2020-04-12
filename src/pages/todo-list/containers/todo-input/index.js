import view from '../../components/todo-input'

import { connect } from 'react-redux'

import { todolistActionCreator } from '@/store/action-creators'

const mapStateToProps = state => {
  return {
    todoInputVal: state.todolist.todoInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    todoInputChange: (val) =>
      dispatch(todolistActionCreator.todoInputChangeCreator(val)),
    todoInputAddClick: () =>
      dispatch(todolistActionCreator.todoInputAddCreator()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(view)