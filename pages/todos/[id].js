import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todoServices from "services/todoServices";
import DefaultLayout from "layout/DefaultLayout";

const propTypes = {

}

const TodoDetail = (props) => {
  //! State
  const dispatch = useDispatch();
  const todo = props?.todo;

  //! Render
  return (
    <DefaultLayout>
      <div className="todo-detail">
        <code className="d-block mb-3 mt-3">Use getServerSideProps - for Server Rendering</code>
        <pre>{todo.title}</pre>
      </div>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context) {
  const id = context?.params?.id;

  const res = await todoServices.getTodo({ id });
  const data = res?.data || {};

  return {
    props: {
      todo: data,
    }
  }
}

TodoDetail.propTypes = propTypes;
export default TodoDetail;