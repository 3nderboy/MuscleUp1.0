import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/globalstyle';

export default function Plaene() {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicTitle}>Titel</Text>
            <Text style={globalStyles.basicText}>Plaene sind hier</Text>
        </View>
    );
}

