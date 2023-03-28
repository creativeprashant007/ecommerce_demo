import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type Props = {
  item: any;
  index: any;
  onPress: any;
  isAddressPage: boolean;
};

const AddressTile: React.FC<Props> = ({
  item,
  index,
  onPress,
  isAddressPage,
}) => {
  return (
    <View style={styles.itemTileContainer}>
      <View>
        <Text>{'City: ' + item.city}</Text>
        <Text>{'House: ' + item.house}</Text>
        <Text>{'Pincode: ' + item.pincode}</Text>
        <Text>{'Address: ' + item.address}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButtonStyle}
        onPress={() => {
          onPress(index);
        }}>
        <Text style={styles.deleteText}>
          {isAddressPage ? 'Delete' : 'Select'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressTile;

const styles = StyleSheet.create({
  itemTileContainer: {
    width: '100%',
    //   height: 70,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 20,
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
