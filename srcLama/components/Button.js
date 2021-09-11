/* eslint-disable linebreak-style */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colorLabel, colorLoading, colorPrimary} from '../styles/colors';

const Button = props => {
  if (props.isLoading) {
    return (
      <TouchableOpacity style={{...styles.buttonLoading, ...props.style}}>
        <Text style={styles.text}>SEDANG DIPROSES..</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.button, ...props.style}}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorPrimary,
    width: '90%',
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonLoading: {
    width: '90%',
    backgroundColor: colorLoading,
    paddingVertical: 13,
    borderRadius: 5,
  },
});
