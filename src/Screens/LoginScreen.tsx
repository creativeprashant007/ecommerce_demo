import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AppInputField from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import ErrorText from '../components/ErrorText';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
  const validate = async () => {
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
    let storedEmail = await AsyncStorage.getItem('EMAIL');
    let storedPassword = await AsyncStorage.getItem('PASSWORD');
    if (!badEmail && !badPassword) {
      if (storedEmail == email && storedPassword == password) {
        AsyncStorage.setItem('LOGIN_STATUS', 'true');
        navigation.navigate('Home' as never);
      } else if (storedEmail != email) {
        Alert.alert('Incorrect Email', 'Please Enter Correct Email');
      } else if (storedPassword != password) {
        Alert.alert('Incorrect Password', 'Please Enter Correct Password');
      }
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
