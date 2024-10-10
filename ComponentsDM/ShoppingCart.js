import React, { useReducer } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import stylesShoppingCart from '../IU/styles/stylesShoppingCart';
import { useNavigation } from '@react-navigation/native';

const initialState = [
  { id: '1', name: 'Product 1', price: 10.70 },
  { id: '2', name: 'Product 2', price: 15.26 },
  { id: '3', name: 'Product 3', price: 20.00 },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const ShoppingCart = () => {

  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert('Proceeding to checkout');
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addItem = () => {
    const newItem = {
      id: `${cartItems.length + 1}`,
      name: `Product ${cartItems.length + 1}`,
      price: Math.random() * (70.00 - 5.00) + 5.00
    };

    dispatch({ type: 'ADD_ITEM', item: newItem });
  };


  return (
    <View style={stylesShoppingCart.container}>
      <Text style={stylesShoppingCart.title}>Shopping Cart</Text>
      {cartItems.length === 0 ? (
        <Text >Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={stylesShoppingCart.itemContainer}>
              <Text style={stylesShoppingCart.itemName}>{item.name}</Text>
              <Text style={stylesShoppingCart.itemPrice}>${item.price.toFixed(2)}</Text>
              <Button title="Remove" onPress={() => removeItem(item.id)} />
            </View>
          )}
        />
      )}
      <Text style={stylesShoppingCart.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button title="Add Item" onPress={addItem} />
      <Button title="Checkout" onPress={handleCheckout} />
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

export default ShoppingCart;