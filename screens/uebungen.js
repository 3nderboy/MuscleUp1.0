import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import ButtonCard from '../styles/buttonCard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';
import { Ionicons } from '@expo/vector-icons';

import { MuskelmenschBilder, HauptBilder, dreiButtons } from '../data/alleBilder';

import { alleUebungen, 
          BrustUebungen, 
          SchulternUebungen, 
          TrapezmuskelUebungen,
          BizepsUebungen,
          TrizepsUebungen,
          UnterarmUebungen,
          LatissimusUebungen,
          RückenstreckerUebungen,
          SeitlicheBauchmUebungen,
          BauchmuskulaturUebungen,
          GesässUebungen,
          OberschenkelUebungen,
          AdduktorenUebungen,
          WadenUebungen
} from '../data/alleUebungen';


export default function Uebungen({ route, navigation }) {

  const [imageNameFront, setImageNameFront] = useState(MuskelmenschBilder['muskelmodellV']);  //Hook für das Updaten der Bilder des Muskelmenschen von vorne
  const [imageNameBack, setImageNameBack] = useState(MuskelmenschBilder['muskelmodellH']);    //Hook für das Updaten der Bilder des Muskelmenschen von hinten
  const [zuhauseButton, setZuhauseButton] = useState(dreiButtons['zuhause']);                 //Hook für das Bild des ''Zuhause''-Button
  const [hantelnButton, setHantelnButton] = useState(dreiButtons['mithanteln']);              //Hook für das Bild des ''Mit Hanteln''-Button
  const [gerätButton, setGerätButton] = useState(dreiButtons['mitgerät']);                    //Hook für das Bild des ''Mit einem Gerät''-Button
  const [Übungen, setÜbungen] = useState(alleUebungen);                                       //Hook für die Anzeige der passenden Übungen je nach Muskel
  const [how, setHow] = useState();                                                           //Hook für die drei Buttons (Zuhause/Mit Hanteln/Mit Geräten)
  const [undertitle, setUndertitle] = useState('Alle Übungen');                               //Hook für den Untertitel, der zeigt, was gerade dargestellt wird

  const uebungenFilteredByHow = Übungen.filter(
    (uebung) => {
      return !how || uebung.Wie === how
    }
  )

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={globalStyles.containerWorkout}>
            <Text style={globalStyles.GrosserTitle}>Übungen</Text>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={globalStyles.basicBoldText}>Klicke auf einen beliebigen Muskel,</Text>
              <Text style={globalStyles.basicBoldText}>um die dazu entsprechenden Übungen</Text>
              <Text style={globalStyles.basicBoldText}>anzeigen zu lassen.</Text>
            </View>

            {/* Die beiden Muskelmenschen mit TouchableOpacity für die Muskeln (width: 198, height: 498) */}
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
                      setImageNameFront(MuskelmenschBilder['muskelmodellnacken']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellnackenH']);
                      setÜbungen(TrapezmuskelUebungen);
                      setUndertitle('Trapezmuskel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '32%', height: '3.5%', top: '17%', left: '24%' }}
                  />

                  {/* Schulter links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellschulterH']);
                      setÜbungen(SchulternUebungen);
                      setUndertitle('Schultern-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '9%', height: '8%', borderRadius: 8, rotation: 30, top: '15%', left: '15%' }}
                  />

                  {/* Schulter rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellschulter']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellschulterH']);
                      setÜbungen(SchulternUebungen);
                      setUndertitle('Schultern-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '9%', height: '8%', borderRadius: 8, rotation: 330, top: '7%', left: '57%' }}
                  />

                  {/* Brust */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellbrust']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(BrustUebungen);
                      setUndertitle('Brust-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '33%', height: '8%', borderRadius: 8, top: '0.8%', left: '24%' }}
                  />

                  {/* Bizeps links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellbizeps']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(BizepsUebungen);
                      setUndertitle('Bizeps-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '11%', height: '8.4%', borderRadius: 50, rotation: 10, top: '-2.5%', left: '12.7%' }}
                  />

                  {/* Bizeps rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellbizeps']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(BizepsUebungen);
                      setUndertitle('Bizeps-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '11%', height: '8.4%', borderRadius: 50, rotation: 350, top: '-11%', left: '57%' }}
                  />

                  {/* Unterarm links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellunterarm']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(UnterarmUebungen);
                      setUndertitle('Unterarm-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '11%', height: '8.4%', borderRadius: 5, rotation: 18, top: '-11.4%', left: '7.6%' }}
                  />

                  {/* Unterarm rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellunterarm']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(UnterarmUebungen);
                      setUndertitle('Unterarm-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '11%', height: '8.4%', borderRadius: 5, rotation: 342, top: '-19.8%', left: '62.1%' }}
                  />

                  {/* Bauchmuskeln */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellbauchmuskeln']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(BauchmuskulaturUebungen);
                      setUndertitle('Bauchmuskulatur-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '16%', height: '13%', borderRadius: 12, top: '-32.5%', left: '32.1%' }}
                  />

                  {/* Seitliche Bauchmuskeln links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellseitlichebauchm']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellseitlichebauchmH']);
                      setÜbungen(SeitlicheBauchmUebungen);
                      setUndertitle('Seitliche Bauchm-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '7.8%', height: '10.6%', borderRadius: 5, rotation: 2, top: '-46%', left: '25.6%' }}
                  />

                  {/* Seitliche Bauchmuskeln rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellseitlichebauchm']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellseitlichebauchmH']);
                      setÜbungen(SeitlicheBauchmUebungen);
                      setUndertitle('Seitliche Bauchm-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '7.8%', height: '10.6%', borderRadius: 5, rotation: 358, top: '-56.5%', left: '48%' }}
                  />

                  {/* Oberschenkel links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodelloberschenkel']);
                      setImageNameBack(MuskelmenschBilder['muskelmodelloberschenkelH']);
                      setÜbungen(OberschenkelUebungen);
                      setUndertitle('Oberschenkel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '15%', height: '14.7%', borderRadius: 12, rotation: 9, top: '-56.2%', left: '20%' }}
                  />

                  {/* Oberschenkel rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodelloberschenkel']);
                      setImageNameBack(MuskelmenschBilder['muskelmodelloberschenkelH']);
                      setÜbungen(OberschenkelUebungen);
                      setUndertitle('Oberschenkel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '15%', height: '14.7%', borderRadius: 12, rotation: 351, top: '-71%', left: '45.2%' }}
                  />

                  {/* Adduktoren */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodelladduktoren']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellonclickH']);
                      setÜbungen(AdduktorenUebungen);
                      setUndertitle('Adduktoren-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '13%', height: '9%', borderRadius: 0, rotation: 0, top: '-82.5%', left: '34%' }}
                  />

                  {/* Waden links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellwaden']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellwadenH']);
                      setÜbungen(WadenUebungen);
                      setUndertitle('Waden-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '16%', height: '13%', borderRadius: 10, rotation: 9, top: '-80.1%', left: '15%' }}
                  />

                  {/* Waden rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameFront(MuskelmenschBilder['muskelmodellwaden']);
                      setImageNameBack(MuskelmenschBilder['muskelmodellwadenH']);
                      setÜbungen(WadenUebungen);
                      setUndertitle('Waden-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '16%', height: '13%', borderRadius: 10, rotation: 351, top: '-93.2%', left: '49.9%' }}
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

                  {/* Trapezmuskel (Nacken) */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellnackenH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellnacken']);
                      setÜbungen(TrapezmuskelUebungen);
                      setUndertitle('Trapezmuskel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '32%', height: '4%', borderRadius: 8, top: '18.2%', left: '24.5%' }}
                  />

                  {/* Trapezmuskel (Mitte) */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellnackenH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellnacken']);
                      setÜbungen(TrapezmuskelUebungen);
                      setUndertitle('Trapezmuskel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '25%', height: '2.5%', borderRadius: 0, top: '18.2%', left: '27.8%' }}
                  />

                  {/* Trapezmuskel (unten) */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellnackenH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellnacken']);
                      setÜbungen(TrapezmuskelUebungen);
                      setUndertitle('Trapezmuskel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '37.3%', height: '2.7%', borderRadius: 10, top: '18.2%', left: '21.7%' }}
                  />

                  {/* Trapezmuskel (ganz unten) */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellnackenH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellnacken']);
                      setÜbungen(TrapezmuskelUebungen);
                      setUndertitle('Trapezmuskel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '13%', height: '2.7%', borderRadius: 10, top: '17.8%', left: '33.7%' }}
                  />

                  {/* Schulter links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellschulterH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellschulter']);
                      setÜbungen(SchulternUebungen);
                      setUndertitle('Schultern-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '17%', height: '3.7%', borderRadius: 10, rotation: 334, top: '9.9%', left: '11.2%' }}
                  />

                  {/* Schulter rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellschulterH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellschulter']);
                      setÜbungen(SchulternUebungen);
                      setUndertitle('Schultern-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '17%', height: '3.7%', borderRadius: 10, rotation: 26, top: '6.2%', left: '52%' }}
                  />

                  {/* Trizeps links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodelltrizeps']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellonclickV']);
                      setÜbungen(TrizepsUebungen);
                      setUndertitle('Trizeps-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '11%', height: '9.2%', borderRadius: 10, rotation: 12, top: '6.5%', left: '11.8%' }}
                  />

                  {/* Trizeps rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodelltrizeps']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellonclickV']);
                      setÜbungen(TrizepsUebungen);
                      setUndertitle('Trizeps-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '11%', height: '9.2%', borderRadius: 10, rotation: 348, top: '-2.7%', left: '58%' }}
                  />

                  {/* Latissimus links */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodelllats']);
                      setImageNameFront(MuskelmenschBilder['muskelmodelllatsV']);
                      setÜbungen(LatissimusUebungen);
                      setUndertitle('Latissimus-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '13%', height: '8.1%', borderRadius: 15, rotation: 345, top: '-10.4%', left: '24.5%' }}
                  />

                  {/* Latissimus rechts */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodelllats']);
                      setImageNameFront(MuskelmenschBilder['muskelmodelllatsV']);
                      setÜbungen(LatissimusUebungen);
                      setUndertitle('Latissimus-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '13%', height: '8.1%', borderRadius: 15, rotation: 15, top: '-18.5%', left: '43%' }}
                  />

                  {/* Rückenstrecker (oben) */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellrückenstrecker']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellonclickV']);
                      setÜbungen(RückenstreckerUebungen);
                      setUndertitle('Rückenstrecker-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '4%', height: '6%', borderRadius: 15, rotation: 0, top: '-23.6%', left: '38%' }}
                  />

                  {/* Rückenstrecker (unten) */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellrückenstrecker']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellonclickV']);
                      setÜbungen(RückenstreckerUebungen);
                      setUndertitle('Rückenstrecker-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '19%', height: '4%', borderRadius: 15, rotation: 0, top: '-25.6%', left: '31%' }}
                  />

                  {/* Gesäss */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellgesäss']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellonclickV']);
                      setÜbungen(GesässUebungen);
                      setUndertitle('Gesäss-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '30%', height: '7%', borderRadius: 15, rotation: 0, top: '-26%', left: '25.5%' }}
                  />

                  {/* Oberschenkel links hinten */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodelloberschenkelH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodelloberschenkel']);
                      setÜbungen(OberschenkelUebungen);
                      setUndertitle('Oberschenkel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '14%', height: '11.5%', borderRadius: 15, rotation: 19, top: '-26.2%', left: '22%' }}
                  />

                  {/* Oberschenkel rechts hinten */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodelloberschenkelH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodelloberschenkel']);
                      setÜbungen(OberschenkelUebungen);
                      setUndertitle('Oberschenkel-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '14%', height: '11.5%', borderRadius: 15, rotation: 341, top: '-37.7%', left: '44.8%' }}
                  />

                  {/* Waden links hinten */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellwadenH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellwaden']);
                      setÜbungen(WadenUebungen);
                      setUndertitle('Waden-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '14%', height: '11%', borderRadius: 15, rotation: 10, top: '-38.5%', left: '17%' }}
                  />

                  {/* Waden rechts hinten */}
                  <TouchableOpacity
                    onPress={() => {
                      setImageNameBack(MuskelmenschBilder['muskelmodellwadenH']);
                      setImageNameFront(MuskelmenschBilder['muskelmodellwaden']);
                      setÜbungen(WadenUebungen);
                      setUndertitle('Waden-Übungen');
                    }}
                    style={{ backgroundColor: '#0000', width: '14%', height: '11%', borderRadius: 15, rotation: 350, top: '-49.5%', left: '49.8%' }}
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
                  setZuhauseButton(dreiButtons['zuhauseOnC']);
                  setHantelnButton(dreiButtons['mithanteln']);
                  setGerätButton(dreiButtons['mitgerät']);
                  }}>
                  <ButtonCard>
                    <View style={{ flexDirection: 'row' }}>
                      <Image 
                        source={zuhauseButton} 
                        style={{ width: '100%', height: undefined, aspectRatio: 1.2 }}
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
                  setHantelnButton(dreiButtons['mithantelnOnC']);
                  setZuhauseButton(dreiButtons['zuhause']);
                  setGerätButton(dreiButtons['mitgerät']);
                  }}>
                  <ButtonCard>
                    <View style={{ flexDirection: 'row' }}>
                      <Image 
                        source={hantelnButton} 
                        style={{ width: '100%', height: undefined, aspectRatio: 1.2 }} 
                        resizeMode='stretch'
                        resizeMethod='auto'
                      />
                    </View>
                  </ButtonCard>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                  setHow('Mit einem Gerät');
                  setGerätButton(dreiButtons['mitgerätOnC']);
                  setZuhauseButton(dreiButtons['zuhause']);
                  setHantelnButton(dreiButtons['mithanteln']);
                  }}>
                  <ButtonCard>
                    <View style={{ flexDirection: 'row' }}>
                      <Image 
                        source={gerätButton} 
                        style={{ width: '100%', height: undefined, aspectRatio: 1.2 }} 
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
                setImageNameFront(MuskelmenschBilder['muskelmodellV']);
                setImageNameBack(MuskelmenschBilder['muskelmodellH']);
                setÜbungen(alleUebungen);
                setZuhauseButton(dreiButtons['zuhause']);
                setHantelnButton(dreiButtons['mithanteln']);
                setGerätButton(dreiButtons['mitgerät']);
                setHow(undefined);  // geht auch: null, false
                setUndertitle('Alle Übungen');
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
      data={uebungenFilteredByHow}
      initialNumToRender={6}
      renderItem={(props) => <UebungItem item={props.item} navigation={navigation} />}
    />
  );
}

//Die Übungen, welche unten am Screen gelistet werden (die Box):
export const UebungItem = React.memo((props) => {
  const { item, navigation } = props;

  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
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
                <View style={{ paddingLeft: 28 }}>
                  <Text style={globalStyles.basicText}>{item.Schwierigkeit} / 5</Text>
                </View>
              </View>
            </View>

          </View>

        </CardUebungen>

      </TouchableOpacity>
    </View>
  )
})