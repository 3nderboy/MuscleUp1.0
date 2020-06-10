import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/globalstyle';

export default function Uebungen() {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Die Übungen sind hier</Text>
        </View>
    );
}