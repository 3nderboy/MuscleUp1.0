import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import CardUebungen from '../../styles/uebungencard';
import { HauptBilderStyles } from '../../styles/HauptBilderStyle';
import { StartWorkoutButton } from '../../styles/buttons';

import { alleWorkouts, brustworkouts } from '../../data/alleWorkouts';
import { UebungItem } from '../uebungen';

export default function WorkoutScreen({ route, navigation }) {

  //Workout-data (alleWorkouts.js):
  const { WorkoutName, Für, Sonst, Beschreibung, Wie, Dauer, Schwierigkeit, Sätze, Pausendauer, Wiederholungen, uebungen } = route.params;

  return (
      <FlatList 
        ListHeaderComponent={<>
        <View style={{ paddingLeft: 20, paddingRight: 20, padding: 10 }}>
          
          <View style={{ flex: 0 }}>

            <View style={{ flexDirection: 'row' }}>
              <Text style={globalStyles.basicTitle}>Trainiert{'\n'}hauptsächlich:</Text>
              <View style={{ paddingTop: 28, paddingLeft: 36 }}>
                <Text style={globalStyles.basicText}>{Für}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 19 }}>
              <Text style={globalStyles.basicTitle}>Trainiert auch:</Text>
              <View style={{ paddingTop: 2, paddingLeft: 37 }}>
                <Text style={globalStyles.basicText}>{Sonst}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'column', paddingTop: 19 }}>
              <Text style={globalStyles.basicTitle}>Beschreibung:</Text>
              <View style={{ paddingTop: 2 }}>
                <Text style={globalStyles.basicText}>{Beschreibung}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 19 }}>
              <Text style={globalStyles.basicTitle}>Wie:</Text>
              <View style={{ paddingTop: 2, paddingLeft: 121 }}>
                <Text style={globalStyles.basicText}>{Wie}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 19 }}>
              <Text style={globalStyles.basicTitle}>Dauer (in etwa):</Text>
              <View style={{ paddingTop: 2, paddingLeft: 25.5 }}>
                <Text style={globalStyles.basicText}>{Dauer}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 19 }}>
              <Text style={globalStyles.basicTitle}>Schwierigkeit:</Text>
              <View style={{ paddingTop: 2, paddingLeft: 43 }}>
                <Text style={globalStyles.basicText}>{Schwierigkeit}</Text>
              </View>
            </View>

            <View style={{ paddingTop: 19, paddingBottom: 65 }}>
              <StartWorkoutButton 
                text='Workout starten'
                onPress={() => {navigation.navigate('Wabsolvieren', route.params)}}
              />
            </View>

            <View style={{ flexDirection: 'row', paddingBottom: 0, }}>
              <Text style={globalStyles.basicTitle}>Die Übungen zu diesem Workout:</Text>
            </View>           



          </View>

        </View>
        </>}
        data={uebungen}
        renderItem={(props) => <UebungItem item={props.item} navigation={navigation} />}
      />
  );
}
