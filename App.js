import React from 'react'

import MainnStackNavigator from './navigating/navigating2'

export default function App() {
  return <MainnStackNavigator />
}



















// import React, { Component, useState }from 'react';
// import { StyleSheet, Text, View, FlatList, ScrollView, Button, TouchableOpacity } from 'react-native';
// import Card from './cards/card';
// import Card2 from './cards/card2';
// import Card3 from './cards/card3';
// import Card4 from './cards/card4';

// export default function man() {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={{ paddingLeft: 20, fontSize: 45, fontWeight: 'bold', color: 'black' }}>Training</Text>
//         <Text style={{ paddingTop: 50, paddingLeft: 20, paddingBottom: 10, fontSize: 25, fontWeight: 'bold', color: 'black', }}>Mein Plan</Text>

//         <Card>
//           <Text style={{ paddingTop: 4, fontSize: 15, color: 'white', }}>Woche 3</Text>
//           <Text style={{ paddingTop: 7, paddingBottom: 7, fontSize: 25, fontWeight: 'bold', color: 'white', }}>Werden Sie stark</Text>
//           <Text style={{ paddingBottom: 20, color: 'white', }}>Training 1 von 6</Text>
//           <View style={{  }}>
//             <Text>hello</Text>
//           </View>
//         </Card>

//         <Text style={{ paddingTop: 50, paddingLeft: 20, paddingBottom: 10, fontSize: 25, fontWeight: 'bold', color: 'black', }}>Freistil</Text>

//         <Card2>
//           <Text style={{ paddingTop: 5, paddingBottom: 4, paddingLeft: 55, fontSize: 17, fontWeight: 'bold', color: 'white', }}>Zufällige Trainings</Text>
//           <Text style={{ paddingLeft: 55, color: 'white', }}>Immer etwas Neues</Text>
//         </Card2>

//         <View style={{ padding: 30 }}></View>

//         <Card3>
//           <Text style={{ paddingTop: 5, fontSize: 17, fontWeight: 'bold', }}>Planen Sie Trainings</Text>
//           <Text style={{ paddingBottom: 40, color: 'grey', }}>Menschen, die sich Erinnerungen stellen, trainieren {"\n"}
//             mit 5-mala höherer Wahrscheinlichkeit regelmässig</Text>
//           <TouchableOpacity>
//             <Text style={{ paddingLeft: 150, color: 'dodgerblue', }}>Nein, danke</Text>
//           </TouchableOpacity>

//           <View style={{ width: '15%', margin: 10, backgroundColor: 'red', borderRadius: 900,  }}>
//             <Button 
//               title='Planen'
//               color='dodgerblue'
//             />
//           </View>
//         </Card3>

//         <Text style={{ paddingLeft: 20, paddingTop: 40, paddingBottom: 8, fontSize: 25, fontWeight: 'bold',  }}>Aktuelle</Text>

//         <Card4>
//           <Text style={{ color: 'white', }}>Test</Text>
//         </Card4>

//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   test: {
//     padding: 50,
//     fontSize: 23,
//     fontWeight: 'bold',
//     color: 'gold',
//   },
// });
