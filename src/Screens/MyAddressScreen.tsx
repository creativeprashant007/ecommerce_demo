import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/core';
import globalStyles from '../global/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {removeAddress} from '../redux/actions/actions';
import AddressTile from '../components/AddressTile';

let addressList = [];
const MyAddressScreen = () => {
  const navigator = useNavigation();
  const isFoucused = useIsFocused();
  const addressList = useSelector(state => state.appReducerAddress);
  const dispatch = useDispatch();
  console.log(addressList);
  useEffect(() => {
    navigator.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigator.navigate('AddNewAddress' as never);
          }}>
          <Image
            style={globalStyles.settingImage}
            source={require('../images/plus.png')}
          />
        </TouchableOpacity>
      ),
    });
  }, [isFoucused]);
  return (
    <View style={styles.container}>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <AddressTile
              index={index}
              item={item}
              isAddressPage={true}
              onPress={() => {
                dispatch(removeAddress(index));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default MyAddressScreen;
const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15, paddingTop: 10},
  itemTileContainer: {
    width: '100%',
    //   height: 70,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 0.6,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 20,
  },
  deleteText: {
    color: 'red',
    fontWeight: '600',
    fontSize: 16,
  },
  deleteButtonStyle: {
    height: 40,
    borderWidth: 0.2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
