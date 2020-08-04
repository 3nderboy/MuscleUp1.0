import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Modal, ScrollView } from 'react-native';
import { globalStyles } from './globalstyle';
import { Ionicons } from '@expo/vector-icons';

import { ExitButton } from './buttons';
import { NeuesWorkoutButton } from './buttons';
import { ErstellenButton } from './buttons';

import { alletipps } from '../data/alleTipps';

//TippsModal wird beim ''Pläne'' Screen verwendet:
export function TippsModal(props) {
  const { onPressExit, visible, tippnummer, titel, erklärung } = props;

  return (
    <Modal visible={visible} transparent={true} animationType='slide'  >
      <View style={globalStyles.tippsModal}>
        <View style={{ alignItems: 'center' }}>
          <Text style={globalStyles.basicBoldText}>{tippnummer}</Text>
        </View>
        <View style={{ alignItems: 'center', paddingTop: 15, paddingBottom: 20 }}>
          <Text style={globalStyles.GrosserTitle}>{titel}</Text>
        </View>
        <Text style={globalStyles.basicText}>{erklärung}</Text>
        <View style={{ position: 'absolute', paddingLeft: 145, paddingTop: 385 }}>
          <ExitButton onPress={onPressExit} />
        </View>
      </View>
    </Modal>
  )
}

//NeuesWorkoutModal wird beim ''OwnWorkout'' Screen verwendet:
export function NeuesWorkoutModal(props) {
  const { onPressExit, visible } = props;
  
  return (
      <Modal visible={visible} transparent={true} animationType='slide'>
        <View style={globalStyles.neuesWorkoutModal}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <ErstellenButton onPress={onPressExit} text={'Erstellen!'}/>
              <Text style={globalStyles.GrosserTitle}>Dein neues Workout</Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
  );
}