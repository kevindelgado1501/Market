import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../IU/styles/stylesLaptop';

const products = [
  {
    id: 1,
    name: 'Portátil Asus Core i5 20GB 512GB AzulX',
    price: '$481,37',
    image: require('../IU/image/laptopLogo.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i5 1235U
Sistema operativo: FreeDOS
Capacidad de disco SSD: 512 GB
Memoria RAM: 20 GB
Resolución de 1920x1080 px.
Tarjeta gráfica: Gráficos Intel® Iris® X.
Conexión: WiFi y Bluetooth.
Cuenta con 4 puertos USB y puerto HDMI.
Posee pad numérico.
Modo de sonido: Stereo.`,
  },
  {
    id: 2,
    name: 'Portátil HP 15 Intel Core i3 8GB 512GB',
    price: '$373,06',
    image: require('../IU/image/ProductoLP2.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i3 N305
Sistema operativo: Windows 11 HOME CORE SL
Capacidad de disco SSD: 512 GB
Capacidad del disco duro: 0 GB
Procesador Intel Core i3.
Memoria RAM de 8GB.
Pantalla LED de 1.47".
Resolución de 1920x1080 px.
Es antirreflejo.
Tarjeta gráfica Intel UHD Graphics.
Conexión wifi y bluetooth.
Cuenta con 3 puertos USB y puerto HDMI.
Con ion de litio.
Posee pad numérico.
Modo de sonido Dos altavoces.`,
  },
  {
    id: 3,
    name: 'Laptop Gamer Hp Victus 16 Ram 8 Gb Full Hd Azul',
    price: '$625,58',
    image: require('../IU/image/ProductoLP3.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i5 Intel® Core™ i5-11400H
Sistema operativo: Windows 11 Home
Capacidad de disco SSD: 512 GB
Capacidad del disco duro: 512 GB
Memoria RAM: 8 GB
Resolución de 1920x1080 px.
Tarjeta gráfica GPU NVIDIA GeForce GTX 1650 para laptop.
Conexión wifi y bluetooth.
Cuenta con 3 puertos USB y puerto HDMI.
Incluye lector de tarjeta de memoria.
Posee pad numérico.
Modo de sonido Stereo.`,
  },
  {
    id: 4,
    name: 'Portátil Asus Core i5 20GB 512GB AzulX',
    price: '$428,20',
    image: require('../IU/image/ProductoLP4.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1366 px x 768 px
Procesador: Intel Core i5 1235U
Sistema operativo: FreeDOS
Capacidad de disco SSD: 512 GB
Memoria RAM: 20 GB
Resolución de 1366x768 px.
Tarjeta gráfica Intel Iris X.
Conexión wifi y bluetooth.
Cuenta con 3 puertos USB y puerto HDMI.
Incluye lector de tarjeta de memoria.
Modo de sonido Stereo.`,
  },
  {
    id: 5,
    name: 'Portátil HP 15 Ryzen 5 512GB SSD FreeDOS',
    price: '$377,66',
    image: require('../IU/image/ProductoLP5.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1366 px x 768 px
Procesador: AMD Ryzen 5 5500U
Sistema operativo: Windows 10 Home
Capacidad de disco SSD: 512 GB
Memoria RAM: 12 GB
Resolución de 1366x768 px.
Tarjeta gráfica AMD Radeon.
Cuenta con 3 puertos USB y puerto HDMI.
Incluye lector de tarjeta de memoria.
Posee pad numérico.`,
  },
  {
    id: 6,
    name: 'Acer Aspire 5 Core I5 512gb Color Silver',
    price: '$464,38',
    image: require('../IU/image/ProductoLP6.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i5 12450H
Sistema operativo: Windows 11 Home
Capacidad de disco SSD: 512 GB
Capacidad del disco duro: 0 TB
Procesador Intel Core i5.
Memoria RAM de 16GB.
Pantalla LCD de 15.6".
Resolución de 1920x1080 px.
Es antirreflejo.
Tarjeta gráfica Intel UHD Graphics.
Conexión wifi y bluetooth.
Cuenta con 4 puertos USB y puerto HDMI.
Modo de sonido Stereo.`,
  },
  {
    id: 7,
    name: 'Portatil Asus Intel Core I9 2tb + Ram 40gb Led 16',
    price: '$1167,36',
    image: require('../IU/image/ProductoLP7.png'),
    description: `Lo que tienes que saber de este producto:
Color: indie black
Marca: asus
Modelo: x1605va-mb575
Procesador: intel core i9-13900h
Cantidad de nucleos: 14
Cantidad de subprocesos: 20
Velocidad maxima: hasta 5.40ghz
Graficos: intel iris xe graphics
Tipo de almacenamiento de disco: ssd 2tb nvme gen3 pci-e
Capacidad de memoria ram: 40gb ddr4 3200mhz
Pantalla: 16,0" full hd (1920 x 1200) antirreflejo, borde estrecho.
Teclado: en español con teclado numerico
Camara: hd con microfono de matriz digital
`,
  },
  {
    id: 8,
    name: 'Portatil Asus Tuf Core I7 16gbd Rtx3050 Color Negro',
    price: '$962,55',
    image: require('../IU/image/ProductoLP8.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: FHD
Procesador: Intel Core i7-11800H 11800H
Sistema operativo: FreeDOS Endless
Capacidad de disco SSD: 512 GB
Memoria RAM: 16 GB
Resolución de FHD.
Tarjeta gráfica NVIDIA® GeForce RTX™ 3050 Laptop GPU. `,
  },
  {
    id: 9,
    name: 'Portátil Acer Nitro R7 16gb/1tb RTX3050 Color Negro',
    price: '$2166,05',
    image: require('../IU/image/ProductoLP9.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i5 1235U
Sistema operativo: FreeDOS
Capacidad de disco SSD: 512 GB
Memoria RAM: 20 GB
Resolución de 1920x1080 px.
Tarjeta gráfica: Gráficos Intel® Iris® X.
Conexión: WiFi y Bluetooth.
Cuenta con 4 puertos USB y puerto HDMI.
Posee pad numérico.
Modo de sonido: Stereo.`,
  },
  {
    id: 10,
    name: 'Portátil Acer Predator Helios Neo 16 32gb 2tb GeForce RTX 4050 Color Negro',
    price: '$3128,84',
    image: require('../IU/image/ProductoLP10.png'),
    description: `Lo que tienes que saber de este producto:
Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i7 13700HX
Sistema operativo: Windows 11 Home
Capacidad de disco SSD: 2 TB
Memoria RAM: 32 GB
Resolución de 1920x1080 px.
Tarjeta gráfica GeForce RTX 4050`,
  },
];

const Laptop = () => {
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

      <Text style={styles.welcomeTitle}>Welcome to the laptop Page!</Text>

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

export default Laptop;
