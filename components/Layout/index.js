import React, { Fragment } from 'react';
import CSSBaseLine from '@material-ui/core/CssBaseline';

const Layout = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <CSSBaseLine />
      {children}
    </Fragment>
  )
}

export default Layout;