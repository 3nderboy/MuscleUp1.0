import { bankdrücken, 
          bizepsCurls, 
          squats, 
          rudernimstehen,
          situps,
          liegestützen, 
          planke,
          schulterdrücken,
          diamondliegestützen,
} from '../data/alleUebungen';


const workout1 = {
  WorkoutName: 'Bauch-Workout',
  Für: 'Bauchmuskulatur',
  Sonst: 'Unterer Rücken',
  Beschreibung: 'noch keine',
  Wie: 'Zuhause',
  Dauer: '30min',
  Schwierigkeit: '2 / 5',
  Sätze: '3',
  Pausendauer: '30sek',
  Wiederholungen: '15',
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
  Dauer: '50min',
  Schwierigkeit: '2 / 5',
  Sätze: '4',
  Pausendauer: '3min',
  Wiederholungen: '12',
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
  Dauer: '50min',
  Schwierigkeit: '2 / 5',
  Sätze: '3',
  Pausendauer: '3min',
  Wiederholungen: '15',
  uebungen: [
    squats,
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
  Dauer: '50min',
  Schwierigkeit: '3 / 5',
  Sätze: '4',
  Pausendauer: '2min',
  Wiederholungen: '10',
  uebungen: [
    liegestützen,
    diamondliegestützen,
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
  Dauer: '55min',
  Schwierigkeit: '2 / 5',
  Sätze: '3',
  Pausendauer: '3min',
  Wiederholungen: '10',
  uebungen: [
    schulterdrücken,
    rudernimstehen,
  ],
  BildLinks: '2',
  key: '5',
}

export const alleWorkouts = [
  workout1,
  workout2,
  workout3,
  workout4,
  workout5,
]

export const brustworkouts = [
  workout3,
  workout4
]

export const schulternworkouts = [
  workout1,
  workout2,
  workout5,
]