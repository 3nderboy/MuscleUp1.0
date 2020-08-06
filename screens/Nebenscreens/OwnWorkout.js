import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { NeuesWorkoutButton } from '../../styles/buttons';
import CardUebungen from '../../styles/uebungencard';

import { NeuesWorkoutModal } from '../../styles/modals';
import { exampleworkouts } from '../../data/alleWorkouts';


export default function OwnWorkout({ navigation }) {
    
  const [modalOpen, setModalOpen] = useState(false);
  const [Workouts, setWorkouts] = useState(exampleworkouts);

  const addWorkout = (newWorkout) => {
    newWorkout.key = Math.random().toString();  //Nicht sichere Variante für random key --> Neu machen!
    setWorkouts((currentWorkouts) => {
      return [newWorkout, ...currentWorkouts]
    });                                         //currentWorkouts = bisherige Workouts (Beispiel + schon erstellte)
    setModalOpen(false);                        //Schliesst Modal beim Klick auf ''Erstellen!''-Button
  }

      return (
        <View style={globalStyles.containerNormal}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ flexGrow: 0, paddingTop: 15 }}>

                <NeuesWorkoutModal 
                  visible={modalOpen}
                  onPressExit={() => setModalOpen(false)}
                  addWorkout={addWorkout} //Schickt das addWorkout von oben (mit neuem Workout) an NeuesWorkoutModal (modals.js)
                                          //Von dort gelangen die Infos weiter an createWorkout.js 
                />
                <NeuesWorkoutButton onPress={() => setModalOpen(true)}/>

              </View>
            </View>
            <View style={{ paddingTop: 5, paddingBottom: 30, alignItems: 'center' }}>
              <Text style={globalStyles.basicText}>Neues Workout erstellen</Text>
            </View>

            <View style={{ paddingBottom: 12, }}>
              <Text style={globalStyles.mittelgrosserTitle}>Meine eigenen Workouts:</Text>
            </View>



          {/* Die eigens erstellten Workouts: */}
            <FlatList 
              data={Workouts}
              renderItem={({ item }) => (
                <View style={{ paddingTop: 2, paddingBottom: 20, paddingHorizontal: 0 }}>
                  <TouchableOpacity onPress={() => { navigation.navigate('WorkoutScreen', item)}}>
                  {/* item fehlt */}

                    
                    <CardUebungen>

                      <View style={{ flexDirection: 'row' }}>

                        <View style={{ flex: 3, paddingLeft: 10, paddingTop: 5, paddingBottom: 7 }}>
                          <View style={{ flex: 1 }}></View>
                            <Text style={globalStyles.normalerTitle}>{ item.WorkoutName }</Text>

                          <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee' }}>
                            <Text style={globalStyles.basicBoldText}>Für:</Text>
                            <View style={{ paddingLeft: 100 }}>
                              <Text style={globalStyles.basicText}>{ item.Für }</Text>
                            </View>
                          </View>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={globalStyles.basicBoldText}>Dauer:</Text>
                            <View style={{ paddingLeft: 80 }}>
                              <Text style={globalStyles.basicText}>{ item.Dauer }</Text>
                            </View>
                          </View>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                            <View style={{ paddingLeft: 27 }}>
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
        </View>
    );
}