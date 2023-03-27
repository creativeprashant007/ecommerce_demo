import {act} from 'react-test-renderer';
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from '../ActiontTypes';

const appReducersWishlist = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      console.log('added to cart successfully');
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      const deletedWishlistArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedWishlistArray;

    default:
      return state;
  }
};
export default appReducersWishlist;
