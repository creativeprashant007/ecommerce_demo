import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AppInputField from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import ErrorText from '../components/ErrorText';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
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
  };
  return (
    <View>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <Text style={styles.loginHeading}>Login</Text>
      <AppInputField
        placeHolder={'Enter User Email'}
        onchangeText={(txt: string) => {
          setEmail(txt);
          validate();
        }}
        value={email}
        isPassword={false}
        keyboardType={'default'}
        icon={require('../images/email.png')}
      />
      {badEmail === true && <ErrorText title={'Enter Email'} />}
      <AppInputField
        placeHolder={'Enter User Password'}
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
        title={'Login'}
        onPress={() => {
          console.log('login');

          validate();
        }}
        bgColor={'#000'}
        textColor={'#fff'}
      />
      <Text
        style={styles.createAccount}
        onPress={() => {
          navigation.navigate('Signup' as never);
        }}>
        Create New Account
      </Text>
    </View>
  );
};

export default LoginScreen;

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
    alignSelf: 'center',
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
