import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal, FlatList, AsyncStorage } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { NeuesWorkoutButton } from '../../styles/buttons';
import CardUebungen from '../../styles/uebungencard';

import { NeuesWorkoutModal } from '../../styles/modals';
import { DeleteProfilButton } from '../../styles/buttons';
import { AbbrechenButton } from '../../styles/buttons';
import { ExitButton } from '../../styles/buttons';


export default function OwnWorkout({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [Workouts, setWorkouts] = useState([]);

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem('CustomWorkouts');
      if(storedWorkouts) {
        setWorkouts(JSON.parse(storedWorkouts));
      } else {
        setWorkouts([]);
      }
    } catch {}
  }

  useEffect(() => {loadWorkouts()}, [])

  const handleAddWorkout = (newWorkout) => {
    newWorkout.key = Math.random().toString();  //Nicht sichere Variante für random key --> Neu machen!
    setWorkouts((currentWorkouts) => {
      const newWorkouts = [newWorkout, ...currentWorkouts];
      AsyncStorage.setItem('CustomWorkouts', JSON.stringify(newWorkouts));
      return newWorkouts;
    });                                     //currentWorkouts = bisherige Workouts (Beispiel + schon erstellte)
    setModalOpen(false);                        //Schliesst Modal beim Klick auf ''Erstellen!''-Button
  }

  const remove = async () => {
    try {
      await AsyncStorage.removeItem('CustomWorkouts');
      setWorkouts([]);
    } catch(error) {
      alert(error);
    } finally {
      setWorkouts([]);
    }
  }

  //Alle Workouts löschen Button:
  // const handleDeleteWorkouts = () => {
  //   AsyncStorage.setItem('CustomWorkouts', JSON.stringify([]));
  //   setWorkouts([]);
  // }

  return (
    <View style={{ flex: 1, marginHorizontal: 12, marginTop: 12 }}>
      <Text style={globalStyles.GrosserTitle}>Eigene Workouts</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flexGrow: 0, paddingTop: 15 }}>

          <NeuesWorkoutModal
            visible={modalOpen}
            onPressExit={() => setModalOpen(false)}
            addWorkout={handleAddWorkout} //Schickt das addWorkout von oben (mit neuem Workout) an NeuesWorkoutModal (modals.js)
          //Von dort gelangen die Infos weiter an createWorkout.js 
          />
          <NeuesWorkoutButton onPress={() => setModalOpen(true)} />

        </View>
      </View>
      <View style={{ paddingTop: 5, paddingBottom: 10, alignItems: 'center' }}>
        <Text style={globalStyles.basicText}>Neues Workout erstellen</Text>
      </View>

      <View style={{ paddingVertical: 12, paddingHorizontal: 10 }}>
        <DeleteProfilButton text='Workouts löschen' onPress={() => setWarningModalOpen(true)} />
      </View>


      {/* Modal zur Warnung von löschen der eigenen Workouts: */}
      <Modal visible={warningModalOpen} animationType='slide' transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={globalStyles.warningModal}>
              <Text style={{...globalStyles.mittelgrosserTitle, textAlign: 'center'}}>Achtung!</Text>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={globalStyles.basicBoldText}>Möchtest du wirklich alle deine selbst</Text>
              <Text style={globalStyles.basicBoldText}>Erstellten Workouts löschen?</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <AbbrechenButton text='Abbrechen' onPress={() => setWarningModalOpen(false)}/>
            </View>
            <View style={{ marginTop: 18 }}>
              <DeleteProfilButton text='Workouts löschen' onPress={() => {
                remove();
                setWarningModalOpen(false);
              }} />
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ paddingBottom: 12, }}>
        <Text style={globalStyles.mittelgrosserTitle}>Meine eigenen Workouts:</Text>
      </View>




      {/* Die eigens erstellten Workouts: */}
      <FlatList
        data={Workouts}
        renderItem={({ item }) => (
          <View style={{ paddingTop: 2, paddingBottom: 20, paddingHorizontal: 0 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('WorkoutScreen', item) }}>
              {/* item fehlt */}


              <CardUebungen>

                <View style={{ flexDirection: 'row' }}>

                  <View style={{ flex: 3, paddingLeft: 10, paddingTop: 5, paddingBottom: 7 }}>
                    <View style={{ flex: 1 }}></View>
                    <Text style={globalStyles.normalerTitle}>{item.WorkoutName}</Text>

                    <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee' }}>
                      <Text style={globalStyles.basicBoldText}>Für:</Text>
                      <View style={{ paddingLeft: 100 }}>
                        <Text style={globalStyles.basicText}>{item.Für}</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Text style={globalStyles.basicBoldText}>Dauer:</Text>
                      <View style={{ paddingLeft: 80 }}>
                        <Text style={globalStyles.basicText}>{item.Dauer}min</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                      <View style={{ paddingLeft: 27 }}>
                        <Text style={globalStyles.basicText}>{item.Schwierigkeit} / 5</Text>
                      </View>
                    </View>
                  </View>

                </View>

              </CardUebungen>

            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}