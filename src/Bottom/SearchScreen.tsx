import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';

const SearchScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({title: 'Search'});
  }, []);
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
