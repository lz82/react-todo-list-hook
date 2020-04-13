import { connect } from 'react-redux'

import view from '../../components/todo-tab'

import { todolistActionCreator } from "@/store/action-creators";

import { todolistSelector } from '@/store/selectors'

const mapStateToProps = state => {
  return {
    filter: todolistSelector.getTodoFilter(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTabChange: val => {
      dispatch(todolistActionCreator.changeTodoTabCreator(val));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(view)