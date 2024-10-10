import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../IU/styles/stylesSmartphones'; 

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S23 Ultra 5G Dual SIM 256 GB phantom black 12 GB RAM',
    price: '$812,96',
    image: require('../IU/image/ProductoSM1.png'),
    description: `Lo que tienes que saber de este producto:
Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.
Compatible con redes 5G.
Pantalla AMOLED de 6.8".
Tiene 4 cámaras traseras de 200Mpx/10Mpx/12Mpx/10Mpx.
Cámaras delanteras de 12mp.
Procesador Snapdragon 8 Gen 2 Octa-Core de 3.36GHz con 12GB de RAM.
Batería de 5000mAh con carga inalámbrica.
Memoria interna de 256GB.
A prueba de agua.
Con reconocimiento facial y sensor de huella dactilar.
Resistente al polvo y a las caídas.
Tarjeta eSIM incluida en tu dispositivo.`,
  },
  {
    id: 2,
    name: 'Celular Poco F5 Pro Black 12gb Ram 256gb',
    price: '$660,26',
    image: require('../IU/image/ProductoSM2.png'),
    description: `Lo que tienes que saber de este producto:
Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.
Compatible con redes 5G.
Pantalla de 6.67".
Batería de 5000mAh.
Memoria interna de 256GB.`,
  },
  {
    id: 3,
    name: 'Apple iPhone 16 128 GB - Negro',
    price: '$1026,00',
    image: require('../IU/image/ProductoSM3.png'),
    description: `Lo que tienes que saber de este producto:
Memoria RAM: 8 GB
Diseñado para Apple Intelligence.
Control de la cámara.
Capturas más amplias y detalladas.
Estilos fotográficos.
Chip A18 superbrillante.
Mayor duración de la batería.
Diseñado para durar.
Personaliza tu iPhone.
Funcionalidades esenciales de seguridad.`,
  },
  {
    id: 4,
    name: 'Xiaomi Redmi Note 13 Pro 4G Dual SIM 256 GB negro',
    price: '$240,35',
    image: require('../IU/image/ProductoSM4.png'),
    description: `Lo que tienes que saber de este producto:
CDispositivo desbloqueado para que elijas la compañía telefónica que prefieras.
Pantalla AMOLED de 6 in.
Tiene 3 cámaras traseras de 200Mpx/8Mpx/2Mpx.
Cámara delantera de 16Mpx.
Procesador MediaTek Helio G99-Ultra Octa-Core de 2.2GHz con 8GB de RAM.
Batería de 5000mAh.
Memoria interna de 256GB.
Resistente a las salpicaduras.
Con reconocimiento facial y sensor de huella dactilar.
Resistente al polvo y a las caídas.`,
  },
  {
    id: 5,
    name: 'Zte Blade V50 Vita 4+256gb Negro',
    price: '$132,71',
    image: require('../IU/image/ProductoSM5.png'),
    description: `Lo que tienes que saber de este producto:
Marca ZTE
Línea Blade
Modelo V50 VITA
Red móvil 4G/LTE
Memoria interna 256 GB
Memoria RAM 4 GB
Dual SIM `,
  },
  {
    id: 6,
    name: 'Celular Kalley Black 3 256gb Negro',
    price: '$108,36',
    image: require('../IU/image/ProductoSM6.png'),
    description: `Lo que tienes que saber de este producto:
Memoria RAM: 8 GB
Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.
Batería de 5000mAh.
Memoria interna de 256GB.`,
  },
  {
    id: 7,
    name: 'Portatil Asus Intel Core I9 2tb + Ram 40gb Led 16',
    price: '$80,61',
    image: require('../IU/image/ProductoSM7.png'),
    description: `Lo que tienes que saber de este producto:
Marca TCL
Modelo 40 SE
Dual SIM
Memoria interna 128 GB
Memoria RAM 6 GB
Red móvil 4G/LTE`,
  },
  {
    id: 8,
    name: 'Samsung Galaxy Z Flip 6 256 GB 12 GB de RAM Dual Sim, Galaxy Ai gris',
    price: '$962,21',
    image: require('../IU/image/ProductoSM8.png'),
    description: `Lo que tienes que saber de este producto:
Memoria RAM: 12 GB
Dispositivo desbloqueado para que elijas tu compañía telefónica preferida.
Compatible con redes 5G.
Pantalla plegable con una extensión total de 6.7 pulgadas y una resolución de 2640 px x 1080 px.
Cuenta con 2 cámaras traseras de 50Mpx/12Mpx.
Cámaras frontales de 10 Mpx.
Procesador Qualcomm Snapdragon 8 Gen 3 Octa-Core de 3,36 GHz con 12 GB de RAM.
Batería de 4000 mAh con carga inalámbrica.
Memoria interna de 256 GB.
Con reconocimiento facial y sensor de huellas dactilares.
Pantalla secundaria de 3,4".
Tarjeta eSIM incluida.`,
  },
  {
    id: 9,
    name: 'Apple iPhone 12 Pro Max 256 Gb - Azul Pacífico',
    price: '$1087,75',
    image: require('../IU/image/ProductoSM9.png'),
    description: `Lo que tienes que saber de este producto:
Tamaño de la pantalla: 6.7 
Memoria interna: 128 GB 
Cámara trasera principal: 12 Mpx 
NFC: Sí 
Cámara frontal principal: 12 Mpx 
Desbloqueo: Reconocimiento facial  huella dactilar`,
  },
  {
    id: 10,
    name: 'Samsung Galaxy A15 4G Dual SIM 256 GB azul oscuro 8 GB RAM',
    price: '$244,63',
    image: require('../IU/image/ProductoSM10.png'),
    description: `Lo que tienes que saber de este producto:
Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras.
Pantalla AMOLED de 6.5".
Tiene 3 cámaras traseras de 50Mpx/5Mpx/2Mpx.
Cámaras delanteras de 13.0 MP.
Batería de 5000mAh.
Memoria interna de 256GB.
Con reconocimiento facial y sensor de huella dactilar.`,
  },
];

const Smartphones = () => {
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
    <View style={styles.container}>
      
      <Text style={styles.welcomeTitle}>Welcome to the smartphones Page!</Text>

      <ScrollView>
        {products.map(product => (
          <Animated.View
            key={product.id}
            style={[styles.productCard, { transform: [{ scale: scaleValue }] }]}>
            <Pressable
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() =>
                setSelectedProduct(
                  product.id === selectedProduct ? null : product.id,
                )
              }
              style={({ pressed }) => [
                { backgroundColor: pressed ? '#e0e0e0' : 'white' },
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
    </View>
  );
};

export default Smartphones;
