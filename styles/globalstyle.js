import React from 'react';
import { StyleSheet, View } from 'react-native';

export const globalStyles = StyleSheet.create({
    container1: {                           //Um alles zu Beginn in der Mitte platzieren --> Übersicht
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
    errorText: {                            //Wird bei Validierung gebraucht
        color: 'crimson',
        fontFamily: 'nunitoBold',
        marginBottom: 12,
        marginTop: 1,
        textAlign: 'center'
    },
    tippsModal: {
        flex: 0,
        flexBasis: 'auto',
        backgroundColor: 'white',
        padding: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'lightgrey',
        elevation: 10,
    },
    neuesWorkoutModal: {                                 //Modals
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
    warningModal: {
        flex: 0,
        flexBasis: 'auto',
        backgroundColor: 'white',
        padding: 30,
        marginHorizontal: 10,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'lightgrey',
        elevation: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        fontFamily: 'nunitoBold',
        fontStyle: 'normal',
        fontSize: 15,
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 10,
    },
});