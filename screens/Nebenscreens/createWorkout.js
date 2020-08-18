import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TextInput, Button, Picker } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { ErstellenButton } from '../../styles/buttons';

import { Formik } from 'formik';
import * as yup from 'yup';
import { getFullUebung } from '../../data/alleUebungen';


const newWorkoutSchema = yup.object({
  WorkoutName: yup.string()
    .required('Dein Workout sollte einen Namen besitzen')
    .min(3, 'Der Name sollte mind. 3 Buchstaben besitzen'),
  Für: yup.string()
    .required('Gebe bitte einen Muskel an')
    .min(3, 'Der Muskel sollte mind. 3 Buchstaben besitzen'),
  Sonst: yup.string()
    .required('Gebe bitte mind. ein Zeichen ein')
    .min(1),
  Beschreibung: yup.string()
    .required('Eine kurze Beschreibung sollte schon sein')
    .min(1),
  // Wie:            yup.string()
  //                   .required('Bitte Zuhause/Mit Hanteln/Mit Geräten eingeben')
  //                   .min(7, 'Bitte Zuhause/Mit Hanteln/Mit Geräten eingeben'),
  Dauer: yup.string()
    .required('Gebe bitte eine Dauer an')
    .min(1),
  Schwierigkeit: yup.string()
    .required('Bitte eine Zahl zwischen 1 und 5')
    .min(1),
})

// Number.parseFloat('15.345345')
// Math.round(number * 10)/10
// 7.56 75.6 76 7.6

export default function CreateWorkout({ addWorkout }) {

  //const [selectedValue, setSelectedValue] = useState('Zuhause'); //Für den Picker

  return (
    <View style={globalStyles.containerNormal}>
      <Formik
        initialValues={{ WorkoutName: '', Für: '', Sonst: '', Beschreibung: '', Wie: '', Dauer: '', Schwierigkeit: '', uebung1: '', }}
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

            <Picker
              style={{ height: 35, width: 300, borderColor: 'grey', borderBottomWidth: 1 }}
              // mode='dropdown'
              selectedValue={props.values.Wie}

              onValueChange={props.handleChange('Wie')}

              value={props.values.title}

            //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            //onValueChange={props.handleChange('Wie')}

            // onValueChange={
            //   (itemValue) => {
            //     setSelectedValue(itemValue);
            //     props.handleChange('Wie')(itemValue);
            //   }
            // }

            // onBlur={props.handleBlur('Wie')}
            >
              <Picker.Item label='Wie?' value='Zuhause' />
              <Picker.Item label='Zuhause' value='Zuhause' />
              <Picker.Item label='Mit Hanteln' value='Mit Hanteln' />
              <Picker.Item label='Mit Geräten' value='Mit Geräten' />
            </Picker>

            <View style={{ paddingBottom: 30 }}></View>

            <TextInput
              style={globalStyles.input}
              placeholder='Wie lange geht das Workout etwa?'
              onChangeText={props.handleChange('Dauer')}
              value={props.values.title}
              onBlur={props.handleBlur('Dauer')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Dauer && props.errors.Dauer}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Schwierigkeit von 1 - 5'
              onChangeText={props.handleChange('Schwierigkeit')}
              value={props.values.title}
              onBlur={props.handleBlur('Schwierigkeit')}
            />
            <Text style={globalStyles.errorText}>{props.touched.Schwierigkeit && props.errors.Schwierigkeit}</Text>


            <UebungPicker
              selectedValue={props.values.uebung1}
              onValueChange={props.handleChange('uebung1')} 
            />

            <UebungPicker
              selectedValue={props.values.uebung2}
              onValueChange={props.handleChange('uebung2')} 
            />

            <UebungPicker
              selectedValue={props.values.uebung3}
              onValueChange={props.handleChange('uebung3')} 
            />

            <UebungPicker
              selectedValue={props.values.uebung4}
              onValueChange={props.handleChange('uebung4')} 
            />

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
    style={{ height: 35, width: 300, borderColor: 'grey', borderBottomWidth: 1 }}
    selectedValue={props.selectedValue}
    onValueChange={props.onValueChange}
  >
    <Picker.Item label='Übung wählen' value={''} />
    <Picker.Item label='Bankdrücken' value={'bankdrücken'} />
    <Picker.Item label='Bizeps-Curls' value={'bizepsCurls'} />
    <Picker.Item label='Squats' value={'squats'} />
    <Picker.Item label='Rudern im stehen' value={'rudernimstehen'} />
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

