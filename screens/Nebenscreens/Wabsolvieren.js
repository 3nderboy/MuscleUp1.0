import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';

import { FinishWorkoutButton } from '../../styles/buttons';
import { CardWabsolvieren } from '../../styles/cards';
import { WorkoutInformationCard } from '../../styles/cards';
import { Ionicons } from '@expo/vector-icons';

import { alleWorkouts, brustworkouts } from '../../data/alleWorkouts';

export default function Wabsolvieren({ route, navigation }) {
  const { WorkoutName, Sätze, Dauer, Pausendauer, Wiederholungen, WiederholungenmitHanteln, uebungen } = route.params;

  return (
    <ScrollView>
      <View style={globalStyles.containerWorkout}>
        <Text style={globalStyles.GrosserTitle}>{WorkoutName}</Text>

        <Timer />
        
        <WorkoutInfoBox 
          Dauer={Dauer} 
          Pausendauer={Pausendauer} 
          Wiederholungen={Wiederholungen} 
          WiederholungenmitHanteln={WiederholungenmitHanteln} 
        />

        {uebungen.map(
          (uebung, index) => (
            <UebungsCard key={index} Index={index + 1} ÜbungsName={uebung.ÜbungsName} Sätze={Sätze} />
          )
        )}
        <View style={{ marginTop: 40, marginBottom: 5 }}>
          <FinishWorkoutButton
            text='Workout beenden'
            onPress={() => {
              navigation.navigate('WorkoutScreen')
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};


//Workout-Info Box:
function WorkoutInfoBox(props) {
  const { Dauer, Pausendauer, Wiederholungen, WiederholungenmitHanteln } = props;
  
  return (
    <View style={{ paddingBottom: 30 }}>
      <WorkoutInformationCard>
        <View style={{ flex: 1, flexDirection: 'column' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={globalStyles.basicBoldText}>Gesamte Dauer (in etwa):</Text>
            <Text style={{
              fontFamily: 'nunitoRegular',
              fontSize: 15,
              color: 'dimgrey',
              paddingLeft: 0, //105 und ohne justifyContent: 'space-between'
              paddingRight: 0,
            }}>{Dauer}min</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 4 }}>
            <Text style={globalStyles.basicBoldText}>Pausendauer zwischen den Übungen:</Text>
            <Text style={{
              fontFamily: 'nunitoRegular',
              fontSize: 15,
              color: 'dimgrey',
              paddingLeft: 0,  //22
              paddingRight: 0,
            }}>{Pausendauer}sek</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 4 }}>
            <Text style={globalStyles.basicBoldText}>Anzahl Wiederholungen:</Text>
            <Text style={{
              fontFamily: 'nunitoRegular',
              fontSize: 15,
              color: 'dimgrey',
              paddingLeft: 0, //110.5
              paddingRight: 0,
            }}>{Wiederholungen}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 4 }}>
            <Text style={globalStyles.basicBoldText}>Anzahl Wiederholungen{'\n'}(bei Übungen mit Hanteln/Geräten):</Text>
            <Text style={{
              fontFamily: 'nunitoRegular',
              fontSize: 15,
              color: 'dimgrey',
              paddingLeft: 0, //33
              paddingTop: 22,
            }}>{WiederholungenmitHanteln}</Text>
          </View>
          
        </View> 
      </WorkoutInformationCard>
    </View>
  )
}


//CardWabsolvieren mit den passenden Infos:
function UebungsCard(props) {
  const {Index, ÜbungsName, Sätze} = props;

  return (
    <CardWabsolvieren>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={globalStyles.basicTitle}>{Index}. Übung</Text>
        <View>
          <Text style={{
              fontFamily: 'nunitoBold',
              fontSize: 18,
              color: 'dimgrey',
            }}>Sätze: {Sätze}</Text>
        </View> 
      </View>
      <Text style={globalStyles.basicText}>{ÜbungsName}</Text>
    </CardWabsolvieren>
  )
}


//Timer:
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(
    () => {
      const timeout = setTimeout(() => setSeconds(seconds + 1), 1000);
      return () => clearTimeout(timeout);
    },
    [seconds]
  )

  return (
    <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
      <Ionicons name="md-alarm" size={30} color='dimgrey' style={{ paddingRight: 10 }} />
      <View style={{ paddingTop: 2.5 }}>
        <Text style={globalStyles.basicTitle}>{convertSeconds(seconds)}</Text>
      </View>
    </View>
  )
}

function convertSeconds(seconds) {
  const min = Math.floor(seconds/60);
  const sec = seconds % 60;
  return `${min}:${sec < 10 ? '0' + sec : sec}`;
}



//route.params wird bei WorkoutScreen.js beim Button weitergeleitet.
//So können auch die Daten hier in Wabsolvieren verwendet werden.