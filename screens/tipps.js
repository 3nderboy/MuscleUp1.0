import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import { TippsCard } from '../styles/cards';

import { UserInformationCard } from '../styles/cards';
import { TippsModal } from '../styles/modals';
import { TippsBilder } from '../data/alleBilder';
import { alletippsreihe1, alletippsreihe2, alletippsreihe3 } from '../data/alleTipps';

export default function Tipps() {
  
  const [modalTippR1, setModalTippR1] = useState();   //Hook für die Modals der ersten Reihe (oben)
  const [modalTippR2, setModalTippR2] = useState();   //Hook für die Modals der zweiten Reihe (zweite von oben)
  const [modalTippR3, setModalTippR3] = useState();   //Hook für die Modals der dritten Reihe (dritte von oben)

  return (
    <View style={{ flex: 1, marginVertical: 0, marginHorizontal: 0 }}>
      <ScrollView>
        {/* Titel oben mit türkisenem Background: */}
        <View style={{ flex: 1, position: 'absolute', backgroundColor: 'turquoise', top: 0, bottom: 1080, left: 0, right: 0, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, zIndex: 1 }}>
          <View style={{ alignItems: 'center', paddingTop: 15 }}>
            <Text style={globalStyles.mittelgrosserTitleWhite}>Alles was du wissen musst!</Text>
          </View>
        </View>
        <View>
        
          <View style={{ flex: 1, alignItems: 'center', paddingTop: 70, paddingBottom: 20, zIndex: 1 }}>
            <UserInformationCard>
              <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                <Text style={globalStyles.basicBoldText}>Finde hier mit diesen mehr als 15 Tipps,</Text>
                <Text style={globalStyles.basicBoldText}>die richtigen Hilfen und Ideen,</Text>
                <Text style={globalStyles.basicBoldText}>wie du am effizientesten und am besten</Text>
                <Text style={globalStyles.basicBoldText}>für deinen Körper mit Hilfe</Text>
                <Text style={globalStyles.basicBoldText}>von MuscleUp trainieren kannst.</Text>
              </View>
            </UserInformationCard>
          </View>
        
          {/* Erste Reihe mit Tipps (Tipps für den Anfang): */}
          <View style={{ marginVertical: 12, paddingLeft: 12 }}>
            <Text style={globalStyles.mittelgrosserTitle}>Tipps für den Anfang:</Text>
            <Text style={globalStyles.basicText}>Alle wichtigen Tipps, die du wissen solltest, bevor du mit deinem Körperumbau loslegst</Text>
          </View>

          <View style={{ paddingTop: 11, paddingLeft: 0, }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                alletippsreihe1.map(
                  tipp => {
                    return <View key={tipp.key} style={{ paddingHorizontal: 12 }}>
                            <TouchableOpacity key={tipp.key} onPress={() => setModalTippR1(tipp)}>
                              <TippsCard>

                                <View style={{ flexDirection: 'column' }}>
                                  
                                  <Image 
                                    style={{ height: 131.3, width: 244.7 }}
                                    source={TippsBilder.startTipps}
                                  /> 
                                  
                                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 3 }}>
                                    <Text style={globalStyles.basicText}>{tipp.tippnummer}</Text>
                                  </View>
                                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                    <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                                  </View>
                                </View>
                              
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

        

          {/* Zweite Reihe mit Tipps (Tipps über das Training): */}
          <View style={{ paddingTop: 49 }}>
            <View style={{ paddingLeft: 12 }}>
              <Text style={globalStyles.mittelgrosserTitle}>Tipps über das Training:</Text>
              <Text style={globalStyles.basicText}>Vermeide kleine und unnötige Fehler und hole das maximum mit deinen Workouts heraus</Text>
            </View>

            <View style={{ paddingTop: 20, paddingLeft: 0, }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  alletippsreihe2.map(
                    tipp => {
                      return <View key={tipp.key} style={{ paddingHorizontal: 12 }}>
                              <TouchableOpacity key={tipp.key} onPress={() => setModalTippR2(tipp)}>
                                <TippsCard>

                                  <View style={{ flexDirection: 'column' }}>
                                    
                                    <Image 
                                      style={{ height: 131.3, width: 244.9 }}
                                      resizeMode='stretch'
                                      resizeMethod='auto'
                                      source={TippsBilder.trainingTipps}
                                    /> 
                                    
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 3 }}>
                                      <Text style={globalStyles.basicText}>{tipp.tippnummer}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                      <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                                    </View>
                                  </View>
                                
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



          {/* Dritte Reihe mit Tipps (Tipps zur Ernährung): */}
          <View style={{ paddingTop: 49 }}>
            <View style={{ paddingLeft: 12 }}>
              <Text style={globalStyles.mittelgrosserTitle}>Tipps zur Ernährung:</Text>
              <Text style={globalStyles.basicText}>Nicht nur das richtige Training, sondern auch eine richtige Ernährung, spielen eine wichtige Rolle für deinen Körper</Text>
            </View>

            <View style={{ paddingTop: 20, paddingLeft: 0, }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  alletippsreihe3.map(
                    tipp => {
                      return <View key={tipp.key} style={{ paddingHorizontal: 12, paddingBottom: 40 }}>
                              <TouchableOpacity key={tipp.key} onPress={() => setModalTippR3(tipp)}>
                                <TippsCard>

                                  <View style={{ flexDirection: 'column' }}>
                                    
                                    <Image 
                                      style={{ height: 131.3, width: 244.7 }}
                                      source={TippsBilder.ernährungTipps}
                                    /> 
                                    
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 3 }}>
                                      <Text style={globalStyles.basicText}>{tipp.tippnummer}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                                      <Text style={globalStyles.basicTitle}>{tipp.titel}</Text>
                                    </View>
                                  </View>
                                
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