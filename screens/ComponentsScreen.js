import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const components = [
  {
    id: '1',
    name: 'ESP-32',
    description: 'Microcontrolador principal que procesa los datos de los sensores y controla los motores',
    image: 'https://freesvg.org/img/1666364456Esp32_devkitc_v4.png'
  },
  {
    id: '2',
    name: 'DHT11',
    description: 'Sensor digital de temperatura y humedad ambiental con salida serial',
    image: 'https://abacasstorageaccnt.blob.core.windows.net/cirkit/05596fff-4f8f-4556-8b1d-73ff55b6eaa8.png'
  },
  {
    id: '3',
    name: 'Giroscopio GY-521',
    description: 'Mide orientación y velocidad angular (inclinación, rotación y aceleración)',
    image: 'https://img.freepik.com/vector-premium/icono-procesador-giroscopio-vector-plano-sensor-telefono-acelerometro-giroscopio-telefono-inteligente-aislado_98396-58178.jpg'
  },
  {
    id: '4',
    name: 'Sensor BME-680',
    description: 'Sensor ambiental que mide temperatura, humedad, presión atmosférica y calidad del aire (VOC)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6jjFG-SHDAOLO2JTRzCHPyD6Z65jq6o5gfwh41Zpn5svdXZ8IYJnmdAmYrn2D3Bg8_c&usqp=CAU'
  },
  {
    id: '5',
    name: 'Motor Dual Axis',
    description: 'Motores de corriente continua para el movimiento de las ruedas (control de velocidad y dirección)',
    image: 'https://www.build-electronic-circuits.com/wp-content/uploads/2023/11/Motor-DC-267x500.png'
  },
  {
    id: '6',
    name: 'Sensor IR (TCRT5000)',
    description: 'Sensor infrarrojo reflectivo para detección de línea (emite y recibe luz IR)',
    image: 'https://cdn-icons-png.flaticon.com/512/11298/11298717.png'
  }
];

const ComponentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛠 Componentes Electrónicos</Text>
      <FlatList
        data={components}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15
  },
  textContainer: {
    flex: 1
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  description: {
    color: '#666',
    fontSize: 14
  }
});

export default ComponentsScreen;