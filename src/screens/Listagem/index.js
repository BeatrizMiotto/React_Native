import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';

import CardContact from '../../components/CardContact';

import contactImg from '../../assets/contact.png';

import styles from './styles.js';

const Listagem = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  const url = 'https://api.github.com/users';

  useEffect(() => {
    async function getContacts() {
      const response = await fetch(url);

      const contactsJson = await response.json();

      setContacts(contactsJson);
    }

    getContacts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentTop}>
        <Text style={styles.text}>Meus contatos</Text>
        <Image source={contactImg} style={styles.image} />
      </View>
      <ScrollView>
        {contacts.map((item) => (
          <CardContact
            login={item.login}
            avatar_url={item.avatar_url}
            key={item.id}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.titleButton}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Listagem;
