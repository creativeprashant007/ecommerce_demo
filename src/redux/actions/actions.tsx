import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from '../ActiontTypes';

export const addItemToCart = (data: any) => ({
  type: ADD_TO_CART,
  payload: data,
});
export const removeFromCart = (index: any) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});
export const addItemToWishList = (data: any) => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});
export const removeFromWishlist = (index: any) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
