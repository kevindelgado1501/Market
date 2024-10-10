import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../IU/styles/stylesSounds'; 

const products = [
  {
    id: 1,
    name: 'Altavoz Ambiental Pasivo Beta3 Negro S400',
    price: '$103,05',
    image: require('../IU/image/ProductoSD1.png'),
    description: `Lo que tienes que saber de este producto:
Marca Beta Three
Modelo S400
Consumo energético 320 W
Tipos de alimentación Corriente eléctrica
Color negro`,
  },
  {
    id: 2,
    name: 'Parlantes Pc Gamer Hp Dhe-6005',
    price: '$30,47',
    image: require('../IU/image/ProductoSD2.png'),
    description: `Lo que tienes que saber de este producto:
Tipo de parlante: tweeter.
Tiene luces led.
Potencia de 6W.
Conector de entrada: Miniplug.
Cantidad de parlantes: 2.
Lugar de colocación: el piso.
Dimensiones: 78mm de ancho, 175mm de alto y 99mm de profundidad.`,
  },
  {
    id: 3,
    name: 'Parlante Gamer Maxell',
    price: '$15,86',
    image: require('../IU/image/ProductoSD3.png'),
    description: `Lo que tienes que saber de este producto:

    Tipos de parlante: Gamerestereo
    No Bluetooth
    Con luces LED
    Color:Negro`,
  },
  {
    id: 4,
    name: 'Apple AirPods Max - Rosa 1.1 compatible Windows, iOS, Android',
    price: '$571,98',
    image: require('../IU/image/ProductoSD4.png'),
    description: `Lo que tienes que saber de este producto:
Inalámbrico
Es resistente al agua: No
Duración de la batería: 20 h
Cancelación de ruido
Microfono incorporado`,
  },
  {
    id: 5,
    name: 'Auriculares Gamer Maxell Force Color Negro',
    price: '$36,18',
    image: require('../IU/image/ProductoSD5.png'),
    description: `Lo que tienes que saber de este producto:
Modo manos libres incluido.
Micrófono flexible incorporado.
El largo del cable es de 2.2m.
Uso apto para profesional.
Cómodos y prácticos.
Tamaño del altavoz: 50mm.`,
  },
  {
    id: 6,
    name: 'Jbl Speaker Partybox 110 Color Black',
    price: '$482,66',
    image: require('../IU/image/ProductoSD6.png'),
    description: `Lo que tienes que saber de este producto:
Apto para uso en exteriores.
Es a prueba de agua.
Con conectividad bluetooth.
Tiene luces led.
Función de karaoke incorporada.
Batería recargable y cargador incluido.
Potencia de 160W.
Conector de entrada: Miniplug.
Lugar de colocación: el piso.
Dimensiones: 295mm de ancho, 568mm de alto y 300mm de profundidad.
Ideal para escuchar tu música preferida.`,
  },
  {
    id: 7,
    name: 'Altavoces Bluetooth Tronsmart Bang Color Negro',
    price: '$103,54',
    image: require('../IU/image/ProductoSD7.png'),
    description: `Lo que tienes que saber de este producto:
Apto para uso en exteriores.
Es a prueba de agua.
Con conectividad bluetooth.
Tiene luces led.
Batería recargable.
Potencia de 60W.
Conector de entrada: Lector SD.
Dimensiones: 361mm de ancho, 183.4mm de alto y 150.3mm de profundidad.
Cuenta con micrófono interno.
`,
  },
  {
    id: 8,
    name: 'Audífonos Inalámbricos M10 Tws Color Negro',
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
  {
    id: 9,
    name: 'Reproductor Mp3 Sony Nw-a306 32gb',
    price: '$244,94',
    image: require('../IU/image/ProductoSD9.png'),
    description: `Lo que tienes que saber de este producto:
Capacidad de almacenamiento de datos: 32 GB
36 horas de reproducción
Conexion USB
Reproductor de musica con formato mp3`,
  },
  {
    id: 10,
    name: 'Audífonos KZ ZSN Pro con mic - Color Azul',
    price: '$19,52',
    image: require('../IU/image/ProductoSD10.png'),
    description: `Resolución de la pantalla: 1920 px x 1080 px
Procesador: Intel Core i7 13700HX
Sistema operativo: Windows 11 Home
Uso apto para profesional.
Cómodos y prácticos.
Tamaño del altavoz: 10mm.
Cancelación de ruido.
Micrófono flexible incorporado.
Resistentes al polvo.
Modo manos libres incluido.`,},
];

const Sounds = () => {
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
      
      <Text style={styles.welcomeTitle}>Welcome to the sounds Page!</Text>

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

export default Sounds;
