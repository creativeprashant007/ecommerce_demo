import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
let name: string = '';
const ProfileScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    name = (await AsyncStorage.getItem('NAME')) as string;
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>Profile</Text>
        <TouchableOpacity>
          <Image
            style={styles.settingImage}
            source={require('../images/settings.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.profileImage}
        source={require('../images/profile.png')}
      />
      <Text style={styles.userName}>{name}</Text>
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity style={styles.menuStyle}></TouchableOpacity>
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
  settingImage: {
    height: 25,
    width: 25,
  },
  profileImage: {
    alignSelf: 'center',
    height: 70,
    width: 70,
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
  },
});
