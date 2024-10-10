import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../IU/styles/stylesLogin';


const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    if (username.length < 4 || username.length > 10) {
      Alert.alert('Invalid Username', 'Username must be between 4 and 10 characters.');
      return false;
    }


    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{1,8}$/;

    if (!password.match(passwordRegex)) {
      Alert.alert('Invalid Password', 'Password must be up to 8 characters long, contain one uppercase letter, one special character, and numbers.');
      return false;
    }

    return true;
  };

  const handleSignIn = () => {
    if (validateLogin()) {

      navigation.navigate('Products');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Welcome to Market Express' App</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../IU/image/imagenLogo.jpg')}
          style={styles.logo}
        />

        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="User"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Sign In"
            onPress={handleSignIn}
            color="#3498db"
          />
        </View>

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


export default Login;
