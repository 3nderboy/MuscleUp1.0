import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import { TippsCard } from '../styles/cards';
import { Ionicons } from '@expo/vector-icons';

import { TippsModal } from '../styles/modals';
import { alletipps } from '../data/alleTipps';

export default function Plaene() {
  
  const [modalTipp, setModalTipp] = useState();

  return (
    <View style={globalStyles.container1}>
      <Text style={globalStyles.basicTitle}>Titel</Text>
      <Text style={globalStyles.basicText}>Plaene sind hier</Text>
    
      {
        alletipps.map(
          tipp => {
            return <TouchableOpacity key={tipp.key} onPress={() => setModalTipp(tipp)}>
                      <TippsCard>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                          <Text style={globalStyles.basicTitle}>{tipp.tippnummer}</Text>
                        </View>
                        <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                      </TippsCard>
                    </TouchableOpacity>
          }
        )
      }

      {!!modalTipp &&
        <TippsModal
          visible={!!modalTipp}
          onPressExit={() => setModalTipp(false)}
          tippnummer={modalTipp.tippnummer}
          titel={modalTipp.titel}
          erklärung={modalTipp.erklärung}
        />
      }
    </View>
  );
}

