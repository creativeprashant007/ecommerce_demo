import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
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
