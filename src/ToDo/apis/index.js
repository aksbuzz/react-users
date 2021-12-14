import defaultAxios from 'axios';

const axios = defaultAxios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export const getAllTodos = async () => {
	try {
		const todos = await axios.get('todos?_limit=5');
		return todos.data;
	} catch (err) {
		return console.error(err);
	}
};

export const createNewTodo = async title => {
	try {
		const todo = await axios.post('todos', {
			title,
		});

		return todo.data;
	} catch (err) {
		return console.error(err);
	}
};

export const deleteExistedTodo = async id => {
	try {
		await axios.delete(`todos/${id}`);

		return id;
	} catch (err) {
		return console.error(err);
	}
};
