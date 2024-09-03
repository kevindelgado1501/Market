import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import stylesProduct from '../styles/stylesProducts';

const productList = [
  { id: 1, name: 'Portátil Hp Pavilion Ryzen7 16gb Color Azul Niebla', price: '$490,28', image: require('../image/product1.jpg') },
  { id: 2, name: 'Torre Gamer Ryzen 5, 16gb Ram', price: '$360,81', image: require('../image/product2.jpg') },
  { id: 3, name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB negro 8 GB RAM', price: '$157,01', image: require('../image/product3.jpg') },
  { id: 4, name: 'Televisor 40 Pulgadas Smart Android', price: '$200,73', image: require('../image/product4.jpg') },
  { id: 5, name: 'Consola Microsoft Xbox Standard Color Negro', price: '$547,76', image: require('../image/product5.jpg') },
  { id: 6, name: 'Set De Control Joystick Inalámbrico Nintendo Neón verde neón y rosa neón', price: '$70,82', image: require('../image/product6.jpg') },
  { id: 7, name: 'Sony PlayStation 5 2023 blanco', price: '$502.78', image: require('../image/product7.jpg') },
  { id: 8, name: 'Logitech G920, Volante Driving Force Para Pc / Xbox X|s One Color Negro', price: '$292,13', image: require('../image/product8.jpg') },
  { id: 9, name: 'FIFA 22 Standard Edition PS5 Físico', price: '$21,04', image: require('../image/product9.jpg') },
  { id: 10, name: 'Audífonos Gamer Vibration Maxell Hypershock Rgb Negro Receptor Usb', price: '$56,96', image: require('../image/product10.jpg') },
];

const ProductsList = () => (
  <ScrollView style={stylesProduct.container}>
    {productList.map(product => (
      <View key={product.id} style={stylesProduct.productContainer}>
        <Image source={product.image} style={stylesProduct.productImage} />
        <Text style={stylesProduct.productName}>{product.name}</Text>
        <Text style={stylesProduct.productPrice}>{product.price}</Text>
      </View>
    ))}
  </ScrollView>
);

// Rutas del BottomNavigation
const FavoritesRoute = () => <ProductsList />;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const Products = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'favorites', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album', unfocusedIcon: 'album-outline' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history', unfocusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'favorites':
        return <FavoritesRoute />;
      case 'albums':
        return <AlbumsRoute />;
      case 'recents':
        return <RecentsRoute />;
      case 'notifications':
        return <NotificationsRoute />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export default Products;
