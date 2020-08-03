import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Modal } from 'react-native';
import { globalStyles } from './globalstyle';
import { Ionicons } from '@expo/vector-icons';
import { ExitButton } from './buttons';

import { alletipps } from '../data/alleTipps';

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