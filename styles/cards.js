import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CardWabsolvieren(props) {
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
        borderRadius: 3,
        elevation: 2,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    cardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
});