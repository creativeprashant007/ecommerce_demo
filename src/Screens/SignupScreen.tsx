import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AppInputField from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import ErrorText from '../components/ErrorText';
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
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <Text style={styles.loginHeading}>Create New Account</Text>
      <AppInputField
        placeHolder={'Enter Name'}
        onchangeText={(txt: string) => {
          setName(txt);
          validate();
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
          validate();
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
          validate();
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
          validate();
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
