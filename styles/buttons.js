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

//FinishWorkoutButton wird beim Screen ''Wabsolvieren'' verwendet, um das Workout zu beenden:
export function FinishWorkoutButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.finishWorkoutButton}>
        <Text style={styles.erstellenText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

//StartWorkoutButton wird beim Screen ''WorkoutScreen'' verwendet, um ein Workout zu starten:
export function StartWorkoutButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.startWorkoutButton}>
        <Ionicons 
          name='md-play'
          color='snow'
          size={26}
          style={{ justifyContent: 'center', paddingRight: 15, }}
        />
        <Text style={styles.startWorkoutText}>{text}</Text>
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
  finishWorkoutButton: {
    borderRadius: 4,
    paddingVertical: 11.5,
    paddingHorizontal: 18,
    backgroundColor: 'mintcream',
    borderColor: 'turquoise',
    borderWidth: 3,
  },
  startWorkoutButton: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 11.5,
    paddingHorizontal: 18,
    backgroundColor: 'turquoise',
    borderColor: 'mintcream',
    borderWidth: 2.5,
    justifyContent: 'center',
  },
  startWorkoutText: {
    color: 'snow',
    fontFamily: 'nunitoBold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2
  },
});