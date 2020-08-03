import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from './globalstyle';
import { Ionicons } from '@expo/vector-icons';

export function ExitButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Ionicons 
          name='md-close'
          size={28}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 90,
    paddingVertical: 11.5,
    paddingHorizontal: 18,
    backgroundColor: 'snow',
    borderColor: '#f01d71',
    borderWidth: 2.2,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'nunitoBold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});