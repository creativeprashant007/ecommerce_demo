import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export type Props = {
  item: any;
  onRemoveFromWishList: any;
  onAddToCart: any;
};

const WishListProductCard: React.FC<Props> = ({
  item,
  onAddToCart,
  onRemoveFromWishList,
}) => {
  return (
    <View style={styles.cardStyle}>
      <Image style={styles.imageStyle} source={item.image} />
      <View style={styles.nameHeartRow}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => {
            onRemoveFromWishList(item);
          }}>
          <Image
            style={styles.heartImage}
            source={require('../images/heart_filled.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>Rs {item.price}</Text>
        <TouchableOpacity
          style={styles.addToCart}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 230,
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
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  nameHeartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
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
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 20,

    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImage: {
    width: 22,
    height: 22,
    alignSelf: 'center',
  },
});

export default WishListProductCard;
