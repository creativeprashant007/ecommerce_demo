import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type Props = {
  title: string;
};

const AppHeader: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Ecommerce App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 10,
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
    marginLeft: 20,
  },
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    backgroundColor: '#fff',
  },
});

export default AppHeader;
