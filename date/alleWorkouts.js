import { alleUebungen, BauchWorkout, SchulternUebungen, schulterdrücken } from '../data/alleUebungen';


const workout1 = {
  WorkoutName: 'Bauch-Workout',
  Für: 'Bauchmuskulatur',
  Sonst: 'Unterer Rücken',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '30min',
  Schwierigkeit: '3 / 5',
  Sätze: '3',
  Pausendauer: '2min',
  Wiederholungen: '12',
  Übung1: '.',
  BildLinks: '2',
  key: '1',
}

const workout2 = {
  WorkoutName: 'Arme-Workout',
  Für: 'Bizeps und Trizeps',
  Sonst: 'Unterarmmuskeln',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '50min',
  Schwierigkeit: '2 / 5',
  Sätze: '4',
  Pausendauer: '3min',
  Wiederholungen: '12',
  BildLinks: '2',
  key: '2',
}

const workout3 = {
  WorkoutName: 'Beine-Workout',
  Für: 'Oberschenkel',
  Sonst: 'Aduktoren, Waden',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '50min',
  Schwierigkeit: '2 / 5',
  Sätze: '3',
  Pausendauer: '3min',
  Wiederholungen: '15',
  BildLinks: '2',
  key: '3',
}

const workout4 = {
  WorkoutName: 'Brust-Workout',
  Für: 'Brust',
  Sonst: 'Oberer Rücken, Schultern',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '50min',
  Schwierigkeit: '3 / 5',
  Sätze: '4',
  Pausendauer: '2min',
  Wiederholungen: '10',
  BildLinks: '2',
  key: '4',
}

export const alleWorkouts = [
  workout1,
  workout2,
  workout3,
  workout4,
]

export const brustworkouts = [
  workout3,
  workout4
]