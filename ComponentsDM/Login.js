import React from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import stylesLogin from '../styles/stylesLogin';

const Login = () => {
  const navigation = useNavigation(); 

  return (
    <View style={stylesLogin.container}>
      <Image
        source={require('../image/imagenLogo.jpg')}
        style={stylesLogin.logo}
      />

      {/* Título de la pantalla */}
      <Text style={stylesLogin.title}>Login</Text>

      {/* Campo de entrada para el nombre de usuario */}
      <TextInput
        style={stylesLogin.input}
        placeholder="User"
        placeholderTextColor="#999"
      />

      {/* Campo de entrada para la contraseña */}
      <TextInput
        style={stylesLogin.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {/* Botón de inicio de sesión */}
      <Button
        title="Sign In"
        onPress={() => console.log('Products')}
        color="#3498db"
      />

      {/* Botón de registro */}
      <Button
      style={stylesLogin.button}
        title="Register"
        onPress={() => navigation.navigate('Register')} 
        color="#3498db"
      />
    </View>
  );
};

export default Login;
