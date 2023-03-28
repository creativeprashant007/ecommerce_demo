import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import AppHeader from '../components/Header';
import appReducers from '../redux/reducers/reducers';
import {useDispatch, useSelector} from 'react-redux';
import CartProductCard from '../components/CartProductCard';
import {addItemToWishList, removeFromCart} from '../redux/actions/actions';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../components/AppButton';

const CartScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({title: 'Cart'});
  }, []);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.appReducers);

  return (
    <View>
      <View style={styles.container}>
        {cartData.length > 0 ? (
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
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 300,
            }}>
            <Text style={{color: '#000'}}>No Items Added in cart </Text>
          </View>
        )}
        {cartData.length > 0 ? (
          <View>
            <AppButton
              onPress={() => {}}
              title={'Checkout'}
              bgColor={'green'}
              textColor={'#fff'}
            />
          </View>
        ) : null}
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
