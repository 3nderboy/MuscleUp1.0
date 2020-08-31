import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView, TextInput, AsyncStorage, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalstyle';
import { Timer } from './Nebenscreens/Wabsolvieren';

import { UserInformationCard } from '../styles/cards';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ExitButton, ProfilButton, DeleteProfilButton, ErstellenButton } from '../styles/buttons';

const ProfilValidation = yup.object({
  setName: yup.string()
    .required('hello')
    .min(3, 'Der Name sollte mind. 3 Buchstaben besitzen'),
});

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
        <View style={globalStyles.containerNormal}>
          <ScrollView>
            <View>
              <Text style={globalStyles.mittelgrosserTitle}>Willkommen bei MuscleUp, {name}</Text>

              <View style={{ flex: 1, alignItems: 'center', paddingTop: 25, paddingBottom: 150 }}>
                <UserInformationCard>
                  
                  {/* Die Infos, welche vom Modal übernommen werden: */}
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
                    <Text style={globalStyles.basicTitle}>Dein momentanes Gewicht:</Text>
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
                    <Text style={globalStyles.basicTitle}>Dein Ziel-Gewicht:</Text>
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
                    <Text style={globalStyles.basicTitle}>Deine Grösse:</Text>
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
                    }}>{Math.floor(setHeight / setWeight)}</Text>
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

                  <View style={{ paddingTop: 30, paddingBottom: 15, }}>
                    <ProfilButton text='Profil bearbeiten' onPress={() => setModalOpen(true)}/>
                  </View>

                  <DeleteProfilButton text='Profil löschen' onPress={() => remove()} />
                  


                  {/* Das Modal um den Account zu erstellen: */}
                  <Modal visible={modalOpen} animationType='slide' transparent={true}>
                    <View style={globalStyles.neuesWorkoutModal}>
                      <Formik
                        initialValues={{ setName: '' }}
                        validationSchema={ProfilValidation}
                      >
                        {(props) => (
                          <ScrollView>
                            <View style={{ alignItems: 'center' }}>
                              <ExitButton title='Schliessen' onPress={() => setModalOpen(false)}/>
                              <View style={{ paddingTop: 20 }}>
                                <TextInput 
                                  style={globalStyles.input}
                                  placeholder='Dein Name' 
                                  onChangeText={(text) => setName(text)} 
                                  value={props.values.title}
                                  onBlur={props.handleBlur('setName')}
                                />
                                <Text style={globalStyles.errorText}>{props.touched.setName && props.errors.setName}</Text>

                                <View style={{ paddingVertical: 10 }}></View>
                                <TextInput 
                                  style={globalStyles.input}
                                  placeholder='Dein momentanes Gewicht  ' 
                                  onChangeText={(text) => setWeight(text)} 
                                />
                                <View style={{ paddingVertical: 10 }}></View>
                                <TextInput 
                                  style={globalStyles.input}
                                  placeholder='Dein Ziel-Gewicht' 
                                  onChangeText={(text) => setAimWeight(text)} 
                                />
                                <View style={{ paddingVertical: 10 }}></View>
                                <TextInput 
                                  style={globalStyles.input}
                                  placeholder='Deine Grösse' 
                                  onChangeText={(text) => setHeight(text)} 
                                />
                                <View style={{ paddingVertical: 10 }}></View>
                                <TextInput 
                                  style={globalStyles.input}
                                  placeholder='Seit wann trainierst du?' 
                                  onChangeText={(text) => setTrainingSince(text)} 
                                />
                                <View style={{ paddingVertical: 14 }}></View>
                                <ErstellenButton text='Profil speichern' onPress={() => {
                                  save();
                                  setModalOpen(false);
                                }} />
                              </View>
                            </View>
                          </ScrollView>
                        )}
                      </Formik>
                    </View>
                  </Modal>

                </UserInformationCard>
      
              </View> 

            </View>
            
            
            
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
                      navigation.navigate('OwnWorkout')
                  }}
              />
              <Button 
                  title='Übungen'
                  onPress={() => {
                      navigation.navigate('Übungen')  //('Übung1', { ÜbungsName: 'hello' })
                  }}
              />
              </View>
          </ScrollView>
        </View>
    );
}
