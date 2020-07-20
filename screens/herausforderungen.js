import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';

export default function Herausforderungen({ navigation }) {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ImageBackground
            source={require('../assets/Hauptbilder/Mm1.png')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', width: 200, height: 490 }}
            >

                <View style={{ paddingLeft: 65, paddingBottom: 150 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                        <Text style={{ color: 'red', fontSize: 8 }}>Hello</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingLeft: 85, paddingBottom: 155, position: 'absolute' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Pläne')}}>
                        <Text style={{ color: 'red' }}>ooo{'\n'}ooo{'\n'}ooo{'\n'}ooo</Text>
                    </TouchableOpacity>
                </View>


            </ImageBackground>
        </View>
    );
}