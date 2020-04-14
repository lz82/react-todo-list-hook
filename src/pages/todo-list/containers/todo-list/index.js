import { connect } from 'react-redux'

import { todolistSelector } from '@/store/selectors'

import view from '../../components/todo-list'
import { todolistActionCreator } from "@/store/action-creators";

const mapStateToProps = state => {
  return {
    list: todolistSelector.getTodoList(state),
    isLoading: todolistSelector.getLoadingStatus(state)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onListInit: () => {
      dispatch(todolistActionCreator.queryTodoListCreator());
    },
    onItemClick: id => {
      dispatch(todolistActionCreator.toggleTodoStatusCreator(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(view);