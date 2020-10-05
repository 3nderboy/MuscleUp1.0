import React from 'react';
import { StyleSheet, View, Text, Button, DatePickerAndroid } from 'react-native';
import { globalStyles } from '../styles/globalstyle';

export default function Aktivitaeten({ navigation }) {

    const newDate = () => {
        try {
            const {
                action,
                year,
                month,
                day
            } = DatePickerAndroid.open({
                date: new Date(2020, 7, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {

            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Aktivitäten befinden sich hier</Text>
            <Button 
                title='Zurück zum Feed'
                onPress={() => {
                    navigation.navigate('Feed')
                }}
            />
            <Button 
                title='Kalender'
                onPress={() => {
                    newDate();
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