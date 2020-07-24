import {combineReducers} from 'redux';
import {reducer as data} from './reducer/data/data.js';
import {reducer as actions} from './reducer/actions/actions.js';
import {reducer as user} from './reducer/user/user.js';
import nameSpace from './reducer/name-space.js';
export default combineReducers({
  [nameSpace.DATA]: data,
  [nameSpace.ACTIONS]: actions,
  [nameSpace.USER]: user,
});
