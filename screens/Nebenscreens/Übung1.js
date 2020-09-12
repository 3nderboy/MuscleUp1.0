import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { ÜbungenBilderStyles } from '../../styles/HauptBilderStyle';
import { AlleÜbungenBilder } from '../../data/alleÜbungenBilder';

export default function Übung1({ route, navigation }) {
    
    const { ÜbungsName, Für, Sonst, Schwierigkeit, Wie, InWorkouts, Beschreibung, Bild1, Bild2 } = route.params;

    return (
        <ScrollView>
            <View style={{ paddingLeft: 15, paddingRight: 15, paddingVertical: 10 }}>
            
                <View style={{ flex: 0 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={globalStyles.basicTitle}>Hauptsächlich für: </Text>
                        <View style={{ paddingTop: 3.5, }}>
                            <Text style={globalStyles.basicText}>{Für}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <Text style={globalStyles.basicTitle}>Trainiert auch: </Text>
                        <View style={{ paddingTop: 3.4, }}>
                            <Text style={globalStyles.basicText}>{Sonst}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <Text style={globalStyles.basicTitle}>Schwierigkeit: </Text>
                        <View style={{ paddingTop: 3.5, }}>
                            <Text style={globalStyles.basicText}>{Schwierigkeit} / 5</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <Text style={globalStyles.basicTitle}>Wie: </Text>
                        <View style={{ paddingTop: 2.5, }}>
                            <Text style={globalStyles.basicText}>{Wie}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', paddingTop: 15 }}>
                        <Text style={globalStyles.basicTitle}>In diesen Workouts:</Text>
                        <View style={{  paddingTop: 2 }}>
                            <Text style={globalStyles.basicText}>{InWorkouts}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', paddingTop: 15, paddingBottom: 15 }}>
                        <Text style={globalStyles.basicTitle}>Beschreibung:</Text>
                        <View style={{ paddingTop: 2 }}>
                            <Text style={globalStyles.basicText}>{Beschreibung}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'grey', alignItems: 'center', paddingHorizontal: 0 }}>
                        <View style={{ paddingHorizontal: 7.5 }}>
                            <Image
                                style={{ height: undefined, width: '104.8%', aspectRatio: 1.5 }}    //height: 243.5, width: 380
                                resizeMode='stretch'
                                resizeMethod='auto'
                                source={AlleÜbungenBilder.übungenBilder[Bild1]} />
                        </View>
                    </View>
                    <View style={{ paddingVertical: 5 }}/>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'grey', alignItems: 'center' }}>
                        <View style={{ paddingHorizontal: 7.5 }}>
                            <Image
                                style={{ height: undefined, width: '104.8%', aspectRatio: 1.5 }}   //height: 243.5, width: 380
                                resizeMode='stretch'
                                resizeMethod='auto'
                                source={AlleÜbungenBilder.übungenBilder[Bild2]} />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}//image kommt beim letzten View, padding stimmt noch nicht