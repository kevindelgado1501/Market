import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import stylesRegister from '../styles/stylesRegister';

const Register = () => {
  return (
    <View style={stylesRegister.container}>
      <Text style={stylesRegister.title}>Register</Text>

      {/* Campo de entrada para el nombre */}
      <TextInput
        style={stylesRegister.input}
        placeholder="Name"
        placeholderTextColor="#999"
      />

      {/* Campo de entrada para el email */}
      <TextInput
        style={stylesRegister.input}
        placeholder="Email"
        placeholderTextColor="#999"
      />

      {/* Campo de entrada para la contraseña */}
      <TextInput
        style={stylesRegister.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {/* Campo de entrada para el numero de telefono */}
      <TextInput
        style={stylesRegister.input}
        placeholder="Phone Number"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {/* Campo de entrada para la dirección */}
      <TextInput
        style={stylesRegister.input}
        placeholder="Address"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {/* Campo de entrada para la dirección */}
      <TextInput
        style={stylesRegister.input}
        placeholder="Age"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {/* Botón de registro */}
      <Button
        title="Register"
        onPress={() => console.log('Login')}
        color={stylesRegister.button.backgroundColor} 
      />
    </View>
  );
};

export default Register;
