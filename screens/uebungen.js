import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import ButtonCard from '../styles/buttonCard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';
import { alleUebungen } from '../data/alleUebungen';


export default function Uebungen({ route, navigation }) {

  return (
    <FlatList
      ListHeaderComponent={
        <>
        <View style={globalStyles.containerWorkout}>
          <Text style={globalStyles.GrosserTitle}>Übungen</Text>
  
          {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <View style={{ flexGrow: 0, flexDirection: 'column', width: 235, height: 420 }}>
              <ImageBackground
                resizeMode='stretch'
                source={require('../assets/Hauptbilder/Mm1.png')}
                style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
              >

                {/* Nacken */}
                <TouchableOpacity
                  onPress={() => { navigation.navigate('Pläne')} }
                  style={{ backgroundColor: '#0f05', width: '27%', height: '5%', top: '21%', left: '35%' }}
                />

                {/* Schulter links */}
                <TouchableOpacity
                  onPress={() => { navigation.navigate('Feed')} }
                  style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, top: '19%', left: '26%' }}
                />

              </ImageBackground>
            </View>
  
  
  
            <View style={{ flexGrow: 0, flexDirection: 'column', width: 235, height: 420 }}>
              <ImageBackground
                resizeMode='stretch'
                source={require('../assets/Hauptbilder/Mmh1.png')}
                style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
              >
              </ImageBackground>
            </View>
          </View> 
          {/* Style: 200, 490 */}
  
  
  
  
          {/* Die drei Buttons für Zuhause/Hanteln/Fitness */}
          <View style={{ flexDirection: 'row', marginBottom: 22, marginHorizontal: 20 }}>
  
  
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Feed') }}>
                <ButtonCard>
                  <View style={{ justifyContent: 'center' }}>
                    <Image source={require('../assets/HauptBilderÜbungen/ÜLinksArme.png')} style={{ width: 50, height: 50 }} />
                  </View>
                </ButtonCard>
              </TouchableOpacity>
            </View>
  
            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Challenges und Medallien') }}>
                <ButtonCard>
                  <View style={{ justifyContent: 'center' }}>
                    <Image source={require('../assets/HauptBilderÜbungen/ÜLinksBeine.png')} style={{ width: 50, height: 50 }} />
                  </View>
                </ButtonCard>
              </TouchableOpacity>
            </View>
  
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Aktivitäten') }}>
                <ButtonCard>
                  <View style={{ justifyContent: 'center' }}>
                    <Image source={require('../assets/HauptBilderÜbungen/ÜLinksBrust1.png')} style={{ width: 50, height: 50 }} />
                  </View>
                </ButtonCard>
              </TouchableOpacity>
            </View>
  
  
          </View>
  
        </View>
      </>
      }
      
      
      
      //Alle Übungen von alleUebungen.js
      data={alleUebungen}
      renderItem={({ item }) => (
        <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Übung1', item) }}>

            <CardUebungen>

              <View style={{ flexDirection: 'row' }}>

                <View style={{ flex: 1 }}>
                  <Image
                    style={{ height: 82.5, width: 82 }}
                    source={HauptBilderStyles.übungenBildLinks[item.BildLinks]} />
                </View>

                <View style={{ flex: 3, paddingLeft: 10, paddingTop: 5, paddingBottom: 7 }}>
                  <View style={{ flex: 1 }}></View>
                  <Text style={globalStyles.normalerTitle}>{item.ÜbungsName}</Text>

                  <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee' }}>
                    <Text style={globalStyles.basicBoldText}>Für:</Text>
                    <View style={{ paddingLeft: 100 }}>
                      <Text style={globalStyles.basicText}>{item.Für}</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                    <View style={{ paddingLeft: 30 }}>
                      <Text style={globalStyles.basicText}>{item.Schwierigkeit}</Text>
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
// 9. Button bei Übungen fixen (navigation.navigate)
// 10. BorderColor anpassen mit params
        // 11. Invisible Button/TO hinter Bild
// 12. TO hinter Bild Funktionen geben (Bild ändern && hide Element)
// 13. Buttons für Zuhause/Hanteln/Gym erstellen
// 14. Buttons Funktion geben (Bild ändern && hide Element)
// 15. Muskelmensch (Bild) anpassen (kleine Muskeln verdunkeln + Farben ändern)

// Fragen: Wie veröffentlichen? Schatten bei Cards?!? Daten in mehreren Files?! Invisible TO hinter Bild? Funktionen?!




// function UebungenHeader({ navigation }) {
//     return (
//       <>
//         <View style={globalStyles.containerWorkout}>
//           <Text style={globalStyles.GrosserTitle}>Übungen</Text>
  
//           {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln */}
//           <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
//             <View style={{ flexGrow: 0, flexDirection: 'column', width: 235, height: 420 }}>
//               <ImageBackground
//                 resizeMode='stretch'
//                 source={require('../assets/Hauptbilder/Mm1.png')}
//                 style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
//               >
//                 {/* Oberschenkel links */}
//                 <TouchableOpacity
//                   onPress={() => { navigation.navigate('Feed')} }
//                   style={{ backgroundColor: '#0f05', width: '5%', height: '10%', top: '50%', left: '25%' }}
//                 />
//               </ImageBackground>
//             </View>
  
  
  
//             <View style={{ flexGrow: 0, flexDirection: 'column', width: 235, height: 420 }}>
//               <ImageBackground
//                 resizeMode='stretch'
//                 source={require('../assets/Hauptbilder/Mmh1.png')}
//                 style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
//               >
//               </ImageBackground>
//             </View>
//           </View> 
//           {/* Style: 200, 490 */}
  
  
  
  
//           {/* Die drei Buttons für Zuhause/Hanteln/Fitness */}
//           <View style={{ flexDirection: 'row', marginBottom: 22, marginHorizontal: 20 }}>
  
  
//             <View style={{ flex: 1 }}>
//               <TouchableOpacity onPress={() => { navigation.navigate('Herausforderungen') }}>
//                 <ButtonCard>
//                   <View style={{ justifyContent: 'center' }}>
//                     <Image source={require('../assets/HauptBilderÜbungen/ÜLinksArme.png')} style={{ width: 50, height: 50 }} />
//                   </View>
//                 </ButtonCard>
//               </TouchableOpacity>
//             </View>
  
//             <View style={{ flex: 1, marginHorizontal: 20 }}>
//               <TouchableOpacity onPress={() => { navigation.navigate('Challenges und Medallien') }}>
//                 <ButtonCard>
//                   <View style={{ justifyContent: 'center' }}>
//                     <Image source={require('../assets/HauptBilderÜbungen/ÜLinksBeine.png')} style={{ width: 50, height: 50 }} />
//                   </View>
//                 </ButtonCard>
//               </TouchableOpacity>
//             </View>
  
//             <View style={{ flex: 1 }}>
//               <TouchableOpacity onPress={() => { navigation.navigate('Aktivitäten') }}>
//                 <ButtonCard>
//                   <View style={{ justifyContent: 'center' }}>
//                     <Image source={require('../assets/HauptBilderÜbungen/ÜLinksBrust1.png')} style={{ width: 50, height: 50 }} />
//                   </View>
//                 </ButtonCard>
//               </TouchableOpacity>
//             </View>
  
  
//           </View>
  
//         </View>
//       </>
//     )
//   }





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