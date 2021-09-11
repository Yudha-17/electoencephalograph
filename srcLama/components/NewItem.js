/* eslint-disable linebreak-style */
import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const NewItem = ({
  label,
  value,
  height = 40,
  secureTextEntry,
  onChangeText,
}) => (
  <ScrollView style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.content}>
      <TextInput
        style={styles.input(height)}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  </ScrollView>
);

export default NewItem;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#000',
    marginLeft: 5,
  },
  input: height => ({
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    height,
    padding: 12,
    width: '95%',
    marginLeft: 5,
  }),
});
