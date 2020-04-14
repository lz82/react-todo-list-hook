import { createSelector } from 'reselect';

export const getTodoInputVal = (state) => {
	return state.getIn(['todolist', 'todoInput']);
};

export const getOriginTodoList = (state) => {
	return state.getIn(['todolist', 'list']).toJS();
};

export const getTodoFilter = (state) => {
	return state.getIn(['todolist', 'filter']);
};

export const getLoadingStatus = (state) => {
	return state.getIn(['todolist', 'isLoading']);
};

export const getTodoList = (state) => {
	const filterSelector = getTodoFilter;
	const listSelector = getOriginTodoList;

	return createSelector(filterSelector, listSelector, (filter, list) => {
		switch (filter) {
			case 'all':
				return list;
			case 'todo':
				return list.filter((item) => !item.complete);
			case 'complete':
				return list.filter((item) => item.complete);
			default:
				return list;
		}
	});
};
