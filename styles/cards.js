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

const styles = StyleSheet.create({
    wabsolvierencard: {
        borderRadius: 3,
        elevation: 2,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    wabsolvierencardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    tippcard: {
        borderRadius: 3,
        elevation: 5,
        backgroundColor: 'snow',           // #0000 = invisible
        borderWidth: 1,
        borderColor: 'grey',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    tippContent: {
        padding: 15,
        marginHorizontal: 0,
        marginLeft: 0,
        marginVertical: 0,
    },
});