import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const MappingScreen = () => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗺️ Ruta Programada</Text>
      
      <Image
        source={{ uri: 'https://via.placeholder.com/350x150/3498db/ffffff?text=Mapa+de+la+Pista' }}
        style={styles.mapImage}
      />
      
      <Text style={styles.subtitle}>Video Demostración:</Text>
      
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          status.isPlaying 
            ? videoRef.current.pauseAsync() 
            : videoRef.current.playAsync()
        }
      >
        <Text style={styles.buttonText}>
          {status.isPlaying ? '⏸ Pausar' : '▶️ Reproducir'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2c3e50'
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 15
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default MappingScreen;