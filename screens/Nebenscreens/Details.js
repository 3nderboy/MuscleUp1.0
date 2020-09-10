import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Details({ route }) {
    return (
        <View style={{ flex: 1, marginVertical: 12, marginHorizontal: 22  }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={globalStyles.mittelgrosserTitle}>MuscleUp</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 25 }}>
                <Text style={globalStyles.basicTitle}>Name der App:</Text>
                <View style={{ paddingLeft: 92, paddingTop: 2.9 }}>
                    <Text style={globalStyles.basicBoldText}>MuscleUp</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <Text style={globalStyles.basicTitle}>Version:</Text>
                <View style={{ paddingLeft: 151, paddingTop: 2.9 }}>
                    <Text style={globalStyles.basicBoldText}>1.0.1</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <Text style={globalStyles.basicTitle}>Erstellt von:</Text>
                <View style={{ paddingLeft: 119.5, paddingTop: 2.9 }}>
                    <Text style={globalStyles.basicBoldText}>Miro De Nardo</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <Text style={globalStyles.basicTitle}>Erste Veröffentlichung:</Text>
                <View style={{ paddingLeft: 27.5, paddingTop: 2.9 }}>
                    <Text style={globalStyles.basicBoldText}>30. August 2020</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <Text style={globalStyles.basicTitle}>Auftrag:</Text>
                <View style={{ paddingLeft: 149, paddingTop: 2.9 }}>
                    <Text style={globalStyles.basicBoldText}>Maturitätsarbeit 2020</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <Text style={globalStyles.basicTitle}>Auftragsgeber:</Text>
                <View style={{ paddingLeft: 93, paddingTop: 2.9 }}>
                    <Text style={globalStyles.basicBoldText}>Gymnasium Liestal</Text>
                </View>
            </View>
        </View>
    );
};
