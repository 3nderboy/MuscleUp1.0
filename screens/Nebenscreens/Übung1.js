import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Übung1({ route, navigation }) {
    
    const { ÜbungsName, Für, Schwierigkeit } = route.params;
    
    return (
        <View style={globalStyles.container1}>
            <View style={globalStyles.container1}>
                <Text style={globalStyles.basicText}>{ÜbungsName}</Text>
                <Text style={globalStyles.basicText}>{Für}</Text>
                <Text style={globalStyles.basicText}>{Schwierigkeit}</Text>
            </View>
        </View> 
    );
}