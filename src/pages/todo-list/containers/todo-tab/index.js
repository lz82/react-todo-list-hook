import { connect } from 'react-redux'

import view from '../../components/todo-tab'

import { todolistActionCreator } from "@/store/action-creators";

const mapStateToProps = state => {
  return {
    filter: state.getIn(['todolist', 'filter'])
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