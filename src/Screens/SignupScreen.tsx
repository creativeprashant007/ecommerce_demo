import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AppInputField from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import ErrorText from '../components/ErrorText';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [phone, setPhone] = useState('');
  const [badPhone, setBadPhone] = useState(false);
  const validate = () => {
    console.log(badEmail);
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    if (name == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (phone == '') {
      setBadPhone(true);
    } else {
      setBadPhone(false);
    }
    console.log('here we are now');
    saveData();
  };

  const saveData = async () => {
    if (!badName && !badEmail && !badPassword && !badPhone) {
      console.log('here we are now');
      await AsyncStorage.setItem('NAME', name);
      await AsyncStorage.setItem('EMAIL', email);
      await AsyncStorage.setItem('PHONE', phone);
      await AsyncStorage.setItem('PASSWORD', password);
      AsyncStorage.setItem('LOGIN_STATUS', 'false');
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <Text style={styles.loginHeading}>Create New Account</Text>
      <AppInputField
        placeHolder={'Enter Name'}
        onchangeText={(txt: string) => {
          setName(txt);
        }}
        value={name}
        isPassword={false}
        keyboardType={'default'}
        icon={require('../images/name.png')}
      />
      {badName === true && <ErrorText title={'Enter Name'} />}
      <AppInputField
        placeHolder={'Enter Email'}
        onchangeText={(txt: string) => {
          setEmail(txt);
        }}
        value={email}
        isPassword={false}
        keyboardType={''}
        icon={require('../images/email.png')}
      />
      {badEmail === true && <ErrorText title={'Enter Email'} />}
      <AppInputField
        placeHolder={'Enter Phone'}
        onchangeText={(txt: string) => {
          setPhone(txt);
        }}
        value={phone}
        isPassword={false}
        keyboardType={'numeric'}
        icon={require('../images/phone.png')}
      />
      {badPhone === true && <ErrorText title={'Enter Phone'} />}
      <AppInputField
        placeHolder={'Enter Password'}
        onchangeText={(txt: string) => {
          setPassword(txt);
        }}
        value={password}
        isPassword={true}
        keyboardType={''}
        icon={require('../images/password.png')}
      />
      {badPassword === true && <ErrorText title={'Enter Password'} />}
      <AppButton
        title={'Signup'}
        onPress={() => {
          validate();
        }}
        bgColor={'#000'}
        textColor={'#fff'}
      />
      <Text
        style={styles.createAccount}
        onPress={() => {
          navigation.goBack();
        }}>
        Already have an account?Login
      </Text>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 100,
    height: 100,
    width: 100,
    borderRadius: 30,
    alignSelf: 'center',
  },
  loginHeading: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
    marginVertical: 30,
  },
  createAccount: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 50,
    alignSelf: 'center',
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
