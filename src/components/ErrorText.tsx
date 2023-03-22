import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type Props = {
  title: string;
};

const ErrorText: React.FC<Props> = ({title}) => {
  return <Text style={styles.textStyle}>{title}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 10,

    color: 'red',
    fontSize: 14,
    marginLeft: 30,
  },
});

export default ErrorText;
