import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import Header from "./Header";
import { Fragment } from "react";
import Footer from "./Footer";

const propTypes = {

}

const DefaultLayout = ({ children }) => {
  //! State
  const dispatch = useDispatch();

  //! Function

  //! Render
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
    
  )
}

DefaultLayout.propTypes = propTypes;
export default DefaultLayout;