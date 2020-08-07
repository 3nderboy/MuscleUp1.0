import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalstyle';
import { Timer } from './Nebenscreens/Wabsolvieren';

export default function Feed({ route, navigation }) {
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
                title='Meine Workouts'
                onPress={() => {
                    navigation.navigate('OwnWorkout')
                }}
            />
            <Button 
                title='Übungen'
                onPress={() => {
                    navigation.navigate('Übungen')  //('Übung1', { ÜbungsName: 'hello' })
                }}
            />
            {/* <Button 
                title='Bankdrücken'
                onPress={() => {
                    navigation.navigate(({ route }) => ({ title: route.params.ÜbungsName }))
                }}
            /> */}
        </View>
    );
}
