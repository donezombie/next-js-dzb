import React from 'react';
import Link from 'next/link';

const Todo = ({ item }) => {
	return (
		<Link href={`todos/${item.id}`} key={item.id}>
      <a>
			  {item.id} - {item.title}
      </a>
		</Link>
	);
};

export default Todo;
