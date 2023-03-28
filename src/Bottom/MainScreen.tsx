import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../components/Header';
import {products} from '../data/products';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addItemToWishList} from '../redux/actions/actions';
import {useNavigation} from '@react-navigation/core';

const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([{}]);
  const [tshirtList, setTshirtList] = useState([{}]);
  const [jeansList, setTJeansshirtList] = useState([{}]);

  useEffect(() => {
    navigation.setOptions({title: 'Ecommerce App'});
    console.log(products);
    let tempCat = [];
    products.category.map(item => {
      tempCat.push(item);
    });
    setCategoryList(products.category);
    setTshirtList(products.category[0].data);
    setTJeansshirtList(products.category[1].data);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* <AppHeader title={'Ecommerce App'} /> */}
      <View style={{marginHorizontal: 20}}>
        <Image style={styles.banner} source={require('../images/banner.png')} />
        <View style={styles.catContainer}>
          <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <Text style={styles.catItem}>{item.categoryName}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.categoryItemHeading}>New T-Shirts</Text>
        <View style={styles.catContainer}>
          <FlatList
            data={tshirtList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <ProductCard
                    item={item}
                    onAddToCart={(item: any) => {
                      dispatch(addItemToCart(item));
                    }}
                    onAddToWishList={(item: any) => {
                      dispatch(addItemToWishList(item));
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.categoryItemHeading}>New Jeans</Text>
        <View style={styles.catContainer}>
          <FlatList
            data={jeansList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <ProductCard
                    item={item}
                    onAddToCart={(item: any) => {
                      dispatch(addItemToCart(item));
                    }}
                    onAddToWishList={(item: any) => {
                      dispatch(addItemToWishList(item));
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MainScreen;
const styles = StyleSheet.create({
  container: {flex: 1, marginBottom: 80},
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
  },
  catContainer: {marginTop: 20, marginHorizontal: 0, padding: 0},
  catItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    color: '#000',
  },
  categoryItemHeading: {
    marginTop: 20,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
});
