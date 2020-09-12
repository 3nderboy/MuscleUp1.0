import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import ButtonCard from '../styles/buttonCard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';
import { Ionicons } from '@expo/vector-icons';

import { alleUebungen, allemithanteln, BrustUebungen, SchulternUebungen } from '../data/alleUebungen';
import { MuskelmenschBilder, HauptBilder, dreiButtons } from '../data/alleBilder';

export default function Uebungen({ route, navigation }) {

  const [imageNameFront, setImageNameFront] = useState(MuskelmenschBilder['muskelmodellV']);    //Hook für das Updaten der Bilder des Muskelmenschen von vorne
  const [imageNameBack, setImageNameBack] = useState(MuskelmenschBilder['muskelmodellH']);    //Hook für das Updaten der Bilder des Muskelmenschen von hinten
  const [Übungen, setÜbungen] = useState(alleUebungen);   //Hook für die Anzeige der passenden Übungen je nach Muskel
  const [how, setHow] = useState();   //Hook für die drei Buttons (Zuhause/Mit Hanteln/Mit Geräten)
  const [undertitle, setUndertitle] = useState('Alle Übungen');   //Hook für den Untertitel, der zeigt, was gerade dargestellt wird

  const uebungenFilteredByHow = Übungen.filter(
    (uebung) => {
      return !how || uebung.Wie === how
    }
  )

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={globalStyles.containerWorkout}>
            <Text style={globalStyles.GrosserTitle}>Übungen</Text>

            {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <View style={{ flexGrow: 0, flexDirection: 'column', width: 198, height: 498 }}>
                <ImageBackground
                  resizeMode='stretch'
                  source={imageNameFront}
                  style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                >

                  {/* Nacken */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellnacken']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setUndertitle('Nacken-Übungen');
                    }}
                    style={{ backgroundColor: '#0f05', width: '37%', height: '4.5%', top: '21%', left: '32%' }}
                  />

                  {/* Schulter links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellschulterH']);
                      setÜbungen(SchulternUebungen);
                      setUndertitle('Schultern-Übungen');
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, rotation: 30, top: '20%', left: '20%' }}
                  />

                  {/* Schulter rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellschulterH']);
                      setÜbungen(SchulternUebungen);
                      setUndertitle('Schultern-Übungen');
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, rotation: 330, top: '12%', left: '72%' }}
                  />

                  {/* Brust */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellbrust']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(BrustUebungen);
                      setUndertitle('Brust-Übungen');
                    }}
                    style={{ backgroundColor: '#0f05', width: '42%', height: '9.5%', borderRadius: 8, top: '5.2%', left: '29.3%' }}
                  />

                </ImageBackground>
              </View>



              {/* Muskelmensch von hinten mit TouchableOpacities: */}
              <View style={{ flexGrow: 0, flexDirection: 'column', width: 198, height: 498 }}>
                <ImageBackground
                  resizeMode='stretch'
                  source={imageNameBack}
                  style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                >

                  {/* Schultern */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellbrust']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellonclickH']);
                    }}
                    style={{ backgroundColor: '#0f05', width: '40%', height: '7%', borderRadius: 8, top: '21%', left: '30%' }}
                  />

                </ImageBackground>
              </View>
            </View>
            {/* Style: 200, 490 */}



            {/* Die drei Buttons für Zuhause/Hanteln/Geräte */}
            <View style={{ flexDirection: 'row', marginBottom: 22, marginHorizontal: 20 }}>


              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Zuhause');
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={dreiButtons['mithanteln']} style={{ width: 101, height: 90 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, marginHorizontal: 0, paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit Hanteln');
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={dreiButtons['mithanteln']} style={{ width: 101, height: 90 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit Geräten');
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={dreiButtons['mithanteln']} style={{ width: 101, height: 90 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>


            </View>



            {/* Zurücksetzt-Button der Muskelmenschen */}
            <View style={{ paddingTop: 15, paddingBottom: 15, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                setImageNameFront(MuskelmenschBilder['muskelmodellV']);
                setImageNameBack(MuskelmenschBilder['muskelmodellH']);
                setÜbungen(alleUebungen);
                setHow(undefined);  // geht auch: null, false
                setUndertitle('Alle Übungen');
                }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Ionicons name='ios-refresh' size={29} color='grey' />
                  </View>
                  <View style={{ paddingHorizontal: 7, paddingTop: 3 }}>
                    <Text style={globalStyles.basicTitle}>Zurücksetzen</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>



            {/* Untertitel: */}
            <View style={{ paddingLeft: 5, paddingTop: 18 }}>
              <Text style={globalStyles.mittelgrosserTitle}>{undertitle}</Text>
            </View>

          </View>
        </>
      }
      data={uebungenFilteredByHow}
      renderItem={(props) => <UebungItem item={props.item} navigation={navigation} />}
    />
  );
}


//Die Übungen, welche unten am Screen gelistet werden (die Box):
export function UebungItem(props) {
  const { item, navigation } = props;

  return (
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
                <View style={{ paddingLeft: 28 }}>
                  <Text style={globalStyles.basicText}>{item.Schwierigkeit} / 5</Text>
                </View>
              </View>
            </View>

          </View>

        </CardUebungen>

      </TouchableOpacity>
    </View>
  )
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

// Fragen: Wie veröffentlichen? lange Zeile mit Umschlag? Die 3 Buttons? useState exportieren?




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