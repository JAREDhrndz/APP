import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const componentBg = require('./images/circuit.jpg');
const dataBg = require('./images/code.jpg');
const mappingBg = require('./images/map.jpg');

const HomeScreen = ({ navigation }) => {
  const [showTeam, setShowTeam] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleTeam = () => {
    Animated.timing(animation, {
      toValue: showTeam ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false
    }).start();
    setShowTeam(!showTeam);
  };

  const teamHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 110]
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARRITO SEGUIDOR</Text>
      
      {/* Botón de Componentes con imagen */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
      >
        <ImageBackground 
          source={componentBg} 
          style={styles.buttonImage}
          imageStyle={styles.buttonImageStyle}
        >
          <Text style={styles.buttonText}>COMPONENTES</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Botón de Datos con imagen */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Data')}
      >
        <ImageBackground 
          source={dataBg} 
          style={styles.buttonImage}
          imageStyle={styles.buttonImageStyle}
        >
          <Text style={styles.buttonText}>DATOS SENSORES</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Botón de Mapeo con imagen */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Mapping')}
      >
        <ImageBackground 
          source={mappingBg} 
          style={styles.buttonImage}
          imageStyle={styles.buttonImageStyle}
        >
          <Text style={styles.buttonText}>MAPEO</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Sección del equipo con acordeón */}
      <TouchableOpacity 
        style={styles.teamHeader}
        onPress={toggleTeam}
      >
        <Text style={styles.teamTitle}>Ver Equipo</Text>
        <Ionicons 
          name={showTeam ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color="#3498db" 
        />
      </TouchableOpacity>

      <Animated.View style={[styles.teamContainer, { height: teamHeight }]}>
        <View style={styles.teamContent}>
          <Text style={styles.member}>- Jared Alonso Hernández Ortega</Text>
          <Text style={styles.member}>- Eduardo Darío Gonzales Alcantar</Text>
          <Text style={styles.member}>- Cristhian Oswaldo Alemán Avalos</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f7fa'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2c3e50'
  },
  button: {
    height: 100,
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 6,
  },
  buttonImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  buttonImageStyle: {
    borderRadius: 12,
    opacity: 0.9,
  },
  buttonText: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingVertical: 10,
  },
  teamHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  teamTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3498db',
    marginRight: 8,
  },
  teamContainer: {
    overflow: 'hidden',
    backgroundColor: '#e8f4fc',
    borderRadius: 10,
    marginTop: 5,
  },
  teamContent: {
    padding: 15,
  },
  member: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 8,
  }
});

export default HomeScreen;