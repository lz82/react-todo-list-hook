import { connect } from 'react-redux'

import { todolistSelector } from '@/store/selectors'

import view from '../../components/todo-list'
import { todolistActionCreator } from "@/store/action-creators";

const mapStateToProps = state => {

  const list = todolistSelector.getTodoList(state)
  const filter = todolistSelector.getTodoFilter(state)


  let ret = []
  switch(filter) {
    case 'all':
      ret = list
      break;
    case 'todo':
      ret = list.filter(item => !item.complete)
      break;
    case 'complete':
      ret = list.filter(item => item.complete)
      break;
    default:
      return list
  }
  return {
    list: ret,
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