import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import ButtonCard from '../styles/buttonCard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';
import { MuskelmenschBilderWorkout, HauptBilder } from '../data/alleBilder';
import { alleWorkouts, brustworkouts } from '../data/alleWorkouts';
//import { alleUebungen } from '../data/alleUebungen';
import { Ionicons } from '@expo/vector-icons';

export default function Workouts({ route, navigation }) {

  const [imageNameFront, setImageNameFront] = useState(MuskelmenschBilderWorkout['muskelmodellWV']);
  const [imageNameBack, setImageNameBack] = useState(MuskelmenschBilderWorkout['muskelmodellWH']);
  const [Workouts, setWorkouts] = useState(alleWorkouts);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={globalStyles.containerWorkout}>
            <Text style={globalStyles.GrosserTitle}>Workouts</Text>

            {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <View style={{ flexGrow: 0, flexDirection: 'column', width: 198, height: 492 }}>
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
                      setWorkouts(brustworkouts);
                    }}
                    style={{ backgroundColor: '#0f05', width: '37%', height: '4.5%', top: '21%', left: '32%' }}
                  />

                  {/* Schulter links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellschulterH']);
                      setWorkouts();
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, top: '20%', left: '20%' }}
                  />

                  {/* Schulter rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellschulterH']);
                      setWorkouts();
                    }}
                    style={{ backgroundColor: '#0f05', width: '9%', height: '8%', borderRadius: 8, top: '12%', left: '72%' }}
                  />

                  {/* Brust */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilderWorkout['muskelmodellbrust']);
                      setImageNameBack(MuskelmenschBilderWorkout['muskelmodellonclickH']);
                      setWorkouts();
                    }}
                    style={{ backgroundColor: '#0f05', width: '42%', height: '9.5%', borderRadius: 8, top: '5.2%', left: '29.3%' }}
                  />

                </ImageBackground>
              </View>




              <View style={{ flexGrow: 0, flexDirection: 'column', width: 198, height: 492 }}>
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


            {/* Zurücksetzt-Button der Muskelmenschen */}
            <View style={{ paddingBottom: 35, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                setImageNameFront(MuskelmenschBilderWorkout['muskelmodellWV']);
                setImageNameBack(MuskelmenschBilderWorkout['muskelmodellWH']);
                setWorkouts(alleWorkouts);
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



            {/* Die drei Buttons für Zuhause/Hanteln/Geräte */}
            <View style={{ flexDirection: 'row', marginBottom: 22, marginHorizontal: 20 }}>


              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setWorkouts();
                  }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={HauptBilder['hauptbildarm']} style={{ width: 50, height: 50 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('WorkoutScreen') }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={HauptBilder['hauptbildbeine']} style={{ width: 50, height: 50 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Aktivitäten') }}>
                  <ButtonCard>
                    <View style={{ justifyContent: 'center' }}>
                      <Image source={HauptBilder['hauptbildbrust']} style={{ width: 50, height: 50 }} />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>


            </View>

          </View>
        </>
      }
      data={Workouts}
      renderItem={(props) => <WorkoutItem item={props.item} navigation={navigation} />}
    />
  );
}

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