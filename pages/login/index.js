import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { login } from "redux/actions";
import { useRouter } from "next/router";

const propTypes = {};

const LoginPage = (props) => {
  //! State
  const authReducer = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const isLogin = authReducer?.auth?.isLogin;

  //! Function
  if (isLogin) {
    router.push('/');
    return null;
  }

  //! Render
  return (
    <div className="login">
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          dispatch(login({
            username: values.username,
            password: values.password
          }));
        }}
      >
        {propsFormik => (
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={propsFormik.handleChange('username')}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
                onChange={propsFormik.handleChange('password')}
              />
            </FormGroup>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>

    </div>
  );
};

LoginPage.propTypes = propTypes;
export default LoginPage;
