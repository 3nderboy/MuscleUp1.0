import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import { TippsModal } from '../styles/modals';
import { TippsCard } from '../styles/cards';
import { alletipps } from '../data/alleTipps';
import { Ionicons } from '@expo/vector-icons';

export default function Plaene() {
    
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <View style={globalStyles.container1}>

            <TippsModal visible={modalOpen} onPress={() => setModalOpen(false)} />

            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <TippsCard>
                <Text>hello</Text>
              </TippsCard>
            </TouchableOpacity>

            <Text style={globalStyles.basicTitle}>Titel</Text>
            <Text style={globalStyles.basicText}>Plaene sind hier</Text>
        </View>
    );
}

