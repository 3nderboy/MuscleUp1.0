import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, TextInput, AsyncStorage, Modal, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalstyle';
import { Timer } from './Nebenscreens/Wabsolvieren';

import { UserInformationCard } from '../styles/cards';
import { AufZuCard } from '../styles/cards';
import { AufZuBilder } from '../data/alleBilder';
import { ExitButton, ProfilButton, DeleteProfilButton, ErstellenButton, AbbrechenButton } from '../styles/buttons';


export default function Feed({ route, navigation }) {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [aimWeight, setAimWeight] = useState();
  const [height, setHeight] = useState();
  const [trainingSince, setTrainingSince] = useState();
  
  //Name, MomentanesGewicht, ZielGewicht, Grösse und SeitWann mit AsyncStorage:
  const save = async() => {
    try {
      await AsyncStorage.setItem('MyName', name);
      await AsyncStorage.setItem('MyWeight', weight);
      await AsyncStorage.setItem('MyAimWeight', aimWeight);
      await AsyncStorage.setItem('MyHeight', height);
      await AsyncStorage.setItem('MyTrainingSince', trainingSince);
    } catch(error) {
        alert(error);
    }
  }

  const load = async() => {
    try {
      let name = await AsyncStorage.getItem('MyName');
      let weight = await AsyncStorage.getItem('MyWeight');
      let aimWeight = await AsyncStorage.getItem('MyAimWeight');
      let height = await AsyncStorage.getItem('MyHeight');
      let trainingSince = await AsyncStorage.getItem('MyTrainingSince');

      if(name !== null) {
        setName(name);
      }
      if(weight !== null) {
        setWeight(weight);
      }
      if(aimWeight !== null) {
        setAimWeight(aimWeight);
      }
      if(height !== null) {
        setHeight(height);
      }
      if(trainingSince !== null) {
        setTrainingSince(trainingSince);
      }
    } catch(error) {
        alert(error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const remove = async() => {
    try {
      await AsyncStorage.removeItem('MyName');
      await AsyncStorage.removeItem('MyWeight');
      await AsyncStorage.removeItem('MyAimWeight');
      await AsyncStorage.removeItem('MyHeight');
      await AsyncStorage.removeItem('MyTrainingSince');
    } catch(error) {
        alert(error);
    } finally {
        setName('');
        setWeight('');
        setAimWeight('');
        setHeight('');
        setTrainingSince('');
    }
  }



  return (
        <View style={{ flex: 1, marginVertical: 0, marginHorizontal: 0 }}>
          <ScrollView>

            {/* Titel oben mit türkisem Background: */}
            <View style={{ flex: 1, position: 'absolute', backgroundColor: 'turquoise', top: 0, bottom: 1200, left: 0, right: 0, paddingBottom: 400, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, zIndex: 1  }}>
              <View style={{ paddingHorizontal: 30, alignItems: 'center' }}>
                <Text style={globalStyles.mittelgrosserTitleWhite}>Willkommen bei MuscleUp,</Text>
                <Text style={globalStyles.mittelgrosserTitleWhite}>{name}</Text>
              </View>
            </View>

                <View style={{ flex: 1, alignItems: 'center', paddingTop: 75, zIndex: 1 }}>
                  <UserInformationCard>
                    

                    {/* Die Infos, welche vom Modal übernommen werden: */}

                    <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                      <Text style={globalStyles.normalerTitle}>Dein Profil</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={globalStyles.basicTitle}>Dein Name:</Text>
                        <Text style={{
                          fontFamily: 'nunitoRegular',
                          fontSize: 16,
                          color: 'dimgrey',
                          paddingLeft: 30,
                          paddingRight: 10,
                          paddingTop: 3.2,
                        }}>{name}</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                      <Text style={globalStyles.basicTitle}>Dein Gewicht (in kg):</Text>
                      <Text style={{
                        fontFamily: 'nunitoRegular',
                        fontSize: 15,
                        color: 'dimgrey',
                        paddingLeft: 22,
                        paddingRight: 0,
                        paddingTop: 3.2
                      }}>{weight}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                      <Text style={globalStyles.basicTitle}>Dein Ziel-Gewicht (in kg):</Text>
                      <Text style={{
                        fontFamily: 'nunitoRegular',
                        fontSize: 15,
                        color: 'dimgrey',
                        paddingLeft: 22,
                        paddingRight: 0,
                        paddingTop: 3.2
                      }}>{aimWeight}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                      <Text style={globalStyles.basicTitle}>Deine Grösse (in m):</Text>
                      <Text style={{
                        fontFamily: 'nunitoRegular',
                        fontSize: 15,
                        color: 'dimgrey',
                        paddingLeft: 22,
                        paddingRight: 0,
                        paddingTop: 3.2
                      }}>{height}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                      <Text style={globalStyles.basicTitle}>Deine BMI:</Text>
                      <Text style={{
                        fontFamily: 'nunitoRegular',
                        fontSize: 15,
                        color: 'dimgrey',
                        paddingLeft: 22,
                        paddingRight: 0,
                        paddingTop: 3.2
                      }}>{Math.floor((parseFloat(weight) / (parseFloat(height)*parseFloat(height))) * 100) / 100}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                      <Text style={globalStyles.basicTitle}>Du trainierst seit:</Text>
                      <Text style={{
                        fontFamily: 'nunitoRegular',
                        fontSize: 15,
                        color: 'dimgrey',
                        paddingLeft: 22,
                        paddingRight: 0,
                        paddingTop: 3.2
                      }}>{trainingSince}</Text>
                    </View>

                    {/* Die Linie: */}
                    <View style={{ paddingVertical: 19 }}>
                      <View style={{ borderWidth: 1, borderColor: 'lightgrey', marginHorizontal: 25 }}></View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
                      <Text style={globalStyles.basicBoldText}>Es ist wichtig, seinen eigenen Fortschritt</Text>
                      <Text style={globalStyles.basicBoldText}>zu verfolgen und zu sehen, dass sich etwas</Text>
                      <Text style={globalStyles.basicBoldText}>ändert. Daher ist es von Vorteil, dein Profil</Text>
                      <Text style={globalStyles.basicBoldText}>jede Woche zu aktualisieren, um zu sehen,</Text>
                      <Text style={globalStyles.basicBoldText}>ob du auf einem gutem Weg bist.</Text>
                    </View>

                    <View style={{ paddingTop: 30, paddingBottom: 15 }}>
                      <ProfilButton text='Profil bearbeiten' onPress={() => setModalOpen(true)}/>
                    </View>

                    <View style={{ paddingBottom: 15 }}>
                      <DeleteProfilButton text='Profil löschen' onPress={() => setWarningModalOpen(true)} />
                    </View>


                    {/* Modal zur Warnung von löschen der Profil-Daten: */}
                    <Modal visible={warningModalOpen} animationType='slide' transparent={true}>
                      <View style={globalStyles.warningModal}>
                        <View style={{ alignItems: 'center' }}>
                          <Text style={globalStyles.mittelgrosserTitle}>Achtung!</Text>
                        </View>
                        <View style={{ alignItems: 'center', paddingTop: 20 }}>
                          <Text style={globalStyles.basicBoldText}>Möchtest du wirklich alle deine</Text>
                          <Text style={globalStyles.basicBoldText}>Profil-Daten löschen?</Text>
                        </View>
                        <View style={{ paddingHorizontal: 30, paddingTop: 18 }}>
                          <AbbrechenButton text='Abbrechen' onPress={() => setWarningModalOpen(false)}/>
                        </View>
                        <View style={{ paddingHorizontal: 30, paddingTop: 18 }}>
                          <DeleteProfilButton text='Profil löschen' onPress={() => {
                            remove();
                            setWarningModalOpen(false);
                          }} />
                        </View>
                      </View>
                    </Modal>

                    


                    {/* Das Modal um den Account zu erstellen: */}
                    <Modal visible={modalOpen} animationType='slide' transparent={true}>
                      <View style={globalStyles.neuesWorkoutModal}>
                        <ScrollView>
                          <View style={{ alignItems: 'center' }}>
                            <ExitButton title='Schliessen' onPress={() => setModalOpen(false)}/>
                            <View style={{ paddingTop: 20 }}>
                              <TextInput 
                                style={globalStyles.input}
                                placeholder='Dein Name' 
                                onChangeText={(text) => setName(text)}
                              />
                              <View style={{ paddingVertical: 10 }}></View>
                              <TextInput 
                                keyboardType='numeric'
                                style={globalStyles.input}
                                placeholder='Dein momentanes Gewicht (in kg)  ' 
                                onChangeText={(text) => setWeight(text)} 
                              />
                              <View style={{ paddingVertical: 10 }}></View>
                              <TextInput 
                                keyboardType='numeric'
                                style={globalStyles.input}
                                placeholder='Dein Ziel-Gewicht (in kg)' 
                                onChangeText={(text) => setAimWeight(text)} 
                              />
                              <View style={{ paddingVertical: 10 }}></View>
                              <TextInput 
                                keyboardType='numeric'
                                style={globalStyles.input}
                                placeholder='Deine Grösse (in Meter)' 
                                onChangeText={(text) => setHeight(text)} 
                              />
                              <View style={{ paddingVertical: 10 }}></View>
                              <TextInput 
                                style={globalStyles.input}
                                placeholder='Seit wann trainierst du?' 
                                onChangeText={(text) => setTrainingSince(text)} 
                              />
                              <View style={{ paddingVertical: 16 }}></View>
                              <ErstellenButton text='Profil speichern' onPress={() => {
                                save();
                                setModalOpen(false);
                              }} />
                            </View>
                          </View>
                        </ScrollView>
                      </View>
                    </Modal>

                  </UserInformationCard>
        
                </View> 

              
        
            
            
            
            <View style={{ paddingTop: 50 }}>
              <View style={globalStyles.container1}>
                
                <View style={{ paddingHorizontal: 0 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('Übungen', { screen: 'Eigene Workouts' }) }}>
                    <AufZuCard>
                      
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                          <Image 
                            style={{ height: 192, width: 361 }}
                            source={AufZuBilder.aufZuOwnWorkouts}
                          /> 
                        </View>
                      </View>
                      <View style={{ paddingLeft: 15, paddingVertical: 10 }}>
                        <Text style={globalStyles.normalerTitle}>Direkt zu deinen eigenen Workouts!</Text>
                      </View>

                    </AufZuCard>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingTop: 40 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('Übungen', { screen: 'Workouts' }) }}>
                    <AufZuCard>
                      
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                          <Image 
                            style={{ height: 192, width: 361 }}
                            source={AufZuBilder.aufZuWorkouts}
                          /> 
                        </View>
                      </View>
                      <View style={{ paddingLeft: 15, paddingRight: 106, paddingVertical: 10 }}>
                        <Text style={globalStyles.normalerTitle}>Direkt zu den Workouts!</Text>
                      </View>

                    </AufZuCard>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingTop: 40 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('Aktivitäten') }}>
                    <AufZuCard>
                      
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                          <Image 
                            style={{ height: 192, width: 361 }}
                            source={AufZuBilder.aufZuAbout}
                          /> 
                        </View>
                      </View>
                      <View style={{ paddingLeft: 15, paddingRight: 209, paddingVertical: 10 }}>
                        <Text style={globalStyles.normalerTitle}>Über die App</Text>
                      </View>

                    </AufZuCard>
                  </TouchableOpacity>
                </View>


                
                <Text style={globalStyles.basicText}>Feed ist hier</Text>
                <Ionicons name="md-star" size={30} color='blue' />
                <Button 
                    title='Details'
                    onPress={() => navigation.push('Details', { name: 'Details' })}
                />
                <Button 
                    title='Details nooo'
                    onPress={() => navigation.push('Details', { name: 'Details nooo' })}
                />
              </View>
            </View>
          </ScrollView>
        </View>
    );
}
