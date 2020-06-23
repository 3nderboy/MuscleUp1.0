import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';                        //Für Schriftarten (Nunito)
import { AppLoading } from 'expo';                        //Für Schriftarten (Nunito)
import BottomBar from './bottomtab/bottomtab1';


const getFonts = () => {                                  //Für Schriftarten (Nunito)
  return Font.loadAsync({
    'nunitoRegular': require('./assets/Schriftarten/Nunito-Regular.ttf'),
    'nunitoBold': require('./assets/Schriftarten/Nunito-Bold.ttf')
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){                                        //Für Schriftarten (Nunito)
    return (
      <BottomBar />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

}

