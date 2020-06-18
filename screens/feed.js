import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalstyle';

export default function Feed({ navigation }) {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Feed ist hier</Text>
            <Ionicons name="md-star" size={30} color='blue' />
            <Button 
                title='Details haha'
                onPress={() => navigation.push('Details', { name: 'Details haha' })}
            />
            <Button 
                title='Details nooo'
                onPress={() => navigation.push('Details', { name: 'Details nooo' })}
            />
            <Button 
                title='Zu Aktivitäten'
                onPress={() => {
                    navigation.navigate('Aktivitäten')
                }}
            />
            <Button 
                title='Absolvieren'
                onPress={() => {
                    navigation.navigate('Wabsolvieren')
                }}
            />
        </View>
    );
}
