import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from './globalstyle';
import { Ionicons } from '@expo/vector-icons';

//ExitButton wir beim Screen ''Pläne'' bei den Modals verwendet:
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

//NeuesWorkoutButton wird beim Screen ''OwnWorkout'' verwendet:
export function NeuesWorkoutButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.neuerButton}>
        <Ionicons 
          name='md-add'
          size={28}
        />
      </View>
    </TouchableOpacity>
  )
}

//ErstellenButton wird beim Screen ''OwnWorkout'' beim Modals verwendet:
export function ErstellenButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.submitButton}>
        <Text style={styles.erstellenText}>{text}</Text>
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
  neuerButton: {
    borderRadius: 90,
    paddingVertical: 11.5,
    paddingHorizontal: 18,
    backgroundColor: 'mintcream',
    borderColor: 'palegreen',
    borderWidth: 2.2,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'nunitoBold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  submitButton: {
    borderRadius: 7,
    paddingVertical: 11.5,
    paddingHorizontal: 18,
    backgroundColor: 'mintcream',
    borderColor: 'palegreen',
    borderWidth: 2.2,
  },
  erstellenText: {
    color: 'dimgrey',
    fontFamily: 'nunitoBold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});