import * as React from 'react';
import { View, Text, Image, ScrollView, Modal, Button, TouchableOpacity } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import stylesProduct from '../IU/styles/stylesProducts';
import Support from './Support';
import ShoppingCart from './ShoppingCart';

const productList = [
  {
    id: 1,
    name: 'Portátil Acer Predator Helios Neo 16 32gb 2tb GeForce RTX 4050 Color Negro',
    priceOff: '$938,65',
    price: '$3128,84',
    image: require('../IU/image/ProductoLP10.png'),
    description: `Lo que tienes que saber de este producto:
Procesador Intel Core i7 13700HX
Resolución de la pantalla: 1920 px x 1080 px
Sistema operativo: Windows 11 Home
Capacidad de disco SSD: 2 TB
Memoria RAM: 32 GB
Resolución de 1920x1080 px.
Tarjeta gráfica GeForce RTX 4050`,
},
{
    id: 2,
    name: 'Audífonos Inalámbricos M10 Tws Color Negro',
    priceOff: '$4,44',
    price: '$14,80',
    image: require('../IU/image/ProductoSD8.png'),
    description: `Lo que tienes que saber de este producto:
Es monoaural.
Cuenta con tecnología True Wireless.
Con cancelación de ruido.
Con estuche de carga inalámbrica.
Con micrófono incorporado.
Resistente al agua.
Cómodo y práctico.`,
  },
  { id: 3, 
    name: 'Xiaomi Redmi Note 13 4G Dual SIM 256 GB negro 8 GB RAM', 
    priceOff: '$218,31',
    price: '$65,49', 
    image: require('../IU/image/product3.jpg'), 
    description: `Lo que tienes que saber de este producto:
Dispositivo liberado para que elijas la compañía telefónica que prefieras.
Pantalla de 6.67".
Cámara delantera de 16Mpx.
Batería de 5000mAh.
Memoria interna de 256GB.
Resistente a las salpicaduras.
Con reconocimiento facial y sensor de huella dactilar.
Resistente al polvo.` 
},
  { id: 4, 
    name: 'Televisor 40 Pulgadas Smart Android', 
    priceOff: '$60,22',
    price: '$200,73',
    image: require('../IU/image/product4.jpg'), 
    description: `Lo que tienes que saber de este producto:
Tamaño de la pantalla: 40 "
Cuenta con wif-fi.
Cuenta con conexión HDMI.
Cuenta con conexión USB.
Con conectividad mediante Bluetooth.
Dimensiones: 89.1cm de ancho, 52.1cm de alto y 8.5cm de profundidad.`
  },
  { id: 5, 
    name: 'Consola Microsoft Xbox Standard Color Negro', 
    priceOff: '$164,33',
    price: '$547,76', 
    image: require('../IU/image/product5.jpg'), 
    description: `Lo que tienes que saber de este producto:
Capacidad: 1 TB
Incluye control.
Resolución de 7680px x 4320px.
Memoria RAM de 16GB.
Cuenta con: 1 cable hdmi.
La duración de la batería de los controles depende del uso que se le dé al producto.`
  },
  { id: 6, 
    name: 'Set De Control Joystick Inalámbrico Nintendo Neón verde neón y rosa neón', 
    priceOff: '$21,25',
    price: '$70,82', 
    image: require('../IU/image/product6.jpg'), 
    description: `Lo que tienes que saber de este producto:
Cuenta con Bluetooth.
Mando inalámbrico.
Compatible con: Nintendo Switch.
Con sistema de vibración incorporado.
Cuenta con 2 correas.
Diversión garantizada con tu joystick Nintendo Switch.
Diseño ergonómico.`
  },
  { id: 7, 
    name: 'Sony PlayStation 5 2023 blanco', 
    priceOff: '$150,83',
    price: '$502.78', 
    image: require('../IU/image/product7.jpg'), 
    description: `Lo que tienes que saber de este producto:
Capacidad: 1 TB
 Incluye 2 controles.
Cuenta con: 2 controles.
La duración de la batería depende del uso que se le dé al producto.`
  },
  { id: 8, 
    name: 'Logitech G920, Volante Driving Force Para Pc / Xbox X|s One Color Negro', 
    priceOff: '$87,64',
    price: '$292,13', 
    image: require('../IU/image/product8.png'), 
    description: `Lo que tienes que saber de este producto:
Conectividad USB.
Compatible con PC.
Volante de aluminio anodizado.
Incluye pedales.` 
  },
  { id: 9, 
    name: 'FIFA 22 Standard Edition PS5 Físico', 
    priceOff: '$6,31',
    price: '$21,04', 
    image: require('../IU/image/product9.jpg'), 
    description: `Lo que tienes que saber de este producto:
Formato: Físico
Clasificación E.
Año de lanzamiento: 2021.
Desarrollado por Electronic Arts.
Género: deportes.
Tamaño del archivo: 50 GB.
La memoria RAM mínima que necesitas para reproducir tu juego es de 20 GB.
Es apto para múltiples jugadores.` 
  },
  { id: 10, 
    name: 'Audífonos Gamer Vibration Maxell Hypershock Rgb Negro Receptor Usb', 
    priceOff: '$17,09',
    price: '$56,96', 
    image: require('../IU/image/product10.jpg'), 
    description: `Lo que tienes que saber de este producto:
Modo manos libres incluido.
Micrófono flexible incorporado.
El largo del cable es de 2.2m.
Uso apto para profesional.
Cómodos y prácticos.
Tamaño del altavoz: 50mm.` 
  },
];

