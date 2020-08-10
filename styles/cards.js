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
        borderRadius: 20,
        elevation: 4,
        backgroundColor: 'snow',           // #0000 = invisible
        borderWidth: 1,
        borderColor: 'grey',
        // shadowOffset: { width: 1, height: 1 },
        // shadowColor: '#333',
        // shadowOpacity: 0.3,
        // shadowRadius: 20,
        paddingLeft: 7,
    },
    tippContent: {
        padding: 15,
        marginHorizontal: 10,
        marginLeft: 0,
        marginVertical: 10,
    },
    workoutinfoboxcard: {
        borderRadius: 2,
        elevation: 2.5,
        backgroundColor: '#0000',           // #0000 = invisible
        borderWidth: 1,
        borderColor: 'grey',
    },
    workoutinfoboxcontent: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginLeft: 0,
        marginVertical: 10,
    },
});