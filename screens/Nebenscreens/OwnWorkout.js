import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { NeuesWorkoutButton } from '../../styles/buttons';
import CardUebungen from '../../styles/uebungencard';

import { NeuesWorkoutModal } from '../../styles/modals';


export default function OwnWorkout({ navigation }) {
    
  const [modalOpen, setModalOpen] = useState(false);

      return (
        <View style={globalStyles.containerNormal}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ flexGrow: 0, paddingTop: 15 }}>

                <NeuesWorkoutModal 
                  visible={modalOpen}
                  onPressExit={() => setModalOpen(false)}
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
          <View style={{ paddingTop: 2, paddingBottom: 20, paddingHorizontal: 5 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Feed')}}>
            {/* item fehlt */}

              
              <CardUebungen>

                <View style={{ flexDirection: 'row' }}>

                  <View style={{ flex: 3, paddingLeft: 10, paddingTop: 5, paddingBottom: 7 }}>
                    <View style={{ flex: 1 }}></View>
                    <Text style={globalStyles.normalerTitle}>Mein Workout!</Text>

                    <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee' }}>
                      <Text style={globalStyles.basicBoldText}>Für:</Text>
                      <View style={{ paddingLeft: 100 }}>
                        <Text style={globalStyles.basicText}>Bizeps</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Text style={globalStyles.basicBoldText}>Dauer:</Text>
                      <View style={{ paddingLeft: 80 }}>
                        <Text style={globalStyles.basicText}>50min</Text>
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                      <View style={{ paddingLeft: 27 }}>
                        <Text style={globalStyles.basicText}>3 / 5</Text>
                      </View>
                    </View>
                  </View>

                </View>

              </CardUebungen>

            </TouchableOpacity>
          </View>

        </View>
    );
}