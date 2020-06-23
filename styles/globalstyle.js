import React from 'react';
import { StyleSheet, View } from 'react-native';

export const globalStyles = StyleSheet.create({
    container1: {                           //Container fürn Anfang --> mitte
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerWorkout: {
        flex: 1,
        margin: 12,
    },
    basicText: {                            //Normaler Text für Beschreibung, Listen, etc.
        fontFamily: 'nunitoRegular',
        fontSize: 15,
        color: 'dimgray',
    },
    basicTitle: {                           //Titel für Liste
        fontFamily: 'nunitoBold',
        fontSize: 18,
        color: 'dimgrey',
    },
    GrosserTitle: {
        fontFamily: 'nunitoBold',
        fontSize: 26,
        color: 'dimgrey',
    },
});