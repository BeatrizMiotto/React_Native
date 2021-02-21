import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import imageHome from '../../assets/imageHome.png';

import styles from './styles.js';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#888' }}>
        Bem vindo(a)!
      </Text>
      <Text style={{ fontSize: 22, textAlign: 'center', margin: 20, color: '#888' }}>
        Encontre os seus contatos .
      </Text>
      <Image source={imageHome} style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Listagem')}
      >
        <Text style={styles.titleButton}>Listas de contatos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
