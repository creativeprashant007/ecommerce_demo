import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import appReducersWishlist from '../redux/reducers/ReducerWishlist';
import AppHeader from '../components/Header';
import CartProductCard from '../components/CartProductCard';
import WishListProductCard from '../components/WishListProductCard';
import {addItemToCart, removeFromWishlist} from '../redux/actions/actions';

const WishListScreen = () => {
  const dispatch = useDispatch();
  const [cartList, setCartList] = useState([]);
  const wishListData = useSelector(state => state.appReducersWishlist);
  return (
    <View>
      <AppHeader title={'Wishlist'} />
      <View style={styles.container}>
        <FlatList
          data={wishListData}
          renderItem={({item, index}) => {
            return (
              <WishListProductCard
                item={item}
                onRemoveFromWishList={() => {
                  dispatch(removeFromWishlist(index));
                }}
                onAddToCart  = {()=>{dispatch(addItemToCart(item))}}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
