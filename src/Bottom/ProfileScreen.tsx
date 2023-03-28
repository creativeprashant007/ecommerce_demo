import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import globalStyles from '../global/GlobalStyle';
let name: string = '';
const ProfileScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => (
        <TouchableOpacity>
          <Image
            style={globalStyles.settingImage}
            source={require('../images/settings.png')}
          />
        </TouchableOpacity>
      ),
    });

    getData();
  }, []);
  const getData = async () => {
    name = (await AsyncStorage.getItem('NAME')) as string;
  };
  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.profileImage}
        source={require('../images/profile_user.png')}
      />
      <Text style={styles.userName}>{name}</Text>
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity
          style={styles.menuStyle}
          onPress={() => {
            navigation.navigate('MyAddress' as never);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.menuIconStyle}
              source={require('../images/location.png')}
            />
            <Text style={styles.menuTextStyle}>My Addresses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuStyle} onPress={() => {}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.menuIconStyle}
              source={require('../images/orders.png')}
            />
            <Text style={styles.menuTextStyle}>My Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuStyle} onPress={() => {}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.menuIconStyle}
              source={require('../images/discount.png')}
            />
            <Text style={styles.menuTextStyle}>Offers</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    backgroundColor: '#fff',
    padding: 10,
  },
  titleStyle: {
    marginTop: 10,
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
    marginLeft: 20,
  },

  profileImage: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    marginTop: 30,
  },
  userName: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
  },
  menuStyle: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.3,
    marginTop: 20,
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
  },
  menuTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
  },
  menuIconStyle: {
    marginTop: 1,
    height: 20,
    width: 20,
    marginRight: 10,
  },
});
