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
    <Picker.Item label='Bankdrücken' value={'bankdrücken'} />
    <Picker.Item label='Bizeps-Curls' value={'bizepsCurls'} />
    <Picker.Item label='Squats' value={'squats'} />
    <Picker.Item label='Rudern im stehen' value={'rudernimstehen'} />
    <Picker.Item label='15cm Anhebung' value={'cmanhebung'} />
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

