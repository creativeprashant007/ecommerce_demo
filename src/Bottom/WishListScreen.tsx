import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import appReducersWishlist from '../redux/reducers/ReducerWishlist';
import AppHeader from '../components/Header';
import CartProductCard from '../components/CartProductCard';
import WishListProductCard from '../components/WishListProductCard';
import {addItemToCart, removeFromWishlist} from '../redux/actions/actions';
import {useNavigation} from '@react-navigation/native';

const WishListScreen = () => {
  const dispatch = useDispatch();
  const [cartList, setCartList] = useState([]);
  const wishListData = useSelector(state => state.appReducersWishlist);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({title: 'Wishlist'});
  }, []);
  return (
    <View>
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
                onAddToCart={() => {
                  dispatch(addItemToCart(item));
                }}
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
