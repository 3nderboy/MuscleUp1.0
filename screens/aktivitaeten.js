import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';

export default function Aktivitaeten({ navigation }) {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Aktivitäten befinden sich hier</Text>
            <Button 
                title='Zurück zum Feed'
                onPress={() => {
                    navigation.navigate('Feed')
                }}
            />
        </View>
    );
}

            // <Button                                      Direkt zu einem Screen in einem anderen Screen
            //     title='Details'
            //     onPress={() => {                     
            //         navigation.navigate('Feed', {
            //             screen: 'Details',
            //             params: { name: 'Details haha' }
            //     })}
            // />