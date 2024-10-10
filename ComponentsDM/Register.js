import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, Modal, Pressable } from 'react-native';
import stylesRegister from '../IU/styles/stylesRegister';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState('');
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  const departmentsAndCities = {
    'Antioquia': ['Medellín', 'Envigado', 'Bello', 'Itagüí', 'Rionegro'],
    'Cundinamarca': ['Bogotá', 'Soacha', 'Chía', 'Girardot', 'Zipaquirá'],
    'Valle del Cauca': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Buga'],
    'Santander': ['Bucaramanga', 'Floridablanca', 'Piedecuesta', 'Barrancabermeja', 'Girón'],
    'Atlántico': ['Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Galana'],
  };

  const handleRegister = () => {
    if (!name.match(/^[A-Za-z\s]+$/)) {
      Alert.alert('Error', 'Name can only contain letters');
      return;
    }

    if (!name || !email || !phone || !password || !department || !city || !dob) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Invalid email format');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Error', 'Phone number must be 10 digits');
      return;
    }

    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dobRegex.test(dob)) {
      Alert.alert('Error', 'Date of birth must be in DD/MM/YYYY format');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return;
    }

    Alert.alert('Success', 'User registered successfully', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <View style={stylesRegister.container}>
      <Text style={stylesRegister.bannerText}>WELCOME TO OUR REGISTER PAGE</Text>
      <Text style={stylesRegister.simpleText}>please fill all the fields to see our products</Text>

      <TextInput
        style={stylesRegister.input}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesRegister.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={stylesRegister.input}
        placeholder="Phone"
        placeholderTextColor="black"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />
      <TextInput
        style={stylesRegister.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={() => setShowDepartmentModal(true)} style={stylesRegister.input}>
        <Text style={stylesRegister.pressableText}>{department || "Select Department"}</Text>
      </Pressable>
      <Modal visible={showDepartmentModal} animationType="slide">
        <View style={stylesRegister.modalContainer}>
          <Text style={stylesRegister.modalTitle}>Select Department</Text>
          {Object.keys(departmentsAndCities).map((dept) => (
            <Pressable key={dept} onPress={() => {
              setDepartment(dept);
              setCity('');
              setShowDepartmentModal(false);
            }}>
              <Text style={stylesRegister.modalItem}>{dept}</Text>
            </Pressable>
          ))
          }
          <Button title="Close" onPress={() => setShowDepartmentModal(false)} />
        </View>
      </Modal>

      <Pressable onPress={() => setShowCityModal(true)} style={stylesRegister.input} disabled={!department}>
        <Text style={stylesRegister.pressableText}>{city || "Select City"}</Text>
      </Pressable>
      <Modal visible={showCityModal} animationType="slide">
        <View style={stylesRegister.modalContainer}>
          <Text style={stylesRegister.modalTitle}>Select City</Text>
          {department &&
            departmentsAndCities[department].map((cityName) => (
              <Pressable key={cityName} onPress={() => {
                setCity(cityName);
                setShowCityModal(false);
              }}>

                <Text style={stylesRegister.modalItem}>{cityName}</Text>
              </Pressable>

            ))}


          <Button title="Close" onPress={() => setShowCityModal(false)} />
        </View>
      </Modal>

      <TextInput
        style={stylesRegister.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        placeholderTextColor="black"
        value={dob}
        onChangeText={setDob}
      />


      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;
