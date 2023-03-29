import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {removeAddress} from '../redux/actions/actions';
import AddressTile from '../components/AddressTile';
import AppButton from '../components/AppButton';

const CheckoutScreen = () => {
  const cartData = useSelector(state => state.appReducers);
  const navigator = useNavigation();
  const isFoucused = useIsFocused();
  const addressList = useSelector(state => state.appReducerAddress);
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState({});
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map((item: any) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  useEffect(() => {}, [isFoucused]);

  console.log('selectedAddress');
  console.log(selectedAddress);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <FlatList
            data={cartData}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View style={styles.itemViewContainer}>
                  <Image style={styles.itemImage} source={item.image} />
                  <View style={{marginLeft: 20}}>
                    <Text
                      style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                      {item.name}
                    </Text>
                    <Text style={{marginTop: 3}}>{'Rs. ' + item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
          <View style={styles.summaryContainer}>
            <Text style={{fontWeight: '700', fontSize: 18, color: '#000'}}>
              Total :
            </Text>
            <Text style={{fontWeight: '700', fontSize: 18, color: '#000'}}>
              {'Rs. ' + getTotal()}
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            data={addressList}
            renderItem={({item, index}) => {
              return (
                <AddressTile
                  index={index}
                  item={item}
                  isAddressPage={false}
                  onPress={() => {
                    setSelectedAddress(item);
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontWeight: '600',
            color: '#000',
          }}>
          Selected Address:
        </Text>
        <Text style={{fontSize: 16}}>
          {selectedAddress == null ||
          selectedAddress == {} ||
          selectedAddress.city == undefined
            ? 'Please Select Address From above list'
            : 'city :' +
              selectedAddress.city +
              ', House no :' +
              selectedAddress.house +
              ', pincode :' +
              selectedAddress.pincode +
              ', Address :' +
              selectedAddress.address}
        </Text>
        <View>
          <AppButton
            onPress={() => {}}
            title={'Place Order'}
            bgColor={'#000'}
            textColor={'#fff'}
            width={'100%'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckoutScreen;
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10, paddingHorizontal: 20, marginBottom: 30},
  itemViewContainer: {
    width: '100%',

    flexDirection: 'row',

    padding: 10,
    marginBottom: 20,
    borderWidth: 0.3,
    borderRadius: 15,
  },
  itemImage: {
    width: 70,
    height: 70,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.2,
    marginTop: 20,
    height: 50,
  },
});
