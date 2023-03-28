import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {removeAddress} from '../redux/actions/actions';
import AddressTile from '../components/AddressTile';

const CheckoutScreen = () => {
  const cartData = useSelector(state => state.appReducers);
  const navigator = useNavigation();
  const isFoucused = useIsFocused();
  const addressList = useSelector(state => state.appReducerAddress);
  const dispatch = useDispatch();
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map((item: any) => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  useEffect(() => {}, [isFoucused]);
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={cartData}
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
                onPress={() => {}}
              />
            );
          }}
        />
      </View>
    </View>
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
