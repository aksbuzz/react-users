const ToDoItem = props => {
	const { todo, deleteTodos } = props;
	return (
		<p onDoubleClick={() => deleteTodos(todo.id)} style={{ cursor: 'pointer' }}>
			{todo.title}
		</p>
	);
};

export default ToDoItem;
