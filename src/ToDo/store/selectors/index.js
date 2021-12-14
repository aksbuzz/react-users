import { createSelector } from 'reselect';

const todosSelector = state => state.todoReducerState;

export const selectAllTodos = createSelector(
	todosSelector,
	todoPage => todoPage.todos
);

export const selectTodosLoading = createSelector(
	todosSelector,
	todoPage => todoPage.loading
);

export const selectTodoTitle = createSelector(
	todosSelector,
	todoPage => todoPage.title
);
