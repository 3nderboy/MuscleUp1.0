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
              <View style={{ flexGrow: 0, flexDirection: 'column', width: 198, height: 498 }}>
                <ImageBackground
                  resizeMode='stretch'
                  source={imageNameFront}
                  style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                >

                  {/* Nacken */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellnacken']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                      //setWorkouts(irgendwelche Workouts)
                    }}
                    style={{ backgroundColor: '#0f05', width: '37%', height: '4.5%', top: '21%', left: '32%' }}
                  />

                  {/* Schulter links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellschulterH']);
                      setWorkouts(schulternworkouts);
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, rotation: 30, top: '20%', left: '20%' }}
                  />

                  {/* Schulter rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellschulterH']);
                      setWorkouts(schulternworkouts);
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, rotation: 330, top: '12%', left: '72%' }}
                  />

                  {/* Brust */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellbrust']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                      setWorkouts(brustworkouts);
                    }}
                    style={{ backgroundColor: '#0f05', width: '42%', height: '9.5%', borderRadius: 8, top: '5.2%', left: '29.3%' }}
                  />

                </ImageBackground>
              </View>



              {/* Muskelmensch von hinten mit TouchableOpacities: */}
              <View style={{ flexGrow: 0, flexDirection: 'column', width: 198, height: 498 }}>
                <ImageBackground
                  resizeMode='stretch'
                  source={imageNameBack}
                  style={{ flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                >

                  {/* Schultern */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellbrust']);
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                    }}
                    style={{ backgroundColor: '#0f05', width: '40%', height: '7%', borderRadius: 8, top: '21%', left: '30%' }}
                  />

                </ImageBackground>
              </View>
            </View>
            {/* Style: 200, 490 */}



            {/* Die drei Buttons für Zuhause/Hanteln/Geräte */}
            <View style={{ flexDirection: 'row', marginBottom: 22, marginHorizontal: 20 }}>


              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Zuhause');
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={dreiButtons['mithanteln']} style={{ width: 101, height: 90 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit Hanteln');
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={dreiButtons['mithanteln']} style={{ width: 101, height: 90 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit Geräten');
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={dreiButtons['mithanteln']} style={{ width: 101, height: 90 }} />
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
                }}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Ionicons name='ios-refresh' size={29} color='grey' />
                  </View>
                  <View style={{ paddingHorizontal: 7 }}>
                    <Text style={globalStyles.basicTitle}>Zurücksetzen</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
                  <Text style={globalStyles.basicText}>{item.Dauer}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                <View style={{ paddingLeft: 27 }}>
                  <Text style={globalStyles.basicText}>{item.Schwierigkeit}</Text>
                </View>
              </View>
            </View>

          </View>

        </CardUebungen>

      </TouchableOpacity>
    </View>
  )
}