import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus pantallas
import HomeScreen from './screens/HomeScreen';
import ComponentsScreen from './screens/ComponentsScreen';
import MappingScreen from './screens/MappingScreen';
import DataScreen from './screens/DataScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Components" component={ComponentsScreen} options={{ title: 'Componentes' }} />
        <Stack.Screen name="Mapping" component={MappingScreen} options={{ title: 'Mapeo' }} />
        <Stack.Screen name="Data" component={DataScreen} options={{ title: 'Datos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}