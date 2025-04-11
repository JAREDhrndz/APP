import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const DataScreen = () => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Función para simular datos (reemplázala con tu conexión real)
  const fetchData = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData({
        temperature: (Math.random() * 10 + 25).toFixed(1) + '°C',  // Simula 25-35°C
        humidity: (Math.random() * 30 + 50).toFixed(1) + '%',     // Simula 50-80%
        sensorLeft: Math.random() > 0.5,                          // true/false aleatorio
        sensorRight: Math.random() > 0.5,
        lastUpdate: new Date().toLocaleTimeString()
      });
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={fetchData}
          colors={['#3498db']}
        />
      }
    >
      <Text style={styles.title}>📡 Datos del Carrito</Text>
      
      {data ? (
        <View style={styles.dataContainer}>
          {/* Temperatura y Humedad */}
          <DataRow 
            icon="🌡️" 
            label="Temperatura" 
            value={data.temperature} 
          />
          <DataRow 
            icon="💧" 
            label="Humedad" 
            value={data.humidity} 
          />
          
          {/* Sensores IR */}
          <View style={styles.sensorContainer}>
            <Text style={styles.sensorTitle}>Sensores de Línea:</Text>
            <SensorStatus 
              side="Izquierdo" 
              active={data.sensorLeft} 
            />
            <SensorStatus 
              side="Derecho" 
              active={data.sensorRight} 
            />
          </View>
          
          {/* Última actualización */}
          <Text style={styles.updateText}>
            Última lectura: {data.lastUpdate}
          </Text>
        </View>
      ) : (
        <Text style={styles.loading}>Cargando datos...</Text>
      )}
    </ScrollView>
  );
};

// Componente para filas de datos
const DataRow = ({ icon, label, value }) => (
  <View style={styles.row}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

// Componente para estado de sensores
const SensorStatus = ({ side, active }) => (
  <View style={styles.sensorRow}>
    <Text style={styles.sensorLabel}>{side}:</Text>
    <View style={[
      styles.sensorIndicator, 
      active ? styles.activeSensor : styles.inactiveSensor
    ]}>
      <Text style={styles.sensorText}>
        {active ? 'Línea detectada' : 'Sin línea'}
      </Text>
    </View>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
  },
  dataContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  label: {
    flex: 1,
    color: '#7f8c8d',
    fontSize: 16,
  },
  value: {
    fontWeight: '600',
    fontSize: 16,
    color: '#2c3e50',
  },
  sensorContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  sensorTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3498db',
  },
  sensorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sensorLabel: {
    width: 80,
    color: '#7f8c8d',
  },
  sensorIndicator: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  activeSensor: {
    backgroundColor: '#e3f8e8',
  },
  inactiveSensor: {
    backgroundColor: '#f8e3e3',
  },
  sensorText: {
    color: '#2c3e50',
    fontWeight: '500',
  },
  updateText: {
    marginTop: 15,
    fontSize: 12,
    color: '#95a5a6',
    textAlign: 'center',
  },
  loading: {
    textAlign: 'center',
    marginTop: 50,
    color: '#7f8c8d',
  },
});

export default DataScreen;