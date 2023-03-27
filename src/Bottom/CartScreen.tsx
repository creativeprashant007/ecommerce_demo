import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../components/Header';
import appReducers from '../redux/reducers/reducers';
import {useDispatch, useSelector} from 'react-redux';
import CartProductCard from '../components/CartProductCard';
import {addItemToWishList, removeFromCart} from '../redux/actions/actions';

const CartScreen = () => {
  const dispatch = useDispatch();
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.appReducers);

  return (
    <View>
      <AppHeader title={'Cart'} />
      <View style={styles.container}>
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartProductCard
                item={item}
                onRemoveFromCart={() => {
                  dispatch(removeFromCart(index));
                }}
                onAddToWishList={(item: any) => {
                  dispatch(addItemToWishList(item));
                }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
