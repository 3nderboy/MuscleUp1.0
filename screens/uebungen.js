import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';

export default function Uebungen({ navigation }) {
    return (
        <ScrollView>
            <View style={globalStyles.containerWorkout}>
                <Text style={globalStyles.GrosserTitle}>Übungen</Text>
                
            <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                <Image source={require('../assets/Hauptbilder/Muskelmensch1.png')} style={{ width: 180, height: 340 }}/>
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate('Übung1')}}>
                <CardUebungen>
                    <View style={globalStyles.container1}>
                        <Text style={globalStyles.basicText}>Die Übungen sind hier</Text>
                    </View>
                </CardUebungen>
            </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

// 1. Button Funktion zu neuem Screen
// 2. Button params
// 3. Button selbst stylen
// 4. Bildhintergrund invisible
// 5. Invisible Button hinter Bild