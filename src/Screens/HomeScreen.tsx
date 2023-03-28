import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import SearchScreen from '../Bottom/SearchScreen';
import CartScreen from '../Bottom/CartScreen';
import WishListScreen from '../Bottom/WishListScreen';
import ProfileScreen from '../Bottom/ProfileScreen';
import MainScreen from '../Bottom/MainScreen';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data: any = useSelector(state => state);
  const itemsStyle = function (index: number, currentIndex: number) {
    return {
      height: 24,
      width: 24,
      tintColor: index == currentIndex ? '#000' : '#808080',
    };
  };
  const bagStyle = function (index: number, currentIndex: number) {
    return {
      height: 24,
      width: 24,
      tintColor: index == currentIndex ? '#fff' : '#808080',
    };
  };
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
            style={itemsStyle(selectedTab, 0)}
            source={require('../images/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={itemsStyle(selectedTab, 1)}
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
              style={bagStyle(selectedTab, 2)}
              source={require('../images/bag.png')}
            />
            <View style={styles.badgeCart}>
              <Text style={styles.badgeTextCart}>
                {data.appReducers.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={itemsStyle(selectedTab, 3)}
            source={require('../images/heart.png')}
          />
          <View style={styles.badgeHeart}>
            <Text style={styles.badgeTextHeart}>
              {data.appReducersWishlist.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            style={itemsStyle(selectedTab, 4)}
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

  circleItemStyle: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeCart: {
    width: 18,
    height: 18,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  badgeHeart: {
    width: 18,
    height: 18,
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 15,
    right: 15,
  },
  badgeTextCart: {color: '#FFF', fontWeight: '600', fontSize: 12},
  badgeTextHeart: {color: '#FFF', fontWeight: '600', fontSize: 12},
});
