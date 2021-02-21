import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const CardContact = ({ login, avatar_url }) => {
  const [favorite, setFavorite] = useState(false);

  function favoritePerson() {
    setFavorite(!favorite);
  }

  return (
    <View style={styles.contactInformation}>
      <Image source={{ uri: `${avatar_url}` }} style={styles.avatar} />

      <View>
        <Text style={styles.titleAvatar}>{login}</Text>
      </View>

      <TouchableOpacity style={styles.icon} onPress={() => favoritePerson()}>
        {favorite ? (
          <Icon name='heart-o' size={30} />
        ) : (
          <Icon size={30} name='heart' />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CardContact;
