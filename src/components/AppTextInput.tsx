import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

export type Props = {
  value: any;
  placeHolder: string;
  onchangeText: any;
  icon: any;
  keyboardType: any;
  isPassword: boolean;
};

const AppInputField: React.FC<Props> = ({
  value,
  placeHolder,
  onchangeText,
  icon,
  keyboardType,
  isPassword = false,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image} />
      <TextInput
        value={value}
        placeholder={placeHolder}
        style={styles.inputField}
        onChange={txt => {
          onchangeText(txt.nativeEvent.text);
        }}
        secureTextEntry={isPassword ? true : false}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 30,
    borderWidth: 0.5,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    height: 22,
    width: 22,
  },
  inputField: {
    marginLeft: 10,
  },
});

export default AppInputField;
