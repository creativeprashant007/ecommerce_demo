import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type Props = {
  title: string;
  onPress: any;
  bgColor: any;
  textColor: any;
};

const AppButton: React.FC<Props> = ({title, onPress, bgColor, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text
        style={{color: textColor, alignSelf: 'center', fontSize: 20}}
        onPress={() => {
          onPress();
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 22,
    width: 22,
  },
  inputField: {
    marginLeft: 10,
  },
});

export default AppButton;
