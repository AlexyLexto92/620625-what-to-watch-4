import React, {PureComponent} from 'react';
import {getAuthorizationStatus} from '../reducer/user/selectors.js';
import {AuthorizationStatus} from "../reducer/user/user.js";
import {Link} from 'react-router-dom';
import { RouteConst } from '../utils.js';
import {connect} from 'react-redux';
class ProfileIcon extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {authorizationStatus} = this.props;
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <Link to={RouteConst.SING_IN}>
        <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
      </Link>;
    } else if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Link to={RouteConst.MAIN} >
        <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
      </Link>;
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {ProfileIcon};
export default connect(mapStateToProps)(ProfileIcon);
