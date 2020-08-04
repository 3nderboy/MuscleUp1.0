import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CardUebungen(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        elevation: 3,
        backgroundColor: 'white',           // #0000 = invisible
        borderWidth: 1,
        borderColor: 'turquoise',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        marginHorizontal: 20,
        marginLeft: 0,
        marginVertical: 0,
    },
});