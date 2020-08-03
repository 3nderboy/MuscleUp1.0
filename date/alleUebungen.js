
export const bankdrücken = {
  ÜbungsName: 'Bankdrücken',
  Für: 'Brust',
  Sonst: 'Schultern, Trizeps',
  Schwierigkeit: '3 / 5',
  Wie: 'Mit Geräten',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  BildLinks: '4',
  Umrandung: 'red',
  key: '1',
}

export const bizepsCurls = {
  ÜbungsName: 'Bizeps-Curls',
  Für: 'Bizeps',
  Sonst: '-',
  Schwierigkeit: '1 / 5',
  Wie: 'Mit Hanteln',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  BildLinks: '1',
  Umrandung: 'yellow',
  key: '2',
}

export const squats = {
  ÜbungsName: 'Squats', 
  Für: 'Oberschenkel', 
  Sonst: 'Gesäss',
  Schwierigkeit: '1 / 5', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  BildLinks: '3', 
  Umrandung: 'blue',
  key: '3'
}

export const rudernimstehen = {
  ÜbungsName: 'Rudern (im stehen)', 
  Für: 'Oberer Rücken', 
  Sonst: 'Latissimus',
  Schwierigkeit: '3 / 5', 
  Wie: 'Mit Hanteln',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  Umrandung: 'brown', 
  BildLinks: '5', 
  key: '4'
}

 export const situps = {
  ÜbungsName: 'Sit-Ups', 
  Für: 'Bauchmuskulatur',
  Sonst: '-', 
  Schwierigkeit: '2 / 5', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  Umrandung: 'green', 
  BildLinks: '2', 
  key: '5'
}

export const liegestützen = {
  ÜbungsName: 'Liegestützen', 
  Für: 'Brust',
  Sonst: 'Trizeps, Schultern',
  Schwierigkeit: '2 / 5', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  Umrandung: 'yellow', 
  BildLinks: '4', 
  key: '6'
}

 export const planke = {
  ÜbungsName: 'Planke', 
  Für: 'Bauchmuskulatur', 
  Sonst: 'Gesäss, unterer Rücken',
  Schwierigkeit: '2 / 5', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  Umrandung: 'green', 
  BildLinks: '2', 
  key: '7'
}

export const schulterdrücken = {
  ÜbungsName: 'Schulterdrücken', 
  Für: 'Schultern', 
  Sonst: '-',
  Schwierigkeit: '4 / 5', 
  Wie: 'Mit Hanteln',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  Umrandung: 'red', 
  BildLinks: '4', 
  key: '8'
}

export const diamondliegestützen = {
  ÜbungsName: 'Diamond-Liegestützen',
  Für: 'Brust',
  Sonst: 'Trizeps, Schultern',
  Schwierigkeit: '4 / 5',
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild: '.',
  Umrandung: 'yellow', 
  BildLinks: '4', 
  key: '9'
}


export const alleUebungen = [
  bankdrücken,
  bizepsCurls,
  squats,
  rudernimstehen,
  situps,
  liegestützen,
  planke,
  schulterdrücken,
  diamondliegestützen,
];

export const armeWorkout = [
  schulterdrücken,
  rudernimstehen,
  bizepsCurls,
  rudernimstehen,
];

export const BrustUebungen = [
  bankdrücken,
  liegestützen,
  diamondliegestützen,
];

export const SchulternUebungen = [
  bankdrücken,
  schulterdrücken,
];

export const BauchWorkout = [
  planke,
  situps,
];


// export const miro = ';)';

// export const bilder = {
//   hund: require(..),
//   katze: 
// }

// const diesIstEineVariable

// export default alleUebungen;

// import {alleUebungen, miro} from '..';
// import alleUebungen from '..';


// const images = {
//   all: muskelmodellV,
//   brust: muskelmodellBrust,
// }  

// 1.8
// const titleArray = [
//  {titel: 'Titel', style: globalStyles.basicTitle},
//  {titel: 'Plaene sind hier', style: globalStyles.basicText}
//  ]
//
//  {
//    titleArray.map(item => <Text style={item.style}>{item.titel}</Text>)
//  }
