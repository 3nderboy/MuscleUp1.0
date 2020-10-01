import { bankdrücken, 
          bizepsCurls, 
          kniebeugen, 
          rudernimstehen,
          situps,
          normalerPushUp, 
          planke,
          schulterdrücken,
} from '../data/alleUebungen';


const workout1 = {
  WorkoutName: 'Bauch-Workout',
  Für: 'Bauchmuskulatur',
  Sonst: 'Unterer Rücken',
  Beschreibung: 'noch keine',
  Wie: 'Zuhause',
  Dauer: '30',            // in min
  Schwierigkeit: '2',     // x / 5
  Pausendauer: '30',     // in sek
  Wiederholungen: '30',
  WiederholungenmitHanteln: '-',
  Sätze: '3',
  uebungen: [
    situps,
    planke,
  ],
  BildLinks: '2',
  key: '1'
}

const workout2 = {
  WorkoutName: 'Arme-Workout',
  Für: 'Bizeps und Trizeps',
  Sonst: 'Unterarmmuskeln',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '50',
  Schwierigkeit: '2',
  Pausendauer: '180',
  Wiederholungen: '12',
  WiederholungenmitHanteln: '12',
  Sätze: '4',
  uebungen: [
    bizepsCurls,
  ],
  BildLinks: '2',
  key: '2',
}

const workout3 = {
  WorkoutName: 'Beine-Workout',
  Für: 'Oberschenkel',
  Sonst: 'Aduktoren, Waden',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '50',
  Schwierigkeit: '2',
  Pausendauer: '180',
  Wiederholungen: '15',
  WiederholungenmitHanteln: '12',
  Sätze: '3',
  uebungen: [
    kniebeugen,
  ],
  BildLinks: '2',
  key: '3',
}

const workout4 = {
  WorkoutName: 'Brust-Workout',
  Für: 'Brust',
  Sonst: 'Oberer Rücken, Schultern',
  Beschreibung: 'noch keine',
  Wie: 'Mit Geräten',
  Dauer: '50',
  Schwierigkeit: '3',
  Pausendauer: '120',
  Wiederholungen: '10',
  WiederholungenmitHanteln: '12',
  Sätze: '4',
  uebungen: [
    normalerPushUp,
    bankdrücken,
  ],
  BildLinks: '2',
  key: '4',
}

const workout5 = {
  WorkoutName: 'Schultern-Workout',
  Für: 'Schultern',
  Sonst: 'Oberer Rücken, Nacken',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '55',
  Schwierigkeit: '4',
  Pausendauer: '180',
  Wiederholungen: '10',
  WiederholungenmitHanteln: '12',
  Sätze: '3',
  uebungen: [
    schulterdrücken,
    rudernimstehen,
  ],
  BildLinks: '2',
  key: '5',
}

export const exampleWorkout = {
  WorkoutName: 'Beispiel-Workout',
  Für: 'Bizeps',
  Sonst: 'Trizeps, Unterarm',
  Beschreibung: 'noch keine',
  Wie: 'Mit Hanteln',
  Dauer: '10',
  Schwierigkeit: '2',   
  Pausendauer: '120',
  Wiederholungen: '15',
  WiederholungenmitHanteln: '12',
  Sätze: '4',
  uebungen: [
    schulterdrücken,
    rudernimstehen,
  ],
  BildLinks: '2',
  key: '6',
}

export const alleWorkouts = [
  workout1,
  workout2,
  workout3,
  workout4,
  workout5,
];

export const brustworkouts = [
  workout3,
  workout4
];

export const schulternworkouts = [
  workout1,
  workout2,
  workout5,
];

export const rückenworkouts = [

];

export const armworkouts = [

];

export const trizepsworkouts = [

];

export const bauchworkouts = [

];

export const gesässworkouts = [

];

export const beineworkouts = [
  
];



