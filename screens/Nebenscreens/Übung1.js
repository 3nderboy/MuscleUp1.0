import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Übung1({ navigation }) {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Übung 1 ist hier!</Text>
        </View>
    );
}