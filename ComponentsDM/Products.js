import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import stylesProducts from '../styles/stylesProducts';

const Products = () => {
  const productList = [
    {
      id: 1,
      name: 'Product 1',

      price: '$10',
    },
    {
      id: 2,
      name: 'Product 2',

      price: '$20',
    },
    {
      id: 3,
      name: 'Product 3',

      price: '$30',
    },
    {
      id: 4,
      name: 'Product 4',

      price: '$40',
    },
    {
      id: 5,
      name: 'Product 5',

      price: '$50',
    },
    {
      id: 6,
      name: 'Product 6',

      price: '$60',
    },
    {
      id: 7,
      name: 'Product 7',

      price: '$70',
    },
    {
      id: 8,
      name: 'Product 8',

      price: '$80',
    },
    {
      id: 9,
      name: 'Product 9',

      price: '$90',
    },
    {
      id: 10,
      name: 'Product 10',

      price: '$100',
    },
  ];

  return (
    <ScrollView style={stylesProducts.container}>
      {productList.map(product => (
        <View key={product.id} style={stylesProducts.productContainer}>
          <Image source={product.image} style={stylesProducts.productImage} />
          <Text style={stylesProducts.productName}>{product.name}</Text>
          <Text style={stylesProducts.productPrice}>{product.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Products;