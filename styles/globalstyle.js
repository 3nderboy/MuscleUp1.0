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
    containerTipps: {
        flex: 1,
        margin: 12,
    },
    containerNormal: {
        flex: 1,
        margin: 12,
    },
    basicText: {                            //Normaler Text für Beschreibung, Listen, etc.
        fontFamily: 'nunitoRegular',
        fontSize: 15,
        color: 'dimgray',
    },
    basicBoldText: {
        fontFamily: 'nunitoBold',
        fontSize: 15,
        color: 'dimgray',
    },
    basicTitle: {                           //Titel für Liste
        fontFamily: 'nunitoBold',
        fontSize: 18,
        color: 'dimgrey',
    },
    normalerTitle: {
        fontFamily: 'nunitoBold',
        fontSize: 20,
        color: 'dimgrey',
    },
    mittelgrosserTitle: {
        fontFamily: 'nunitoBold',
        fontSize: 25,
        color: 'dimgrey',
    },
    mittelgrosserTitleWhite: {
        fontFamily: 'nunitoBold',
        fontSize: 25,
        color: 'white',
    },
    GrosserTitle: {
        fontFamily: 'nunitoBold',
        fontSize: 30,
        color: 'dimgrey',
    },
    errorText: {
        color: 'crimson',
        fontFamily: 'nunitoBold',
        marginBottom: 12,
        marginTop: 1,
        textAlign: 'center'
    },
    tippsModal: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 100,
        marginBottom: 120,
        marginHorizontal: 30,
        padding: 40,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'lightgrey',
    },
    neuesWorkoutModal: {
        backgroundColor: 'white',
        flex: 1,
        marginTop: 100,
        marginBottom: 0,
        marginHorizontal: 0,
        paddingVertical: 40,
        paddingHorizontal: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderWidth: 2,
        borderColor: 'lightgrey',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        fontFamily: 'nunitoBold',
        fontSize: 15,
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 10,
    },
});