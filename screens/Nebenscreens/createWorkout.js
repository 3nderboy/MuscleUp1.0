import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity, TextInput, Button, Picker } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { ErstellenButton } from '../../styles/buttons';

import { Formik } from 'formik';
import * as yup from 'yup';
import { getFullUebung } from '../../data/alleUebungen';


const newWorkoutSchema = yup.object({
  WorkoutName: yup.string()
    .required('Dein Workout sollte einen Namen besitzen')
    .min(3, 'Der Name sollte mind. 3 Buchstaben besitzen')
    .max(40, 'Bitte einen kürzeren Namen wählen'),
  Für: yup.string()
    .required('Gebe bitte einen Muskel an')
    .min(3, 'Der Muskel sollte mind. 3 Buchstaben besitzen')
    .max(31, 'Zu viele Zeichen, bitte kürzen'),
  Sonst: yup.string()
    .required('Gebe bitte mind. ein Zeichen ein')
    .min(1)
    .max(31, 'Zu viele Zeichen, bitte kürzen'),
  Beschreibung: yup.string()
    .required('Eine kurze Beschreibung sollte schon sein')
    .min(1),
  Dauer: yup.string()
    .required('Gebe bitte eine Dauer (in Minuten) an')
    .min(1)
    .max(3, 'Bitte realistisch bleiben'),
  Schwierigkeit: yup.string()
    .required('Bitte eine Zahl zwischen 1 und 5')
    .test('num-1-5', 'Bitte eine Zahl zwischen 1 und 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
    .min(1)
    .max(1, 'Bitte nur eine Zahl zwischen 1 und 5'),
  Pausendauer: yup.string()
    .required('Gebe bitte eine Dauer (in Sekunden) an')
    .min(1)
    .max(3, 'So eine lange Pause?'),
  Wiederholungen: yup.string()
    .required('Bitte eine Zahl eingeben')
    .min(1)
    .max(3, 'Bitte realistisch bleiben'),
  WiederholungenmitHanteln: yup.string()
    .required('Bitte eine Zahl eingeben')
    .min(1)
    .max(3, 'Bitte realistisch bleiben'),
  Sätze: yup.string()
    .required('Bitte eine Zahl eingeben')
    .min(1)
    .max(2, 'Bitte realistisch bleiben'),
})

// Number.parseFloat('15.345345')
// Math.round(number * 10)/10
// 7.56 75.6 76 7.6

export default function CreateWorkout({ addWorkout }) {

  //const [selectedValue, setSelectedValue] = useState('Zuhause'); //Für den Picker
  
  return (
    <View style={globalStyles.containerNormal}>
      <Formik
        initialValues={{ WorkoutName: '', 
                          Für: '', 
                          Sonst: '', 
                          Beschreibung: '', 
                          Wie: '', 
                          Dauer: '', 
                          Schwierigkeit: '', 
                          Pausendauer: '', 
                          Wiederholungen: '', 
                          WiederholungenmitHanteln: '', 
                          Sätze: '', 
                          uebung1: '', 
                        }}
        validationSchema={newWorkoutSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();    //Macht alles wieder leer
          addWorkout(convertFormValuesToWorkout(values));
        }}
      >
        {(props) => (
          <View style={{ paddingTop: 25 }}>
            <TextInput
              style={globalStyles.input}
              placeholder='Name des Workouts'
              onChangeText={props.handleChange('WorkoutName')}
              value={props.values.title}
              onBlur={props.handleBlur('WorkoutName')}
            />
            <Text style={globalStyles.errorText}>{props.touched.WorkoutName && props.errors.WorkoutName}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Trainiert hauptsächlich welchen Muskel?  '
              onChangeText={props.handleChange('Für')}
              value={props.values.title}
              onBlur={props.handleBlur('Für')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Für && props.errors.Für}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Trainiert welche Muskeln auch noch?  '
              onChangeText={props.handleChange('Sonst')}
              value={props.values.title}
              onBlur={props.handleBlur('Sonst')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Sonst && props.errors.Sonst}</Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Eine passende Beschreibung'
              onChangeText={props.handleChange('Beschreibung')}
              value={props.values.title}
              onBlur={props.handleBlur('Beschreibung')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Beschreibung && props.errors.Beschreibung}</Text>

            {/* <TextInput 
              style={globalStyles.input}
              placeholder='Zuhause/Mit Hanteln/Mit Geräten'
              onChangeText={props.handleChange('Wie')}
              value={props.values.title}
              onBlur={props.handleBlur('Wie')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Wie && props.errors.Wie }</Text> */}

            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, paddingVertical: 4 }}>
              <Picker
                style={{ height: 35, width: 330 }}
                // mode='dropdown'
                selectedValue={props.values.Wie}
                onValueChange={props.handleChange('Wie')}
                value={props.values.title}
              >
                <Picker.Item label='Wie?' value='Zuhause' />
                <Picker.Item label='Zuhause' value='Zuhause' />
                <Picker.Item label='Mit Hanteln' value='Mit Hanteln' />
                <Picker.Item label='Mit Geräten' value='Mit Geräten' />
              </Picker>
            </TouchableOpacity>

            <View style={{ paddingBottom: 30 }}></View>

            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Wie lange geht das Workout etwa? (in min)    '
              onChangeText={props.handleChange('Dauer')}
              value={props.values.title}
              onBlur={props.handleBlur('Dauer')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Dauer && props.errors.Dauer}</Text>

            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Schwierigkeit von 1 - 5'
              onChangeText={props.handleChange('Schwierigkeit')}
              value={props.values.title}
              onBlur={props.handleBlur('Schwierigkeit')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Schwierigkeit && props.errors.Schwierigkeit}</Text>

            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Pausendauer zwischen den Übungen (in sek)  '
              onChangeText={props.handleChange('Pausendauer')}
              value={props.values.title}
              onBlur={props.handleBlur('Pausendauer')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Pausendauer && props.errors.Pausendauer}</Text>

            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Anzahl Wiederholungen in einem Satz'
              onChangeText={props.handleChange('Wiederholungen')}
              value={props.values.title}
              onBlur={props.handleBlur('Wiederholungen')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Wiederholungen && props.errors.Wiederholungen}</Text>

            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Anzahl Wied. bei Hanteln-Übungen'
              onChangeText={props.handleChange('WiederholungenmitHanteln')}
              value={props.values.title}
              onBlur={props.handleBlur('WiederholungenmitHanteln')}
            />
            <Text style={globalStyles.errorText}>{props.touched.WiederholungenmitHanteln && props.errors.WiederholungenmitHanteln}</Text>

            <TextInput
              keyboardType='numeric'
              style={globalStyles.input}
              placeholder='Anzahl Sätze'
              onChangeText={props.handleChange('Sätze')}
              value={props.values.title}
              onBlur={props.handleBlur('Sätze')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Sätze && props.errors.Sätze}</Text>


            {/* Die Übungen zum auswählen per Dropdown-Menü: */}
            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, paddingVertical: 4 }}>
              <UebungPicker
                selectedValue={props.values.uebung1}
                onValueChange={props.handleChange('uebung1')} 
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 3 }}></View>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, paddingVertical: 4 }}>
              <UebungPicker
                selectedValue={props.values.uebung2}
                onValueChange={props.handleChange('uebung2')} 
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 3 }}></View>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, paddingVertical: 4 }}>
              <UebungPicker
                selectedValue={props.values.uebung3}
                onValueChange={props.handleChange('uebung3')} 
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 3 }}></View>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, paddingVertical: 4 }}>
              <UebungPicker
                selectedValue={props.values.uebung4}
                onValueChange={props.handleChange('uebung4')} 
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 3 }}></View>

            <View style={{ paddingBottom: 30 }}></View>


            <ErstellenButton text='Erstellen' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

