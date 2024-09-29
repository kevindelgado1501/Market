import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Pressable, Animated} from 'react-native';
import styles from '../IU/styles/stylesTv'; 

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$25',
    image: require('../image/Tv1.jpg'),
    description: 'This is product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$30',
    image: require('../image/Tv2.jpg'),
    description: 'This is product 2.',
  },
  // Add more products here
];

const Tv = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      {products.map(product => (
        <Animated.View
          key={product.id}
          style={[styles.productCard, {transform: [{scale: scaleValue}]}]}>
          <Pressable
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() =>
              setSelectedProduct(
                product.id === selectedProduct ? null : product.id,
              )
            }
            style={({pressed}) => [
              {backgroundColor: pressed ? '#e0e0e0' : 'white'},
              styles.pressable,
            ]}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </Pressable>

          {selectedProduct === product.id && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
            </View>
          )}
        </Animated.View>
      ))}
    </ScrollView>
  );
};

export default Tv;
