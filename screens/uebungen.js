import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';
//import * as BrustÜbungen from './Nebenscreens/Übungen/Brust';

export default function Uebungen({ route, navigation }) {

    const [Übungen] = useState([
        { ÜbungsName: 'Bankdrücken',        Für: 'Brust',           Schwierigkeit: '3 / 5', Umrandung: 'blue',      BildLinks: '4', key: '1' },
        { ÜbungsName: 'Bizeps-Curls',       Für: 'Bizeps',          Schwierigkeit: '1 / 5', Umrandung: 'yellow',    BildLinks: '1', key: '2' },
        { ÜbungsName: 'Squads',             Für: 'Beine',           Schwierigkeit: '1 / 5', Umrandung: 'green',     BildLinks: '3', key: '3' },
        { ÜbungsName: 'Rudern (im stehen)', Für: 'Rücken',          Schwierigkeit: '3 / 5', Umrandung: 'brown',     BildLinks: '5', key: '4' },
        { ÜbungsName: 'Sit-Ups',            Für: 'Bauchmuskulatur', Schwierigkeit: '2 / 5', Umrandung: 'green',     BildLinks: '2', key: '5' },
        { ÜbungsName: 'Liegestützten',      Für: 'Trizeps',         Schwierigkeit: '2 / 5', Umrandung: 'yellow',    BildLinks: '1', key: '6' },
    ]);

    return (
        <FlatList 
            ListHeaderComponent={
            <>
            <View style={globalStyles.containerWorkout}>
                <Text style={globalStyles.GrosserTitle}>Übungen</Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                        <Image source={require('../assets/Hauptbilder/Mm1.png')} style={{ width: 200, height: 490 }} />
                    </View>
                    <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                        <Image source={require('../assets/Hauptbilder/Mmh1.png')} style={{ width: 200, height: 490 }} />
                    </View>
                </View>

            </View>
            </>}


            data={Übungen}
            renderItem={({ item }) => (
                <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Übung1', item)}}>
                        
                        <CardUebungen>
                            
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flex: 1 }}>
                                    <Image 
                                    style={{ height: 82.5, width: 82 }}
                                    source={HauptBilderStyles.übungenBildLinks[item.BildLinks]} />
                                </View>
                                
                                <View style={{ flex: 3, paddingLeft: 10, paddingTop: 5, paddingBottom: 7 }}>
                                    <View style={{ flex: 1 }}></View>
                                        <Text style={globalStyles.normalerTitle}>{ item.ÜbungsName }</Text>
                                    
                                    <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee' }}>
                                         <Text style={globalStyles.basicBoldText}>Für:</Text>
                                         <View style={{ paddingLeft: 100 }}>
                                             <Text style={globalStyles.basicText}>{ item.Für }</Text>
                                         </View>
                                     </View>

                                     <View style={{ flexDirection: 'row' }}>
                                         <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                                         <View style={{ paddingLeft: 30 }}>
                                             <Text style={globalStyles.basicText}>{ item.Schwierigkeit }</Text>
                                         </View>
                                     </View>
                                </View>

                            </View>

                        </CardUebungen>

                    </TouchableOpacity>
                </View>
            )}
        />
    );
}


        // 1. Button Funktion zu neuem Screen --> ja
        // 2. Button params (22)
        // 3. HeaderTitle anpassen mit params
        // 4. Bilder links bei Übungen machen + React Hooks!
// 5. Daten in einer File (more exports)
// 6. Übung-Card Bild erstellen + richtig benennen(AD)
        // 7. Übung-Screen stylen
        // 8. Bildhintergrund invisible --> ja
// 9. Button bei Feed.js fixen
// 10. BorderColor anpassen mit params
// 11. Invisible Button/TO hinter Bild



// return (
//     <ScrollView>
//         <View style={globalStyles.containerWorkout}>
//             <Text style={globalStyles.GrosserTitle}>Übungen</Text>

//             <View style={{ paddingVertical: 20, alignItems: 'center' }}>
//                 <Image source={require('../assets/Hauptbilder/Mm1.png')} style={{ width: 210, height: 500 }} />
//             </View>

//             <FlatList
//                 data={Übungen}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => { navigation.navigate('Übung1', item) }}>
//                         <CardUebungen>
//                             <View style={globalStyles.container1}>
//                                 <Text style={globalStyles.basicText}>{ item.title }</Text>
//                             </View>
//                         </CardUebungen>
//                     </TouchableOpacity>
//                 )}
//             />

//         </View>
//     </ScrollView>
// );