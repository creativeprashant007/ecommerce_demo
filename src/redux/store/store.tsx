import {createStore} from 'redux';
import appReducers from '../reducers/reducers';
import {combineReducers} from 'redux';
import appReducersWishlist from '../reducers/ReducerWishlist';
import appReducerAddress from '../reducers/ReducerAddress';
const routeReducers = combineReducers({
  appReducers,
  appReducersWishlist,
  appReducerAddress,
});
const appStore = createStore(routeReducers);
export default appStore;
