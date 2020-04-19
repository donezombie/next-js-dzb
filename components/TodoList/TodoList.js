import React from 'react';

const TodoList = ({ data }) => {
	return data.map((el) => (
		<p key={el.id}>
			{el.id} - {el.title}
		</p>
	));
};

export default TodoList;
