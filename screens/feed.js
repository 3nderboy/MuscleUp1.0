import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalstyle';

export default function Feed() {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Feed ist hier</Text>
            <Ionicons name="md-star" size={30} color='blue' />
        </View>
    );
}
