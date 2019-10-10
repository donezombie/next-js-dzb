import React, { Fragment } from 'react';
import CSSBaseLine from '@material-ui/core/CssBaseline';
import Navbar from '../Navbar';

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <CSSBaseLine />
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout;