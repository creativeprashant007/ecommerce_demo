import {createStore} from 'redux';
import appReducers from '../reducers/reducers';
import {combineReducers} from 'redux';
import appReducersWishlist from '../reducers/ReducerWishlist';
const routeReducers = combineReducers({appReducers, appReducersWishlist});
const appStore = createStore(routeReducers);
export default appStore;
