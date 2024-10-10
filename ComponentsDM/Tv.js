import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../IU/styles/stylesTv';

const products = [
  {
    id: 1,
    name: 'Televisor Samsung Smart 50 Qled Q60d',
    price: '$521,53',
    image: require('../IU/image/ProductoTv1.png'),
    description: `Lo que tienes que saber de este producto:
Marca Samsung
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
    name: 'Televisor LG 43 Pulgadas 108 Cm Led Plano Smart Tv',
    price: '$640,07',
    image: require('../IU/image/ProductoTv2.png'),
    description: `Lo que tienes que saber de este producto:
Con pantalla táctil: No
Marca LG
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
    name: 'Televisor Smart 65 Crystal',
    price: '$561,73',
    image: require('../IU/image/ProductoTv3.png'),
    description: `Lo que tienes que saber de este producto:
Marca Samsung
Tamaño de la pantalla: 65"
Resolución: 4K
Smart Tv
Tipo de pantalla: UHD
Cuenta con 3 puertos HDMI.
Cuenta con conexión USB.`,
  },
  {
    id: 4,
    name: 'Televisor inteligente Tcl Led 55 4k Google TV',
    price: '$616,38',
    image: require('../IU/image/ProductoTv4.png'),
    description: `Lo que tienes que saber de este producto:
Marca TCL
Tamaño de la pantalla: 55"
Su resolución es 4K.
Tecnología HDR para una mejor calidad de imagen.
Modo de sonido: Dolby Digital.
Administre mediante comandos de voz.
Tiene una función para compartir pantalla.
Con Apple TV.
Asistente de Google incorporado.
Sistema operativo Android.
Conecta tus dispositivos a través de sus 3 puertos HDMI y su puerto USB.
Dimensiones: 126 mm de ancho, 711 mm de alto, 73 mm de profundidad.
Entretenimiento y conectividad en un solo dispositivo.`,
  },
  {
    id: 5,
    name: 'Televisor Smart 55 Neo Qled 8k Qn85d',
    price: '$1019,38',
    image: require('../IU/image/ProductoTv5.png'),
    description: `Lo que tienes que saber de este producto:
Marca Samsung
Tamaño de la pantalla: 55"
Bixby incorporado.
Cuenta con wi-fi y puerto de red.
Cuenta con 4 puertos HDMI.
Cuenta con conexión USB.
Con conectividad mediante Bluetooth.
Dimensiones: 1224.8mm de ancho, 705.3mm de alto y 17.8mm de profundidad.`,
  },
  {
    id: 6,
    name: 'Google Tv Hyundai Smart 43 Fhd',
    price: '$348,47',
    image: require('../IU/image/ProductoTv6.png'),
    description: `Lo que tienes que saber de este producto:
Marca Hyundai
Línea Marrón
Tamaño de la pantalla 43"
Resolución Full HD
Tipo de pantalla LED
Sistema operativo Google TV
Smart Comando De Voz
Smart Tv
Wi-Fi
Bluetooth
USB
HDMI`,
  },
  {
    id: 7,
    name: 'Televisor LG 55 pulgadasUhd Ai Thinq4k Smart Tv Negro',
    price: '$426,70',
    image: require('../IU/image/ProductoTv7.png'),
    description: `Lo que tienes que saber de este producto:
Marca LG
Tamaño de la pantalla: 55"
Su resolución es 4K.
Tecnología HDR para una calidad de imagen mejorada.
Modo de sonido: Dolby Digital.
Con YouTube.
Control LG Magic Remote no incluido.
Sistema operativo webOS.
Conecta tus dispositivos mediante sus 2 puertos HDMI y sus 2 puertos USB.
Dimensiones: 5.75cm de ancho, 71.5cm de alto, 123.5cm de profundidad.
Entretenimiento y conectividad en un mismo lugar.`,
  },
  {
    id: 8,
    name: 'Smart TV de 55" LG AI ThinQ pantalla LCD 4K',
    price: '$448,94',
    image: require('../IU/image/ProductoTv8.png'),
    description: `Lo que tienes que saber de este producto:
Marca LG
Tamaño de la pantalla: 55"
ThinQ AI incorporado.
Cuenta con wi-fi y puerto de red.
Cuenta con 3 puertos HDMI.
Cuenta con conexión USB.
Con conectividad mediante Bluetooth.
Incluye control remoto.
Dimensiones: 1235mm de ancho, 715mm de alto y 58.1mm de profundidad.`,
  },
  {
    id: 9,
    name: 'Smart Tv Led Hisense Fhd 43',
    price: '$222,10',
    image: require('../IU/image/ProductoTv9.png'),
    description: `Lo que tienes que saber de este producto:
Marca Hisense
Tamaño de la pantalla: 43"
Su resolución es Full HD.
Tecnología HDR para una calidad de imagen mejorada.
Cuenta con conexión HDMI y USB.
Entretenimiento y conectividad en un mismo lugar.`,
  },
  {
    id: 10,
    name: 'Amazon Fire Tv 75 Omni Qled 4k Smart Tv',
    price: '$2858,96',
    image: require('../IU/image/ProductoTv10.png'),
    description: `Lo que tienes que saber de este producto:
Marca Amazon
Tamaño de pantalla: 75"
Resolucion 4K
Smart Tv
Tipo de pantalla QLED
Con Bluetooth
USB
HDMI`,
  },
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
    <View style={styles.container}>

      <Text style={styles.welcomeTitle}>Welcome to the TV Page!</Text>

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

export default Tv;