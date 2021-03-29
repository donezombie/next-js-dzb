import React from 'react';
import DefaultLayout from 'layout/DefaultLayout';
import withLoggedIn from 'HOC/withLoggedIn';

const PrivateRoute = (props) => {

  return (
    <DefaultLayout>
      <div> Private Route </div>
    </DefaultLayout>
  )
}

export default withLoggedIn(PrivateRoute);