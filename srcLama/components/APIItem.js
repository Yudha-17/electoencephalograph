/* eslint-disable linebreak-style */
import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import Card from './Card';

const APIItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Card key={item.id} style={styles.cardContainer}>
      <Image
        source={{ uri: item.avatar }}
        style={styles.avatar}
      />
      <View style={styles.bio}>
        <Text style={styles.nama}>
          {item.first_name}
          {' '}
          {item.last_name}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      <FAIcon name="chevron-right" />
    </Card>
  </TouchableOpacity>
);

export default APIItem;

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  bio: {
    flexDirection: 'column',
    width: '60%',
    marginLeft: 19,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  email: {
    fontSize: 18,
  },
  nama: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
