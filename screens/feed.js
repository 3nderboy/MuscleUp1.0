import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, TextInput, AsyncStorage, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalstyle';
import { Timer } from './Nebenscreens/Wabsolvieren';

import { UserInformationCard } from '../styles/cards';
import { ExitButton, ProfilButton, DeleteProfilButton, ErstellenButton } from '../styles/buttons';


export default function Feed({ route, navigation }) {
  
  const [modalOpen, setModalOpen] = useState(false);
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
            <View style={{ flex: 1, backgroundColor: 'turquoise', paddingBottom: 50, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, zIndex: 1  }}>
              <View style={globalStyles.containerNormal}>
                <Text style={globalStyles.mittelgrosserTitleWhite}>Willkommen bei MuscleUp, {name}</Text>

                <View style={{ flex: 1, alignItems: 'center', paddingTop: 25, paddingBottom: 0, marginBottom: -90, zIndex: -1 }}>
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
                      <Text style={globalStyles.basicTitle}>Du trainierst seit dem:</Text>
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
                      <DeleteProfilButton text='Profil löschen' onPress={() => remove()} />
                    </View>

                    


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

              </View>
            </View>
        
            
            
            
            <View style={{ paddingTop: 210 }}>
              <View style={globalStyles.container1}>
                <Text style={globalStyles.basicText}>Feed ist hier</Text>
                <Ionicons name="md-star" size={30} color='blue' />
                <Button 
                    title='Details haha'
                    onPress={() => navigation.push('Details', { name: 'Details haha' })}
                />
                <Button 
                    title='Details nooo'
                    onPress={() => navigation.push('Details', { name: 'Details nooo' })}
                />
                <Button 
                    title='Zu Aktivitäten'
                    onPress={() => {
                        navigation.navigate('Aktivitäten')
                    }}
                />
                <Button 
                    title='Meine Workouts'
                    onPress={() => {
                        navigation.navigate('Eigene Workouts')
                    }}
                />
                <Button 
                    title='Workouts'
                    onPress={() => {
                        navigation.navigate('Workouts')  //('Übung1', { ÜbungsName: 'hello' })
                    }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
    );
}
