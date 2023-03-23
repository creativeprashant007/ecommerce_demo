import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../components/Header';
import {products} from '../data/products';

const MainScreen = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    console.log(products);
  });
  return (
    <View style={styles.container}>
      <AppHeader title={'Ecommerce App'} />
      <Image style={styles.banner} source={require('../images/banner.png')} />
    </View>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  container: {flex: 1},
  banner: {
    width: '94%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
