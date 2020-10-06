import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export function CardWabsolvieren(props) {
    return (
        <View style={styles.wabsolvierencard}>
            <View style={styles.wabsolvierencardContent}>
                { props.children }
            </View>
        </View>
    );
}

export function TippsCard(props) {
    return (
            <View style={styles.tippcard}>
                <View style={styles.tippContent}>
                    { props.children }
                </View>
            </View>
    )
}

export function WorkoutInformationCard(props) {
    return (
            <View style={styles.workoutinfoboxcard}>
                <View style={styles.workoutinfoboxcontent}>
                    { props.children }
                </View>
            </View>
    )
}

export function UserInformationCard(props) {
    return (
            <View style={styles.userinfoboxcard}>
                <View style={styles.userinfoboxcontent}>
                    { props.children }
                </View>
            </View>
    )
}

export function AufZuCard(props) {
    return (
        <View style={styles.aufZuCard}>
            <View style={styles.aufZuCardContent}>
                { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wabsolvierencard: {
        borderRadius: 3,
        elevation: 2,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginBottom: 15,
    },
    wabsolvierencardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    tippcard: {
        borderRadius: 23.2,
        elevation: 4,
        backgroundColor: 'snow',
        borderWidth: 1,
        borderColor: 'grey',
        paddingLeft: 0,
    },
    tippContent: {
        padding: 0,
        marginHorizontal: 0,
        marginLeft: -0.2,
        marginVertical: 0,
    },
    workoutinfoboxcard: {
        borderRadius: 2,
        elevation: 2.5,
        backgroundColor: '#0000',
        borderWidth: 1,
        borderColor: 'grey',
    },
    workoutinfoboxcontent: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginLeft: 2,
        marginRight: 2,
        marginVertical: 10,
    },
    userinfoboxcard: {
        borderRadius: 20,
        elevation: 8,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'snow',
        marginHorizontal: 1,
    },
    userinfoboxcontent: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    aufZuCard: {
        borderRadius: 30.5,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 1.2,
        borderColor: 'azure',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    aufZuCardContent: {
        marginHorizontal: 14,
        marginVertical: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
});