import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import SearchScreen from '../Bottom/SearchScreen';
import CartScreen from '../Bottom/CartScreen';
import WishListScreen from '../Bottom/WishListScreen';
import ProfileScreen from '../Bottom/ProfileScreen';
import MainScreen from '../Bottom/MainScreen';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.mainContainer}>
      {selectedTab == 0 ? (
        <MainScreen />
      ) : selectedTab == 1 ? (
        <SearchScreen />
      ) : selectedTab == 2 ? (
        <CartScreen />
      ) : selectedTab == 3 ? (
        <WishListScreen />
      ) : (
        <ProfileScreen />
      )}
      <View style={styles.bottomNavigationContainer}>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            style={styles.itemsStyle}
            source={require('../images/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={styles.itemsStyle}
            source={require('../images/search.png')}
          />
        </TouchableOpacity>
        <View style={styles.items}>
          <TouchableOpacity
            style={styles.circleItemStyle}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              style={styles.bagStyle}
              source={require('../images/bag.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={styles.itemsStyle}
            source={require('../images/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            style={styles.itemsStyle}
            source={require('../images/user.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bottomNavigationContainer: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsStyle: {
    height: 24,
    width: 24,
  },
  bagStyle: {
    height: 24,
    width: 24,
    tintColor: '#FFF',
  },
  circleItemStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
