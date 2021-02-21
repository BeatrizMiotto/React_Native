import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import codeImage from '../../assets/image.png';

import styles from './styles';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>

      <Text style={styles.text}>Login</Text>

      <Image source={codeImage} style={styles.logo}></Image>

      <TextInput
        placeholder='Email'
        placeholderTextColor='#888'
        style={styles.input}
      />

      <TextInput
        placeholder='Senha'
        placeholderTextColor='#888'
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
