import { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteTodos, getTodos } from '../store/actions';
import { selectAllTodos, selectTodosLoading } from '../store/selectors';
import ToDoForm from './TodoForm';
import ToDoItem from './TodoItem';

const ToDo = props => {
	const { todos, loading, getTodos, deleteTodos } = props;
	useEffect(() => {
		getTodos();
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<ToDoForm />
			{loading && 'Loading........'}
			{todos &&
				todos.map((todo, index) => (
					<ToDoItem todo={todo} key={index} deleteTodos={deleteTodos} />
				))}
		</>
	);
};

const mapStateToProps = state => ({
	todos: selectAllTodos(state),
	loading: selectTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
	getTodos: () => dispatch(getTodos()),
	deleteTodos: id => dispatch(deleteTodos(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
