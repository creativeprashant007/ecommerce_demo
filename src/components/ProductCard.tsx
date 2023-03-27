import React from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type Props = {
  item: any;
};

const ProductCard: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.cardStyle}>
      <Image style={styles.imageStyle} source={item.image} />
      <Text style={styles.textStyle}>{item.name}</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>Rs {item.price}</Text>
        <TouchableOpacity style={styles.addToCart}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.heart}>
        <Image
          style={styles.heartImage}
          source={require('../images/heart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginLeft: 10,
    elevation: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: '600',
    color: '#000',
  },
  imageStyle: {
    width: '100%',
    height: '65%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems:'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
  },
  addToCart: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 10,
  },
  heart: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    elevation: 5,
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImage: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
});

export default ProductCard;
