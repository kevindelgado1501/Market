import React from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Welcome to Market Express' App</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../image/imagenLogo.jpg')}
          style={styles.logo}
        />

        {/* Título de la pantalla */}
        <Text style={styles.title}>Login</Text>

        {/* Campo de entrada para el nombre de usuario */}
        <TextInput
          style={styles.input}
          placeholder="User"
          placeholderTextColor="#999"
        />

        {/* Campo de entrada para la contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />

        {/* Botón de inicio de sesión */}
        <View style={styles.buttonContainer}>
          <Button
            title="Sign In"
            onPress={() => navigation.navigate('Products')}
            color="#3498db"
          />
        </View>

        {/* Botón de registro */}
        <View style={styles.buttonContainer}>
          <Button
            title="Register"
            onPress={() => navigation.navigate('Register')}
            color="#3498db"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
    zIndex: 1, // Ensure the banner is above other content
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 60, // Adjust based on banner height to ensure content is not hidden
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10, // Espacio entre botones
  },
});

export default Login;
