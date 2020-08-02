import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { RouteConst } from '../../utils.js';

class ProfileIcon extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <Link to={RouteConst.MY_LIST}>
      <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
    </Link>;
  }
}

export { ProfileIcon };
export default (ProfileIcon);
