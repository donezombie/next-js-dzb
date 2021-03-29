import React from 'react';
import { connect } from "react-redux";
import { checkAuth } from 'redux/actions';

const mapStateToProps = ({ authReducer }) => ({ authReducer });

const withLoggedIn = (BaseComponent, permissionAllowed) => {
	class ComponentWrapped extends React.Component {
		constructor(props) {
			super(props);
			this.props = props;
		}

		componentDidMount() {
			this.props.checkAuth();
		}

		render() {
			const { authReducer } = this.props;
			const isLogin = authReducer?.auth?.isLogin;

      if (isLogin) {
        return <BaseComponent {...this.props} />
      }

      return "Access denied!"
		}
	}

	return connect(mapStateToProps, { checkAuth })(ComponentWrapped);
};

export default withLoggedIn;