import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { alleWorkouts, brustworkouts } from '../../data/alleWorkouts';
import CardUebungen from '../../styles/uebungencard';
import { HauptBilderStyles } from '../../styles/HauptBilderStyle';
import { alleUebungen, SchulternUebungen, BauchWorkout } from '../../data/alleUebungen';

export default function WorkoutScreen({ route, navigation }) {

  const { WorkoutName, Für, Sonst, Beschreibung, Wie, Dauer, Schwierigkeit, Sätze, Pausendauer, Wiederholungen, Übung1 } = route.params;

  //const [showÜbungen, setshowÜbungen] = useState();

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

            <View style={{ flexDirection: 'row', paddingTop: 19, paddingBottom: 65, }}>
              <Text style={globalStyles.basicTitle}>Schwierigkeit:</Text>
              <View style={{ paddingTop: 2, paddingLeft: 43 }}>
                <Text style={globalStyles.basicText}>{Schwierigkeit}</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', paddingBottom: 0, }}>
              <Text style={globalStyles.basicTitle}>Übung1 (geplant)</Text>
            </View>           



          </View>

        </View>
        </>}
        data={BauchWorkout}
        renderItem={(props) => <UebungItem item={props.item} navigation={navigation} />}
      />
  );
}

function UebungItem(props) {
  const { item, navigation } = props;

  return (
    <View style={{ paddingTop: 2, paddingBottom: 20, paddingHorizontal: 10 }}>
      <TouchableOpacity onPress={() => { navigation.navigate('Übung1', item) }}>

        <CardUebungen>

          <View style={{ flexDirection: 'row' }}>

            <View style={{ flex: 1 }}>
              <Image
                style={{ height: 82.5, width: 82 }}
                source={HauptBilderStyles.übungenBildLinks[item.BildLinks]} />
            </View>

            <View style={{ flex: 3, paddingLeft: 10, paddingTop: 5, paddingBottom: 7 }}>
              <View style={{ flex: 1 }}></View>
              <Text style={globalStyles.normalerTitle}>{item.ÜbungsName}</Text>

              <View style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#eee' }}>
                <Text style={globalStyles.basicBoldText}>Für:</Text>
                <View style={{ paddingLeft: 100 }}>
                  <Text style={globalStyles.basicText}>{item.Für}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={globalStyles.basicBoldText}>Schwierigkeit:</Text>
                <View style={{ paddingLeft: 30 }}>
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