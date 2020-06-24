import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';

export default function Uebungen({ navigation }) {
    
    const [Übungen] = useState([
        { ÜbungsName: 'Bankdrücken',    Für: 'Brust',       Schwierigkeit: '3 / 5', Bild: '1', key: '1' },
        { ÜbungsName: 'Liegestützten',  Für: 'Trizeps',     Schwierigkeit: '2 / 5', Bild: '1', key: '2' },
        { ÜbungsName: 'Squads',         Für: 'Beine',       Schwierigkeit: '1 / 5', Bild: '5', key: '3' },
        { ÜbungsName: 'Bizeps-Curls',   Für: 'Bizeps',      Schwierigkeit: '1 / 5', Bild: '4', key: '4' },
    ]);

    return (
        <FlatList 
            ListHeaderComponent={
            <>
            <View style={globalStyles.containerWorkout}>
                <Text style={globalStyles.GrosserTitle}>Übungen</Text>

                <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                    <Image source={require('../assets/Hauptbilder/Mm1.png')} style={{ width: 210, height: 500 }} />
                </View>
            </View>
            </>}
            data={Übungen}
            renderItem={({ item }) => (
                <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Übung1', item)}}>
                        
                        <CardUebungen>
                            
                            <View style={{ flexDirection: 'row' }}>

                                <View style={{ flex: 1, borderWidth: 1, borderColor: 'red', borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}>
                                    <Image />
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
// 4. Daten in einer File (more exports)
// 5. Übung-Card Bild erstellen (AD)
// 6. Übung-Screen stylen
        // 7. Bildhintergrund invisible --> ja
// 8. Button bei Feed.js fixen
// 9. BorderColor anpassen mit params
// 10. Invisible Button hinter Bild


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