import * as React from 'react';
import { View, Text, Image, ScrollView, Modal, Button } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import stylesProduct from '../IU/styles/stylesProducts'; 

const productList = [
  { id: 1, name: 'Portátil Hp Pavilion Ryzen7 16gb Color Azul Niebla', price: '$490,29', image: require('../IU/image/product1.jpg') },
  { id: 2, name: 'Torre Gamer Ryzen 5, 16gb Ram', price: '$360,81', image: require('../IU/image/product2.jpg') },
  { id: 3, name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB negro 8 GB RAM', price: '$157,01', image: require('../IU/image/product3.jpg') },
  { id: 4, name: 'Televisor 40 Pulgadas Smart Android', price: '$200,73', image: require('../IU/image/product4.jpg') },
  { id: 5, name: 'Consola Microsoft Xbox Standard Color Negro', price: '$547,76', image: require('../IU/image/product5.jpg') },
  { id: 6, name: 'Set De Control Joystick Inalámbrico Nintendo Neón verde neón y rosa neón', price: '$70,82', image: require('../IU/image/product6.jpg') },
  { id: 7, name: 'Sony PlayStation 5 2023 blanco', price: '$502.78', image: require('../IU/image/product7.jpg') },
  { id: 8, name: 'Logitech G920, Volante Driving Force Para Pc / Xbox X|s One Color Negro', price: '$292,13', image: require('../IU/image/product8.jpg') },
  { id: 9, name: 'FIFA 22 Standard Edition PS5 Físico', price: '$21,04', image: require('../IU/image/product9.jpg') },
  { id: 10, name: 'Audífonos Gamer Vibration Maxell Hypershock Rgb Negro Receptor Usb', price: '$56,96', image: require('../IU/image/product10.jpg') },
];

const ProductsList = () => (
  <ScrollView style={stylesProduct.container}>
    <Image source={require('../image/Bannerfree.jpg')} style={stylesProduct.bannerImage} />
    {productList.map(product => (
      <View key={product.id} style={stylesProduct.productContainer}>
        <Image source={product.image} style={stylesProduct.productImage} />
        <Text style={stylesProduct.productName}>{product.name}</Text>
        <Text style={stylesProduct.productPrice}>{product.price}</Text>
      </View>
    ))}
  </ScrollView>
);

const AlbumsModal = ({ visible, onClose }) => (
  <Modal
    visible={visible}
    animationType="slide"
    transparent
    onRequestClose={onClose}
  >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <View style={{ width: 300, backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Choose an option</Text>
        <Button title="Smartphones" onPress={() => {}} />
        <Button title="TV" onPress={() => {'Tv'}} />
        <Button title="Sound" onPress={() => {}} />
        <Button title="Laptops" onPress={() => {}} />
        <Button title="Games" onPress={() => {}} />
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

// BottomNavigation Routes
const FavoritesRoute = () => <ProductsList />;
const AlbumsRoute = ({ onOpenModal }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Categories" onPress={onOpenModal} />
  </View>
);
const RecentsRoute = () => <Text>Recents</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;

const Products = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'favorites', title: 'Sale', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'Categories', title: 'Categories', focusedIcon: 'Categories', unfocusedIcon: 'album-outline' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history', unfocusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'favorites':
        return <FavoritesRoute />;
      case 'Categories':
        return <AlbumsRoute onOpenModal={() => setModalVisible(true)} />;
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
      <AlbumsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default Products;
