import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './ComponentsDM/Login';
import Register from './ComponentsDM/Register';
import Products from './ComponentsDM/Products';
import Tv from './ComponentsDM/Tv';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Tv" component={Tv} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

