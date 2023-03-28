import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import AppInputField from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/actions/actions';

const AddAddressScreen = () => {
  const navigator = useNavigation();
  const [city, setCity] = useState('');
  const [house, setHouse] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <AppInputField
        placeHolder={'Enter City Name'}
        onchangeText={(txt: string) => {
          setCity(txt);
        }}
        value={city}
        isPassword={false}
        keyboardType={''}
        icon={require('../images/city.png')}
      />
      <AppInputField
        placeHolder={'Enter house number'}
        onchangeText={(txt: string) => {
          setHouse(txt);
        }}
        value={house}
        isPassword={false}
        keyboardType={''}
        icon={require('../images/building.png')}
      />
      <AppInputField
        placeHolder={'Enter Pincode'}
        onchangeText={(txt: string) => {
          setPincode(txt);
        }}
        value={pincode}
        isPassword={false}
        keyboardType={'numeric'}
        icon={require('../images/pincode.png')}
      />
      <AppInputField
        placeHolder={'Enter Location'}
        onchangeText={(txt: string) => {
          setAddress(txt);
        }}
        value={address}
        isPassword={false}
        keyboardType={''}
        icon={require('../images/location.png')}
      />
      <AppButton
        title={'Save Address'}
        onPress={() => {
          if (city !== '' && house !== '' && pincode !== '' && address !== '') {
            dispatch(
              addAddress({
                city: city,
                house: house,
                pincode: pincode,
                address: address,
              }),
            );
            navigator.goBack();
          }
        }}
        bgColor={'#000'}
        textColor={'#FFF'}
      />
    </View>
  );
};

export default AddAddressScreen;
const styles = StyleSheet.create({
  container: {},
});
