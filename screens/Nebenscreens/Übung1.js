import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Übung1({ route, navigation }) {
    
    const { ÜbungsName, Für, Schwierigkeit } = route.params;

    return (
        <View style={{ paddingLeft: 20, paddingRight: 20, padding: 10 }}>
            
            <View style={{ flex: 0 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={globalStyles.basicTitle}>Für:</Text>
                    <View style={{ paddingLeft: 40, paddingTop: 2, paddingLeft: 173 }}>
                        <Text style={globalStyles.basicText}>{Für}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                    <Text style={globalStyles.basicTitle}>Schwierigkeit:</Text>
                    <View style={{ paddingLeft: 40, paddingTop: 2, paddingLeft: 88 }}>
                        <Text style={globalStyles.basicText}>{Schwierigkeit}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                    <Text style={globalStyles.basicTitle}>In diesen Workouts:</Text>
                    <View style={{ paddingLeft: 40, paddingTop: 2 }}>
                        <Text style={globalStyles.basicText}>{Schwierigkeit}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'column', paddingTop: 15, paddingBottom: 15 }}>
                    <Text style={globalStyles.basicTitle}>Beschreibung:</Text>
                    <View style={{ paddingTop: 2 }}>
                        <Text style={globalStyles.basicText}>{Schwierigkeit}</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: 'red', padding: 100, alignItems: 'center' }}>
                    <Text style={globalStyles.basicText}>Hier wäre das Bild</Text>
                </View>
            </View>

        </View> //image kommt beim letzten View, padding stimmt noch nicht
    );
}