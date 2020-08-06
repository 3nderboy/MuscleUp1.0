import React from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TextInput, Button } from 'react-native';
import { globalStyles } from '../../styles/globalstyle';
import { ErstellenButton } from '../../styles/buttons';

import { Formik } from 'formik';
import * as yup from 'yup';


const newWorkoutSchema = yup.object({
  WorkoutName:    yup.string()
                    .required('Dein Workout sollte einen Namen besitzen')
                    .min(3, 'Der Name sollte mind. 3 Buchstaben besitzen'),
  Für:            yup.string()
                    .required('Gebe bitte einen Muskel an')
                    .min(3, 'Der Muskel sollte mind. 3 Buchstaben besitzen'),
  Sonst:          yup.string()
                    .required('Gebe bitte mind. ein Zeichen ein')
                    .min(1),
  Beschreibung:   yup.string()
                    .required('Eine kurze Beschreibung sollte schon sein')
                    .min(1),
  Wie:            yup.string()
                    .required('Bitte Zuhause/Mit Hanteln/Mit Geräten eingeben')
                    .min(7, 'Bitte Zuhause/Mit Hanteln/Mit Geräten eingeben'),
  Dauer:          yup.string()
                    .required('Gebe bitte eine Dauer an')
                    .min(1),
  Schwierigkeit:  yup.string()
                    .required('Bitte eine Zahl zwischen 1 und 5')
                    .min(1),
})

export default function CreateWorkout({ addWorkout }) {

  return (
    <View style={globalStyles.containerNormal}>
      <Formik
        initialValues={{ WorkoutName: '', Für: '', Sonst: '', Beschreibung: '', Wie: '', Dauer: '', Schwierigkeit: '' }}
        validationSchema={newWorkoutSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();    //Macht alles wieder leer
          addWorkout(values);
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
            <Text style={globalStyles.errorText}>{ props.touched.WorkoutName && props.errors.WorkoutName }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Trainiert hauptsächlich welchen Muskel?  '
              onChangeText={props.handleChange('Für')}
              value={props.values.title}
              onBlur={props.handleBlur('Für')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Für && props.errors.Für }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Trainiert welche Muskeln auch noch?  '
              onChangeText={props.handleChange('Sonst')}
              value={props.values.title}
              onBlur={props.handleBlur('Sonst')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Sonst && props.errors.Sonst }</Text>

            <TextInput 
              multiline
              style={globalStyles.input}
              placeholder='Eine passende Beschreibung'
              onChangeText={props.handleChange('Beschreibung')}
              value={props.values.title}
              onBlur={props.handleBlur('Beschreibung')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Beschreibung && props.errors.Beschreibung }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Zuhause/Mit Hanteln/Mit Geräten'
              onChangeText={props.handleChange('Wie')}
              value={props.values.title}
              onBlur={props.handleBlur('Wie')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Wie && props.errors.Wie }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Wie lange geht das Workout etwa?'
              onChangeText={props.handleChange('Dauer')}
              value={props.values.title}
              onBlur={props.handleBlur('Dauer')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Dauer && props.errors.Dauer }</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Schwierigkeit von 1 - 5'
              onChangeText={props.handleChange('Schwierigkeit')}
              value={props.values.title}
              onBlur={props.handleBlur('Schwierigkeit')}
            />
            <Text style={globalStyles.errorText}>{ props.touched.Schwierigkeit && props.errors.Schwierigkeit }</Text>  

            <ErstellenButton text='Erstellen' onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  )
}