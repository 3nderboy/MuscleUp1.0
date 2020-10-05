import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Details({ route }) {
    return (
        <View style={{ flex: 1, marginVertical: 12, marginHorizontal: 15  }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={globalStyles.mittelgrosserTitle}>MuscleUp</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 25 }}>
                <Text style={globalStyles.basicBoldText}>Name der App:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>MuscleUp</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Version:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>1.0.1</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Erstellt von:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>Miro De Nardo</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Erste Veröffentlichung:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>30. August 2020</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Framework:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>React Native (SDK 37)</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Programmiersprache:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>JSX (JavaScript)</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Auftrag:</Text>
                <View style={{ paddingLeft: 0 }}>
                    <Text style={globalStyles.basicText}>Maturarbeit 2020</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Text style={globalStyles.basicBoldText}>Auftragsgeber:</Text>
                <View style={{ paddingLeft: 73 }}>
                    <Text style={globalStyles.basicText}>Gymnasium Liestal</Text>
                </View>
            </View>
        </View>
    );
};
