import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Modal, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from './globalstyle';
import { Ionicons } from '@expo/vector-icons';

import { ExitButton } from './buttons';
import { NeuesWorkoutButton } from './buttons';
import { ErstellenButton } from './buttons';

import { alletipps } from '../data/alleTipps';
import CreateWorkout from '../screens/Nebenscreens/createWorkout';


//TippsModal wird beim ''Pläne'' Screen verwendet:
export function TippsModal(props) {
  const { onPressExit, visible, tippnummer, titel, erklärung } = props;

  return (
    <Modal visible={visible} transparent={true} animationType='slide'>
      <View style={{flex: 1, justifyContent: 'center'}}  >
        <View style={globalStyles.tippsModal}>
          <Text style={{...globalStyles.basicBoldText, textAlign: 'center'}}>{tippnummer}</Text>
          <Text style={{...globalStyles.GrosserTitle,  textAlign: 'center' , marginTop: 10, marginBottom: 20 }}>{titel}</Text>
          <Text style={{...globalStyles.basicText, textAlign: 'center', marginBottom: 50}}>{erklärung}</Text>
          <ExitButton onPress={onPressExit} />
        </View>
      </View>
    </Modal>
  )
}



//NeuesWorkoutModal wird beim ''OwnWorkout'' Screen verwendet:
export function NeuesWorkoutModal(props) {
  const { onPressExit, visible, addWorkout } = props;
  
  return (
      <Modal visible={visible} transparent={true} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.neuesWorkoutModal}>
            <ScrollView>
              <View style={{ alignItems: 'center' }}>
                <ExitButton onPress={onPressExit}/>
                <CreateWorkout addWorkout={addWorkout}/>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
  );
}
