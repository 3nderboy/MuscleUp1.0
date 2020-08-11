import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import { TippsCard } from '../styles/cards';
import { Ionicons } from '@expo/vector-icons';

import { TippsModal } from '../styles/modals';
import { alletippsreihe1, alletippsreihe2, alletippsreihe3 } from '../data/alleTipps';

export default function Plaene() {
  
  const [modalTippR1, setModalTippR1] = useState();   //Hook für die Modals der ersten Reihe (oben)
  const [modalTippR2, setModalTippR2] = useState();   //Hook für die Modals der zweiten Reihe (zweite von oben)
  const [modalTippR3, setModalTippR3] = useState();   //Hook für die Modals der dritten Reihe (dritte von oben)

  return (
    <View style={{ flex: 1, marginVertical: 12, marginHorizontal: 0 }}>
      <ScrollView>
        <View>
        

        
          {/* Erste Reihe mit Tipps: */}
          <View style={{ paddingLeft: 12 }}>
            <Text style={globalStyles.mittelgrosserTitle}>Tipps zum Training:</Text>
            <Text style={globalStyles.basicText}>Alle wichtigen Tipps, die du vor einem Workout wissen solltest</Text>
          </View>

          <View style={{ paddingTop: 20, paddingLeft: 0, }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                alletippsreihe1.map(
                  tipp => {
                    return <View key={tipp.key} style={{ paddingHorizontal: 12 }}>
                            <TouchableOpacity key={tipp.key} onPress={() => setModalTippR1(tipp)}>
                              <TippsCard>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                  <Text style={globalStyles.basicText}>{tipp.tippnummer}</Text>
                                </View>
                                <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                              </TippsCard>
                            </TouchableOpacity>
                          </View>
                  }
                )
              }

              {!!modalTippR1 &&
                <TippsModal
                  visible={!!modalTippR1}
                  onPressExit={() => setModalTippR1(false)}
                  tippnummer={modalTippR1.tippnummer}
                  titel={modalTippR1.titel}
                  erklärung={modalTippR1.erklärung}
                />
              }
            </ScrollView>
          </View>

        

          {/* Zweite Reihe mit Tipps: */}
          <View style={{ paddingTop: 49 }}>
            <View style={{ paddingLeft: 12 }}>
              <Text style={globalStyles.mittelgrosserTitle}>Tipps zur Ernährung:</Text>
              <Text style={globalStyles.basicText}>Auch die Ernährung ist nebst einem strikten Trainingsplan wichtig</Text>
            </View>

            <View style={{ paddingTop: 20, paddingLeft: 0, }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  alletippsreihe2.map(
                    tipp => {
                      return <View key={tipp.key} style={{ paddingHorizontal: 12 }}>
                              <TouchableOpacity key={tipp.key} onPress={() => setModalTippR2(tipp)}>
                                <TippsCard>
                                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                    <Text style={globalStyles.basicText}>{tipp.tippnummer}</Text>
                                  </View>
                                  <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                                </TippsCard>
                              </TouchableOpacity>
                            </View>
                            }
                          )
                        }

                {!!modalTippR2 &&
                  <TippsModal
                    visible={!!modalTippR2}
                    onPressExit={() => setModalTippR2(false)}
                    tippnummer={modalTippR2.tippnummer}
                    titel={modalTippR2.titel}
                    erklärung={modalTippR2.erklärung}
                  />
                }
              </ScrollView>
            </View>
          </View>



          {/* Dritte Reihe mit Tipps: */}
          <View style={{ paddingTop: 49 }}>
            <View style={{ paddingLeft: 12 }}>
              <Text style={globalStyles.mittelgrosserTitle}>Tipps zum Muskelaufbau:</Text>
              <Text style={globalStyles.basicText}>Alles was du wissen musst, um zu verstehen, wie deine Muskeln an Masse zu nehmen</Text>
            </View>

            <View style={{ paddingTop: 20, paddingLeft: 0, }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  alletippsreihe3.map(
                    tipp => {
                      return <View key={tipp.key} style={{ paddingHorizontal: 12 }}>
                              <TouchableOpacity key={tipp.key} onPress={() => setModalTippR3(tipp)}>
                                <TippsCard>
                                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                    <Text style={globalStyles.basicText}>{tipp.tippnummer}</Text>
                                  </View>
                                  <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                                </TippsCard>
                              </TouchableOpacity>
                            </View>
                            }
                          )
                        }

                {!!modalTippR3 &&
                  <TippsModal
                    visible={!!modalTippR3}
                    onPressExit={() => setModalTippR3(false)}
                    tippnummer={modalTippR3.tippnummer}
                    titel={modalTippR3.titel}
                    erklärung={modalTippR3.erklärung}
                  />
                }
              </ScrollView>
            </View>
          </View>


        
        </View>
      </ScrollView>
    </View>
  );
}



// {
//   alletipps.map(
//     tipp => {
//       return <TouchableOpacity key={tipp.key} onPress={() => setModalTipp(tipp)}>
//                 <TippsCard>
//                   <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
//                     <Text style={globalStyles.basicTitle}>{tipp.tippnummer}</Text>
//                   </View>
//                   <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
//                 </TippsCard>
//               </TouchableOpacity>
//     }
//   )
// }

// {!!modalTipp &&
//   <TippsModal
//     visible={!!modalTipp}
//     onPressExit={() => setModalTipp(false)}
//     tippnummer={modalTipp.tippnummer}
//     titel={modalTipp.titel}
//     erklärung={modalTipp.erklärung}
//   />
// }

