import React from 'react';
import { StyleSheet, View } from 'react-native';


//ButtonCard wird beim Übungs-Screen für die drei Buttons Zuhause/Hanteln/Fitness verwendet

export default function ButtonCard(props) {
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
        borderRadius: 20,
        elevation: 3,
        backgroundColor: 'white',           // #0000 = invisible
        borderWidth: 1,
        borderColor: '#0000',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        marginHorizontal: 0,
        marginLeft: 0,
        marginVertical: 0,
    },
});