const categories = [
  
  { title: 'Smartphones', image: require('../IU/image/smartphoneLogo.png'), key: 'Smartphones', description: 'Latest smartphones available' },
  { title: 'Laptops', image: require('../IU/image/laptopLogo.png'), key: 'Laptop', description: 'Laptops and accessories' },
  { title: 'Sound', image: require('../IU/image/soundLogo.png'), key: 'Sounds', description: 'High-quality sound systems' },
  { title: 'Tv', image: require('../IU/image/tvLogo.png'), key: 'Tv', description: 'Smart TVs and accessories' },
];
const ProductsList = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductPress = (productId) => {
    setSelectedProduct(productId === selectedProduct ? null : productId);
  };

  return (
    <ScrollView style={stylesProduct.container}>
      <Image source={require('../IU/image/Bannerfree.jpg')} style={stylesProduct.bannerImage} />

      {productList.map(product => (
  <View key={product.id} style={stylesProduct.productContainer}>
    <TouchableOpacity onPress={() => handleProductPress(product.id)}>
      <Image source={product.image} style={stylesProduct.productImage} />
      <Text style={stylesProduct.productName}>{product.name}</Text>

      <View style={stylesProduct.priceContainer}>  
        <Text style={stylesProduct.productPriceOFF}>{product.priceOff}</Text>
        <Text style={stylesProduct.productPrice}>{product.price}</Text>
      </View>
    </TouchableOpacity>

    {selectedProduct === product.id && (
      <View style={stylesProduct.descriptionContainer}>
        <Text style={stylesProduct.productDescription}>{product.description}</Text>
      </View>
    )}
  </View>
))}

    </ScrollView>
  );
};


const AlbumsModal = ({ visible, onClose, navigation }) => (
  <Modal
    visible={visible}
    animationType="slide"
    transparent
    onRequestClose={onClose}
  >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <View style={{ width: '90%', height: '62%', backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.key}
              onPress={() => {
                onClose();
                navigation.navigate(category.key);
              }}
              style={{ width: '50%', marginBottom: 10, alignItems: 'center' }}
            >
              <Image source={category.image} style={{ width: 150, height: 120, marginBottom: 5 }} />
              <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>{category.title}</Text>
              <Text style={{ color: 'grey', fontSize: 12, textAlign: 'center' }}>{category.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);



const FavoritesRoute = () => <ProductsList />;
const AlbumsRoute = ({ onOpenModal, navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Click to see all the categories" onPress={onOpenModal} />
  </View>
);




const Products = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [routes] = React.useState([
    { key: 'favorites', title: 'Products', icon: require('../IU/image/MainImage.png') },
    { key: 'Categories', title: 'Categories', icon: require('../IU/image/CategoriesImage.png') },
    { key: 'ShoppingCart', title: 'Shopping Car', icon: require('../IU/image/ShoppingCarImage.png') },
    { key: 'Support', title: 'Support', icon: require('../IU/image/PerfilImage.png') },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'favorites':
        return <FavoritesRoute onOpenModal={() => setModalVisible(true)} navigation={navigation} />;
      case 'Categories':
        return <AlbumsRoute onOpenModal={() => setModalVisible(true)} navigation={navigation} />;
      case 'ShoppingCart':
        return <ShoppingCart />;
      case 'Support':
        return <Support />;
      default:
        return null;
    }
  };

  const renderIcon = ({ route, focused }) => (
    <Image
      source={route.icon}
      style={{ width: 24, height: 24, tintColor: focused ? '#6200ee' : '#222' }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
      />
      <AlbumsModal visible={modalVisible} onClose={() => setModalVisible(false)} navigation={navigation} />
    </View>
  );
};

export default Products;
