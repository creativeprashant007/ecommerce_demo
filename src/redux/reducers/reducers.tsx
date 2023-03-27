import {act} from 'react-test-renderer';
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from '../ActiontTypes';

const appReducers = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('added to cart successfully');
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      console.log('cart deleted successfully');
      const deletedArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray;

    default:
      return state;
  }
};
export default appReducers;
