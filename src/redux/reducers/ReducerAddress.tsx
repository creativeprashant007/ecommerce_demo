import {act} from 'react-test-renderer';
import {ADD_ADDRESS, REMOVE_ADDRESS} from '../ActiontTypes';

const appReducerAddress = (state = [], action: any) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];

    case REMOVE_ADDRESS:
      const deletedAddressArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedAddressArray;

    default:
      return state;
  }
};
export default appReducerAddress;
