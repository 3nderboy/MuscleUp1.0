import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Details({ route }) {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Details befinden sich hier</Text>
            {route.params.name && <Text style={globalStyles.basicText}>{route.params.name}</Text>}
        </View>
    );
};
