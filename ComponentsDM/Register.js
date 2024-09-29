import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesRegister from '../IU/styles/stylesRegister';

const Register = () => {
  const navigation = useNavigation(); 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  const validateRegister = () => {
    if (name.length < 4 || name.length > 10) {
      Alert.alert('Invalid Name', 'Username must be between 4 and 10 characters.');
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{1,8}$/;

    if (!password.match(passwordRegex)) {
      Alert.alert(
        'Invalid Password',
        'Password must be up to 8 characters long, contain at least one uppercase letter, one special character, letters, and numbers.'
      );

      if (!email.includes('@')) {
    Alert.alert('Invalid Email', 'Email must contain @.');
    return false;
  }
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (validateRegister()) {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={stylesRegister.container}>
      <Text style={stylesRegister.title}>Register</Text>

      <TextInput
        style={stylesRegister.input}
        placeholder="Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={stylesRegister.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

    <TextInput
        style={stylesRegister.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />



      <TextInput
        style={stylesRegister.input}
        placeholder="Phone Number"
        placeholderTextColor="#999"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TextInput
        style={stylesRegister.input}
        placeholder="Address"
        placeholderTextColor="#999"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={stylesRegister.input}
        placeholder="Age"
        placeholderTextColor="#999"
        keyboardType='numeric'
        value={age}
        onChangeText={setAge}
      />

      <Button
        title="Register"
        onPress={handleRegister} 
        color={stylesRegister.button.backgroundColor} 
      />
    </View>
  );
};

export default Register;