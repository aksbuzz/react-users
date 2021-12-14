import { useState } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { createTodo, setTodoTitle } from '../store/actions';
import { selectTodoTitle } from '../store/selectors';

const ToDoForm = props => {
	// eslint-disable-next-line no-unused-vars
	const { title, setTodoTitle, createTodo } = props;

	// const onChange = e => {
	// 	setTodoTitle(e.target.value);
	// };

	const [titleVal, setTitleVal] = useState(title);

	const onChange = e => {
		setTitleVal(e.target.value);
	};
	const onSubmit = e => {
		e.preventDefault();
		createTodo(title);
	};
	return (
		<form>
			<input
				type='text'
				value={titleVal}
				placeholder='What needs to be done...'
				onChange={onChange}
			/>
			<button onClick={onSubmit}>Submit</button>
		</form>
	);
};

const mapStateToProps = state => ({
	title: selectTodoTitle(state),
});

const mapDispatchToProps = dispatch => ({
	// setTodoTitle: title => dispatch(setTodoTitle(title)),
	createTodo: title => dispatch(createTodo(title)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
