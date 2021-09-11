/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, ScrollView, View,
} from 'react-native';
import FAicon from 'react-native-vector-icons/FontAwesome';
import { colorInputBlack, colorLabel, colorPrimary } from '../styles/colors';

const Input = (
  {
    label, value, height = 40, secureTextEntry, onChangeText, icon,
  },
) => {
  const [border, setBorder] = useState(colorLabel);
  const onFocusForm = () => {
    setBorder(colorInputBlack);
  };
  const onBlurForm = () => {
    setBorder(colorLabel);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          style={styles.input(height, border)}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
        {
          icon ? <FAicon name={icon} size={24} color={colorPrimary} /> : null
        }
      </View>
    </ScrollView>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  content: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colorLabel,
  },
  input: (height, border) => ({
    borderBottomWidth: 0.5,
    borderColor: border,
    borderRadius: 10,
    height,
    padding: 12,
    width: '95%',
  }),
});
