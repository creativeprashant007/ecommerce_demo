import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export type Props = {
  title: string;
  onPress: any;
  bgColor: any;
  textColor: any;
  width: any;
};
const defaultProps = {
  width: '85%',
};

const AppButton: React.FC<Props> = (propsIn: Props) => {
  const props = {...defaultProps, ...propsIn};
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.bgColor,
        justifyContent: 'center',
        width: props.width,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
      }}
      onPress={() => {
        props.onPress();
      }}>
      <Text style={{color: props.textColor, alignSelf: 'center', fontSize: 20}}>
        {props.title}
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
