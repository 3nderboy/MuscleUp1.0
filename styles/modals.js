import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Modal } from 'react-native';
import { globalStyles } from './globalstyle';
import { Ionicons } from '@expo/vector-icons';
import { ExitButton } from './buttons';
import { alletipps } from '../data/alleTipps';

export function TippsModal({ onPress, visible, route }) {
  
  //const { tippname, tippnummer, titel, erklärung } = route.params;
  
  return (
    <Modal visible={visible} transparent={true} animationType='slide'  >
      <View style={globalStyles.tippsModal}>
      <View style={{ alignItems: 'center' }}>
        <Text style={globalStyles.basicBoldText}>Tipp #1</Text>
      </View>
      <View style={{ alignItems: 'center', paddingTop: 15, paddingBottom: 20 }}>
        <Text style={globalStyles.GrosserTitle}>Ernährung</Text>
      </View>
        <Text style={globalStyles.basicText}>hello</Text>
      <View style={{ position: 'absolute', paddingLeft: 145, paddingTop: 385 }}>
        <ExitButton onPress={ onPress }/>
      </View>
    </View>
  </Modal>
  )
}