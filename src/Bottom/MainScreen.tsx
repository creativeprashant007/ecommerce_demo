import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../components/Header';
import {products} from '../data/products';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ProductCard from '../components/ProductCard';

const MainScreen = () => {
  const [categoryList, setCategoryList] = useState([{}]);
  const [tshirtList, setTshirtList] = useState([{}]);
  const [jeansList, setTJeansshirtList] = useState([{}]);

  useEffect(() => {
    console.log(products);
    let tempCat = [];
    products.category.map(item => {
      tempCat.push(item);
    });
    setCategoryList(products.category);
    setTshirtList(products.category[0].data);
    setTJeansshirtList(products.category[1].data);
   
    
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppHeader title={'Ecommerce App'} />
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
                  <ProductCard item={item} />
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
                  <ProductCard item={item} />
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
  container: {flex: 1, marginHorizontal: 20, marginBottom: 80},
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
