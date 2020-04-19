import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../redux/actions';
import useScrollProgressBar from '../hooks/useScrollProgressBar';
import TodoList from '../components/TodoList/TodoList';

const { testAction } = actions;

export default function Index() {
	const dispatch = useDispatch();
	const testReducer = useSelector((state) => state.testReducer);
	const { isFetching, listTodos } = testReducer;

	useScrollProgressBar();
	useEffect(() => {
		dispatch(testAction());
	}, []);

	if (isFetching) {
		return 'Loading...';
	}

	return (
		<div className="root">
      <img src="/static/assets/welcome.gif" />
      <hr />
			<h4>Example for get List todos by Redux-Hooks-Saga</h4>
			<TodoList data={listTodos.slice(0, 50)} />
		</div>
	);
}
