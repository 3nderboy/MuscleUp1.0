import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import CardWabsolvieren from '../../styles/cards';
import { Ionicons } from '@expo/vector-icons';

export default function Wabsolvieren({ navigation }) {
    return (
        <ScrollView>
            <View style={globalStyles.containerWorkout}>
                <Text style={globalStyles.GrosserTitle}>''Workout-Name''</Text>

                <View style={{ flexDirection: 'row', paddingVertical: 20}}>
                    <Ionicons name="md-alarm" size={30} color='dimgrey' style={{ paddingRight: 10 }} />
                    <Text style={globalStyles.basicTitle}>00:00</Text>
                </View>

                <CardWabsolvieren>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={globalStyles.basicTitle}>1. Übung</Text>
                        <Text style={{ fontFamily: 'nunitoBold', 
                                        fontSize: 18, 
                                        color: 'dimgrey', 
                                        paddingLeft: 170, 
                                        paddingRight: 20, 
                        }}>''Satz: 0 / 3''</Text>
                    </View>
                    <Text style={globalStyles.basicText}>''Name der Übung''</Text>
                </CardWabsolvieren>

                <View style={{ padding: 15 }}></View>

                <CardWabsolvieren>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={globalStyles.basicTitle}>2. Übung</Text>
                        <Text style={{ fontFamily: 'nunitoBold', 
                                        fontSize: 18, 
                                        color: 'dimgrey', 
                                        paddingLeft: 170, 
                                        paddingRight: 20, 
                        }}>''Satz: 0 / 3''</Text>
                    </View>
                    <Text style={globalStyles.basicText}>''Name der Übung''</Text>
                </CardWabsolvieren>

                <View style={{ padding: 15 }}></View>

                <CardWabsolvieren>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={globalStyles.basicTitle}>3. Übung</Text>
                        <Text style={{ fontFamily: 'nunitoBold', 
                                        fontSize: 18, 
                                        color: 'dimgrey', 
                                        paddingLeft: 170, 
                                        paddingRight: 20, 
                        }}>''Satz: 0 / 3''</Text>
                    </View>
                    <Text style={globalStyles.basicText}>''Name der Übung''</Text>
                </CardWabsolvieren>

                <View style={{ padding: 15 }}></View>

                <CardWabsolvieren>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={globalStyles.basicTitle}>4. Übung</Text>
                        <Text style={{ fontFamily: 'nunitoBold', 
                                        fontSize: 18, 
                                        color: 'dimgrey', 
                                        paddingLeft: 170, 
                                        paddingRight: 20, 
                        }}>''Satz: 0 / 3''</Text>
                    </View>
                    <Text style={globalStyles.basicText}>''Name der Übung''</Text>
                </CardWabsolvieren>

                <View style={{ padding: 15 }}></View>

                <CardWabsolvieren>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={globalStyles.basicTitle}>5. Übung</Text>
                        <Text style={{ fontFamily: 'nunitoBold', 
                                        fontSize: 18, 
                                        color: 'dimgrey', 
                                        paddingLeft: 170, 
                                        paddingRight: 20, 
                        }}>''Satz: 0 / 3''</Text>
                    </View>
                    <Text style={globalStyles.basicText}>''Name der Übung''</Text>
                </CardWabsolvieren>

                <View style={{ marginTop: 40, marginBottom: 5 }}>
                    <Button 
                        title='Workout fertig'
                        onPress={() => {
                            navigation.navigate('Feed')
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};