const UebungPicker = (props) => (
  <Picker
    style={{ height: 35, width: 330, borderColor: 'grey', borderBottomWidth: 1 }}
    selectedValue={props.selectedValue}
    onValueChange={props.onValueChange}
  >
    <Picker.Item label='Übung wählen' value={''} />
    <Picker.Item label='15cm Anhebung' value={'cmanhebung'} />
    <Picker.Item label='45°-Bizeps-Curls' value={'bizepsCurls45'} />
    <Picker.Item label='Abwechselnde Planke' value={'abwechselndePlanke'} />
    <Picker.Item label='Schulter drehen' value={'schulterdrehen'} />
    <Picker.Item label='Arme kreisen' value={'armekreisen'} />
    <Picker.Item label='Arnold Presse' value={'arnoldpresse'} />
    <Picker.Item label='Auf der Stelle laufen' value={'aufderStellelaufen'} />
    <Picker.Item label='Aufrechtes Rudern' value={'aufrechtesRudern'} />
    <Picker.Item label='Aufrichtende Kerze' value={'aufrichtendeKerze'} />
    <Picker.Item label='Aufsteigen' value={'aufsteigen'} />
    <Picker.Item label='Ausfallsch. verkehrt (H)' value={'ausfallschritteverkehrtH'} />
    <Picker.Item label='Ausfallschritte' value={'ausfallschritte'} />
    <Picker.Item label='Ausfallschritte (Hanteln)' value={'ausfallschritteH'} />
    <Picker.Item label='Ausfallschritte verkehrt' value={'ausfallschritteverkehrt'} />
    <Picker.Item label='Bankdrücken' value={'bankdrücken'} />
    <Picker.Item label='Bankdrücken (Bauch)' value={'bankdrückenbauch'} />
    <Picker.Item label='Bankdrücken (breit)' value={'bankdrückenbreit'} />
    <Picker.Item label='Bankdrücken (drehend)' value={'bankdrückendrehend'} />
    <Picker.Item label='Bankdrücken (Hanteln)' value={'bankdrückenhanteln'} />
    <Picker.Item label='Bankdrücken (Kopf)' value={'bankdrückenKopf'} />
    <Picker.Item label='Bankdrücken umg. Griff' value={'bankdrückenumgGriff'} />
    <Picker.Item label='Becken-hoch Push-Up' value={'beckenhochPushUp'} />
    <Picker.Item label='Beinheben' value={'beinheben'} />
    <Picker.Item label='Beinheben Extrem' value={'beinhebenextrem'} />
    <Picker.Item label='Beinpresse' value={'beinpresse'} />
    <Picker.Item label='Beine spreizen' value={'beinespreizen'} />
    <Picker.Item label='Beinstrecker' value={'beinstrecker'} />
    <Picker.Item label='Bent over Rows' value={'bentoverrows'} />
    <Picker.Item label='Bergsteiger' value={'bergsteiger'} />
    <Picker.Item label='Bergsteiger auf Zehen' value={'bergsteigeraufZehen'} />
    <Picker.Item label='Beugen' value={'beugen'} />
    <Picker.Item label='Bizeps-Curls' value={'bizepsCurls'} />
    <Picker.Item label='Bizeps-Push-Up' value={'bizepsPushUp'} />
    <Picker.Item label='Brustexpander' value={'brustexpander'} />
    <Picker.Item label='Bulgarian Ausfallsch. (H)' value={'bulgarianAusfallschH'} />
    <Picker.Item label='Bulgarian Ausfallschritte' value={'bulgarianAusfallsch'} />
    <Picker.Item label='Crunchmaschine' value={'crunchmaschine'} />
    <Picker.Item label='Dampflock' value={'dampflock'} />
    <Picker.Item label='Diamond Push-Up' value={'diamondPushUp'} />
    <Picker.Item label='Dipmaschine' value={'dipmaschine'} />
    <Picker.Item label='Dips' value={'dips'} />
    <Picker.Item label='Dumbbell Deadlift' value={'dumbbelldeadlift'} />
    <Picker.Item label='Einarmiger Push-Up' value={'einarmigerPushUp'} />
    <Picker.Item label='Einbeiniger Push-Up' value={'einbeinigerPushUp'} />
    <Picker.Item label='Einbeiniges Hüftheben' value={'einbeinigesHüftheben'} />
    <Picker.Item label='Enge Bizeps-Curls' value={'engeBizepsCurls'} />
    <Picker.Item label='Enger Push-Up' value={'engerPushUp'} />
    <Picker.Item label='Enges Bankdrücken' value={'engesBankdrücken'} />
    <Picker.Item label='Erhöhter Push-Up' value={'erhöhterPushUp'} />
    <Picker.Item label='Falt-Push-Up' value={'faltPushUp'} />
    <Picker.Item label='Flatterkicks' value={'flatterkicks'} />
    <Picker.Item label='Fliegen (Reverse Flys)' value={'fliegen'} />
    <Picker.Item label='Frontheben' value={'frontheben'} />
    <Picker.Item label='Frontheben (liegend)' value={'fronthebenliegend'} />
    <Picker.Item label='Gerade Bizeps-Curls' value={'geradeBizepsCurls'} />
    <Picker.Item label='Hammer-Curls' value={'hammerCurls'} />
    <Picker.Item label='Hantel strecken' value={'hantelstrecken'} />
    <Picker.Item label='Hanteln kreisen' value={'hantelnkreisen'} />
    <Picker.Item label='Hanteln pushen' value={'hantelnpushen'} />
    <Picker.Item label='Hanteln-Presse (stehend)' value={'hantelnPressestehend'} />
    <Picker.Item label='Hanteln-Rotation' value={'hantelnRotation'} />
    <Picker.Item label='Heel Taps' value={'heelTaps'} />
    <Picker.Item label='High Row' value={'highRow'} />
    <Picker.Item label='Hüftheben' value={'hüftheben'} />
    <Picker.Item label='Intensive Bizeps-Curls' value={'intensiveBizepsCurls'} />
    <Picker.Item label='Kabelzug (vorne)' value={'kabelzugvorne'} />
    <Picker.Item label='Klimmzug (enger Griff)' value={'klimmzugengerGriff'} />
    <Picker.Item label='Klimmzug (breiter Griff)' value={'klimmzugbreiterGriff'} />
    <Picker.Item label='Knie zur Nase' value={'kniezurNase'} />
    <Picker.Item label='Kniebeugen' value={'kniebeugen'} />
    <Picker.Item label='Kniebeugen (Hanteln)' value={'kniebeugenHanteln'} />
    <Picker.Item label='Kommando-Planke' value={'kommandoPlanke'} />
    <Picker.Item label='Kreissäge-Planke' value={'kreissägePlanke'} />
    <Picker.Item label='Kreuz-Hammer-Curls' value={'kreuzHammerCurls'} />
    <Picker.Item label='Kreuzkörper Push-Up' value={'kreuzkörperPushUp'} />
    <Picker.Item label='Kubanische Presse' value={'kubanischePresse'} />
    <Picker.Item label='Kurzhantelheben' value={'kurzhantelheben'} />
    <Picker.Item label='Langhantel-Kniebeugen' value={'langhantelKniebeugen'} />
    <Picker.Item label='Lats-Rudern' value={'latsRudern'} />
    <Picker.Item label='Liegende Windmühle' value={'liegendeWindmühle'} />
    <Picker.Item label='L-Sit Crunches' value={'lsitCrunches'} />
    <Picker.Item label='Negativtrizepsstrecker' value={'negativtrizepsstrecker'} />
    <Picker.Item label='Normaler Push-Up' value={'normalerPushUp'} />
    <Picker.Item label='Plié-Kniebeugen' value={'pileKniebeugen'} />
    <Picker.Item label='Plié-Kniebeugen (H)' value={'pileKniebeugenH'} />
    <Picker.Item label='Planke' value={'planke'} />
    <Picker.Item label='Planke mit Beinheben' value={'plankemitBeinheben'} />
    <Picker.Item label='Push-Up mit Drehung' value={'pushUpmitDrehung'} />
    <Picker.Item label='Push-Up mit greifen' value={'pushUpmitgreifen'} />
    <Picker.Item label='Radfahren' value={'radfahren'} />
    <Picker.Item label='Rollen mit Hanteln' value={'rollenmitHanteln'} />
    <Picker.Item label='Rotierende seitl. Planke' value={'rotierendeseitlPlanke'} />
    <Picker.Item label='Rückenstrecker' value={'rückenstrecker'} />
    <Picker.Item label='Rückenstrecker liegend' value={'rückenstreckerliegend'} />
    <Picker.Item label='Rückwärtsplanke' value={'rückwärtsplanke'} />
    <Picker.Item label='Rudermaschine' value={'rudermaschine'} />
    <Picker.Item label='Rumpfdrehmaschine' value={'rumpfdrehmaschine'} />
    <Picker.Item label='Russian Twists' value={'russianTwists'} />
    <Picker.Item label='Schmetterlinge' value={'schmetterlinge'} />
    <Picker.Item label='Schulterdrücken' value={'schulterdrücken'} />
    <Picker.Item label='Schulterheben' value={'schulterheben'} />
    <Picker.Item label='Schulterpresse' value={'schulterpresse'} />
    <Picker.Item label='Schwimmer' value={'schwimmer'} />
    <Picker.Item label='Seitbeugen' value={'seitbeugen'} />
    <Picker.Item label='Seitheben' value={'seitheben'} />
    <Picker.Item label='Seitl. Planke (Beinheben)' value={'seitlPlankeBeinheben'} />
    <Picker.Item label='Seitl. Planke (Gesäss)' value={'seitlPlankemitGesäss'} />
    <Picker.Item label='Seitl. Planke (Kopf)' value={'seitlPlankemitKopf'} />
    <Picker.Item label='Seitliche Kniebeugen' value={'seitlicheKniebeugen'} />
    <Picker.Item label='Seitliche Kniebeugen (H)' value={'seitlicheKniebeugenH'} />
    <Picker.Item label='Seitliche Planke' value={'seitlichePlanke'} />
    <Picker.Item label='Sit-Ups' value={'sitUps'} />
    <Picker.Item label='Sitzendes Bankdrücken' value={'sitzendesBankdrücken'} />
    <Picker.Item label='Spiderman Push-Up' value={'spidermanPushUp'} />
    <Picker.Item label='Supermänner' value={'supermänner'} />
    <Picker.Item label='Tate-Presse' value={'tatePresse'} />
    <Picker.Item label='T-Heber' value={'tHeber'} />
    <Picker.Item label='Tisch' value={'tisch'} />
    <Picker.Item label='Trizepsheben' value={'trizepsheben'} />
    <Picker.Item label='Trizepsstrecker (hinten)' value={'trizepsstreckerhinten'} />
    <Picker.Item label='Trizepsstrecker (Kopf)' value={'trizepsstreckerKopf'} />
    <Picker.Item label='Unterarmstrecker' value={'unterarmstrecker'} />
    <Picker.Item label='Vorbeugen' value={'vorbeugen'} />
    <Picker.Item label='Wadenpresse' value={'wadenpresse'} />
    <Picker.Item label='Wadenpresse (H)' value={'wadenpresseHanteln'} />
    <Picker.Item label='Wadenpresse (stehend)' value={'wadenpressestehend'} />
    <Picker.Item label='Wandsitzen' value={'wandsitzen'} />
    <Picker.Item label='Wegdrücken' value={'wegdrücken'} />
    <Picker.Item label='Windmühle (stehend)' value={'windmühlestehend'} />
    <Picker.Item label='Zottman-Curls' value={'zottmanCurls'} />
  </Picker>)

function convertFormValuesToWorkout(values) {
  // values.uebungen ['uebungName', 'uebungName2']
  const { uebung1, uebung2, uebung3, uebung4, ...rest } = values;
  const fullUebungen = [
    uebung1 && getFullUebung(uebung1),
    uebung2 && getFullUebung(uebung2),
    uebung3 && getFullUebung(uebung3),
    uebung4 && getFullUebung(uebung4),
  ].filter(uebung => !!uebung)

  return {
    ...rest,
    uebungen: fullUebungen
  }
}

