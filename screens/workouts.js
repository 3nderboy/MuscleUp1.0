import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import ButtonCard from '../styles/buttonCard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';
import { Ionicons } from '@expo/vector-icons';

import { MuskelmenschBilderWorkout, HauptBilder, dreiButtons } from '../data/alleBilder';
import { alleWorkouts, brustworkouts, schulternworkouts } from '../data/alleWorkouts';
//import { alleUebungen } from '../data/alleUebungen';


export default function Workouts({ route, navigation }) {

  const [imageNameFront, setImageNameFront] = useState(MuskelmenschBilderWorkout['muskelmodellWV']);
  const [imageNameBack, setImageNameBack] = useState(MuskelmenschBilderWorkout['muskelmodellWH']);
  const [Workouts, setWorkouts] = useState(alleWorkouts);
  const [how, setHow] = useState();   //Hook für die drei Buttons (Zuhause/Mit Hanteln/Mit Geräten)
  const [undertitle, setUndertitle] = useState('Alle Workouts');   //Hook für den Untertitel, der zeigt, was gerade dargestellt wird

  const workoutsFilteredByHow = Workouts.filter(
    (workouts) => {
      return !how || workouts.Wie === how
    }
  )

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={globalStyles.containerWorkout}>
            <Text style={globalStyles.GrosserTitle}>Workouts</Text>

            {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <View style={{ flexGrow: 0, flexDirection: 'column', marginTop: -20, marginBottom: -120 }}>
                <ImageBackground
                  resizeMode='stretch'
                  resizeMethod='auto'
                  source={imageNameFront}
                  style={{ flex: 1, width: '80.5%', height: '80.5%', aspectRatio: 0.4, left: 46, top: 4 }}
                >

                  {/* Nacken */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellnacken']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                      //setWorkouts(irgendwelche Workouts)
                      setUndertitle('Nacken-Workouts');
                    }}
                    style={{ backgroundColor: '#0f05', width: '32%', height: '3.5%', top: '17%', left: '24%' }}
                  />

                  {/* Schulter links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellschulterH']);
                      setWorkouts(schulternworkouts);
                      setUndertitle('Schultern-Workouts');
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, rotation: 30, top: '15%', left: '15%' }}
                  />

                  {/* Schulter rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellschulterH']);
                      setWorkouts(schulternworkouts);
                      setUndertitle('Schultern-Workouts');
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, rotation: 330, top: '7%', left: '57%' }}
                  />

                  {/* Brust */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellbrust']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                      setWorkouts(brustworkouts);
                      setUndertitle('Brust-Workouts');
                    }}
                    style={{ backgroundColor: '#0f05', width: '33%', height: '8%', borderRadius: 8, top: '0.8%', left: '24%' }}
                  />

                </ImageBackground>
              </View>



              {/* Muskelmensch von hinten mit TouchableOpacities: */}
              <View style={{ flexGrow: 0, flexDirection: 'column', marginTop: -20, marginBottom: -120 }}>
                <ImageBackground
                  resizeMode='stretch'
                  resizeMethod='auto'
                  source={imageNameBack}
                  style={{ flex: 1, width: '80.5%', height: '80.5%', aspectRatio: 0.4, right: 0 }}
                >

                  {/* Schultern */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellbrust']);
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                    }}
                    style={{ backgroundColor: '#0f05', width: '32%', height: '5%', borderRadius: 8, top: '17.5%', left: '24.5%' }}
                  />

                </ImageBackground>
              </View>
            </View>
            {/* Style: 200, 490 */}



            {/* Die drei Buttons für Zuhause/Hanteln/Geräte */}
            <View style={{ flexDirection: 'row', marginBottom: 22 }}>


              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Zuhause');
                  }}>
                  <ButtonCard>
                    <View style={{ flexDirection: 'row' }}>
                      <Image 
                        source={dreiButtons['mithanteln']} 
                        style={{ width: '100%', height: '100%', aspectRatio: 1.2 }} 
                        resizeMode='stretch'
                        resizeMethod='auto' 
                      />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit Hanteln');
                  }}>
                  <ButtonCard>
                    <View style={{ flexDirection: 'row' }}>
                      <Image 
                        source={dreiButtons['mithanteln']} 
                        style={{ width: '100%', height: '100%', aspectRatio: 1.2 }} 
                        resizeMode='stretch'
                        resizeMethod='auto' 
                      />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit Geräten');
                  }}>
                  <ButtonCard>
                    <View style={{ flexDirection: 'row' }}>
                      <Image 
                        source={dreiButtons['mithanteln']} 
                        style={{ width: '100%', height: '100%', aspectRatio: 1.2 }} 
                        resizeMode='stretch'
                        resizeMethod='auto' 
                      />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>


            </View>



            {/* Zurücksetzt-Button der Muskelmenschen */}
            <View style={{ paddingTop: 15, paddingBottom: 15, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                setImageNameFront(MuskelmenschBilderWorkout['muskelmodellWV']);
                setImageNameBack(MuskelmenschBilderWorkout['muskelmodellWH']);
                setWorkouts(alleWorkouts);
                setHow(undefined);
                setUndertitle('Alle Workouts');
                }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Ionicons name='ios-refresh' size={29} color='grey' />
                  </View>
                  <View style={{ paddingHorizontal: 7, paddingTop: 3 }}>
                    <Text style={globalStyles.basicTitle}>Zurücksetzen</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>



            {/* Untertitel: */}
            <View style={{ paddingLeft: 5, paddingTop: 18 }}>
              <Text style={globalStyles.mittelgrosserTitle}>{undertitle}</Text>
            </View>

          </View>
        </>
      }
      data={workoutsFilteredByHow}
      renderItem={(props) => <WorkoutItem item={props.item} navigation={navigation} />}
    />
  );
}


//Die Workouts, welche unten am Screen gelistet werden (die Box):
function WorkoutItem(props) {
  const { item, navigation } = props;

  return (
    <View style={{ paddingTop: 2, paddingBottom: 20, paddingHorizontal: 10 }}>
      <TouchableOpacity onPress={() => { navigation.navigate('WorkoutScreen', item) }}>

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
  )
}