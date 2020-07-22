import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import ButtonCard from '../styles/buttonCard';
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
                

                {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln */}
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 20, alignItems: 'center' }}>
                        <ImageBackground 
                            source={require('../assets/Hauptbilder/Mm1.png')} 
                            style={{ flex: 1, resizeMode: 'cover', width: 200, height: 490 }}>
                            
                            {/* Bauchmuskeln */}
                            <View style={{ paddingLeft: 81, paddingTop: 177, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Pläne')}}>
                                    <Text style={{ color: 'red' }}>oooo{'\n'}oooo{'\n'}oooo{'\n'}oooo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Nacken komplett */}
                            <View style={{ paddingLeft: 62, paddingTop: 92.5, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>ooooooooo{'\n'}ooooooooo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Schulter links */}
                            <View style={{ paddingLeft: 37, paddingTop: 115, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>.oo{'\n'}oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Schulter rechts */}
                            <View style={{ paddingLeft: 141, paddingTop: 115, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>oo{'\n'}oo.</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Brust */}
                            <View style={{ paddingLeft: 57.5, paddingTop: 118, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Pläne')}}>
                                    <Text style={{ color: 'red' }}>oooooooooo{'\n'}oooooooooo{'\n'}oooooooooo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Bizeps links */}
                            <View style={{ paddingLeft: 33, paddingTop: 148, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Pläne')}}>
                                    <Text style={{ color: 'red' }}> oo{'\n'}ooo{'\n'} oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Bizeps rechts */}
                            <View style={{ paddingLeft: 141, paddingTop: 148, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Pläne')}}>
                                    <Text style={{ color: 'red' }}>oo{'\n'}ooo{'\n'}oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Seitliche Bauchmuskeln links */}
                            <View style={{ paddingLeft: 63, paddingTop: 165, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>oo{'\n'}oo{'\n'}oo{'\n'}oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Seitliche Bauchmuskeln rechts */}
                            <View style={{ paddingLeft: 115, paddingTop: 165, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>oo{'\n'}oo{'\n'}oo{'\n'}oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Unterarm links */}
                            <View style={{ paddingLeft: 20, paddingTop: 195, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>ooo{'\n'}ooo{'\n'}oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Unterarm rechts */}
                            <View style={{ paddingLeft: 150, paddingTop: 195, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}> oo{'\n'}ooo{'\n'}  oo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Oberschenkel links */}
                            <View style={{ paddingLeft: 49, paddingTop: 240, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}> ooo{'\n'} ooo{'\n'}oooo{'\n'}oooo{'\n'} ooo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Oberschenkel rechts */}
                            <View style={{ paddingLeft: 112, paddingTop: 240, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}> ooo{'\n'} ooo{'\n'}oooo{'\n'}oooo{'\n'} ooo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Unterschenkel links */}
                            <View style={{ paddingLeft: 42, paddingTop: 321, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>oooo{'\n'}oooo{'\n'}oooo{'\n'}oooo{'\n'}ooo</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Unterschenkel rechts */}
                            <View style={{ paddingLeft: 120, paddingTop: 321, position: 'absolute' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                                    <Text style={{ color: 'red' }}>oooo{'\n'}oooo{'\n'}oooo{'\n'}oooo{'\n'}  ooo</Text>
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>
                    </View>


                    
                    <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 20, alignItems: 'center' }}>
                        <Image source={require('../assets/Hauptbilder/Mmh1.png')} style={{ width: 200, height: 490 }} />
                    </View>
                </View>


                {/* Die drei Buttons für Zuhause/Hanteln/Fitness */}
                <View style={{ flexDirection: 'row', marginBottom: 22, marginHorizontal: 20 }}>


                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
                            <ButtonCard>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('../assets/HauptBilderÜbungen/ÜLinksArme.png')} style={{ width: 50, height: 50 }}/>
                                </View>
                            </ButtonCard>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, marginHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Challenges und Medallien')}}>
                            <ButtonCard>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('../assets/HauptBilderÜbungen/ÜLinksBeine.png')} style={{ width: 50, height: 50 }}/>
                                </View>
                            </ButtonCard>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Aktivitäten')}}>
                            <ButtonCard>
                                <View style={{ justifyContent: 'center' }}>
                                    <Image source={require('../assets/HauptBilderÜbungen/ÜLinksBrust1.png')} style={{ width: 50, height: 50 }}/>
                                </View>
                            </ButtonCard>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>
            </>}


            //Alle Übungen mit Hooks/State unten beim Übungs-Screen
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
// 12. TO hinter Bild Funktionen geben (Bild ändern && hide Element)
// 13. Buttons für Zuhause/Hanteln/Gym erstellen
// 14. Buttons Funktion geben (Bild ändern && hide Element)
// 15. Muskelmensch (Bild) anpassen (kleine Muskeln verdunkeln + Farben ändern)

// Fragen: Wie veröffentlichen? Schatten bei Cards?!? Daten in mehreren Files?! Invisible TO hinter Bild? Funktionen?!



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