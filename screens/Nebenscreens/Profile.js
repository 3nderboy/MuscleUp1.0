import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

export default function Profile({ navigation }) {
    return (
        <View style={globalStyles.container1}>
            <Text style={globalStyles.basicText}>Profile befindet sich hier</Text>
            <Button 
                title='Zurück zum Feed'
                onPress={() => {
                    navigation.navigate('Feed')
                }}
            />
        </View>
    );
};
