import {View, Text, StyleSheet, Image} from 'react-native';
import React, {NewLifecycle, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      if ((await AsyncStorage.getItem('LOGIN_STATUS')) == 'true') {
        navigation.navigate('Home' as never);
      } else {
        navigation.navigate('Login' as never);
      }
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/logo.png')} />
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    resizeMode: 'cover',
  },
});
