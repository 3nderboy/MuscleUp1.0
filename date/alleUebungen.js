
export const bankdrücken = {
  ÜbungsName: 'Bankdrücken',
  Für: 'Brust',
  Sonst: 'Schultern, Trizeps',
  Schwierigkeit: '3',           // x / 5
  Wie: 'Mit einem Gerät',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '1',
  Bild2: '1.1',
  BildLinks: '4',
  Umrandung: 'red',
  key: '1',
}

export const bizepsCurls = {
  ÜbungsName: 'Wadenpresse (stehend)',
  Für: 'Seitliche Bauchm.',
  Sonst: 'Latissimus, Rückenstrecker',
  Schwierigkeit: '1',
  Wie: 'Mit Hanteln',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  BildLinks: '1',
  Umrandung: 'yellow',
  key: '2',
}

export const squats = {
  ÜbungsName: 'Squats', 
  Für: 'Oberschenkel', 
  Sonst: 'Gesäss',
  Schwierigkeit: '1', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  BildLinks: '3', 
  Umrandung: 'blue',
  key: '3'
}

export const rudernimstehen = {
  ÜbungsName: 'Rudern (im stehen)', 
  Für: 'Oberer Rücken', 
  Sonst: 'Latissimus',
  Schwierigkeit: '3', 
  Wie: 'Mit Hanteln',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'brown', 
  BildLinks: '5', 
  key: '4'
}

 export const situps = {
  ÜbungsName: 'Sit-Ups', 
  Für: 'Bauchmuskulatur',
  Sonst: '-', 
  Schwierigkeit: '2', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'green', 
  BildLinks: '2', 
  key: '5'
}

export const liegestützen = {
  ÜbungsName: 'Liegestützen', 
  Für: 'Brust',
  Sonst: 'Trizeps, Schultern',
  Schwierigkeit: '2', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'yellow', 
  BildLinks: '4', 
  key: '6'
}

 export const planke = {
  ÜbungsName: 'Planke', 
  Für: 'Bauchmuskulatur', 
  Sonst: 'Gesäss, unterer Rücken',
  Schwierigkeit: '2', 
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'green', 
  BildLinks: '2', 
  key: '7'
}

export const schulterdrücken = {
  ÜbungsName: 'Schulterdrücken', 
  Für: 'Schultern', 
  Sonst: '-',
  Schwierigkeit: '4', 
  Wie: 'Mit Hanteln',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'red', 
  BildLinks: '4', 
  key: '8'
}

export const diamondliegestützen = {
  ÜbungsName: 'Diamond-Liegestützen',
  Für: 'Brust',
  Sonst: 'Trizeps, Schultern',
  Schwierigkeit: '4',
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'yellow', 
  BildLinks: '4', 
  key: '9'
}

export const cmanhebung = {
  ÜbungsName: '15cm Anhebung',
  Für: 'Bauchmuskulatur',
  Sonst: '-',
  Schwierigkeit: '1',
  Wie: 'Zuhause',
  InWorkouts: 'keinem',
  Beschreibung: 'Noch keine',
  Bild1: '.',
  Bild2: '.',
  Umrandung: 'yellow', 
  BildLinks: '2', 
  key: '10'
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
  cmanhebung,
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

export const TrapezmuskelUebungen = [
  cmanhebung
];

export const BizepsUebungen = [

];

export const TrizepsUebungen = [

];

export const UnterarmUebungen = [

];

export const LatissimusUebungen = [

];

export const RückenstreckerUebungen = [

];

export const SeitlicheBauchmUebungen = [

];

export const BauchmuskulaturUebungen = [

];

export const GesässUebungen = [

];

export const OberschenkelUebungen = [

];

export const AduktorenUebungen = [

];

export const WadenUebungen = [

];




/**
 * Funktion zum Umwandeln vom Uebungsname 'plank' zum vollen Object mit
 * den Uebungsdetails
 * @param {Wandel} Name der Uebung, z.B. 'plank' 
 */
export function getFullUebung(uebungString) {
  switch(uebungString) {
    case 'bankdrücken': return bankdrücken;
    case 'bizepsCurls': return bizepsCurls;
    case 'squats': return squats;
    case 'rudernimstehen': return rudernimstehen;
    case 'situps': return situps;
    case 'liegestützen': return liegestützen;
    case 'planke': return planke;
    case 'schulterdrücken': return schulterdrücken;
    case 'diamondliegestützen': return diamondliegestützen;
    case 'cmanhebung' : return cmanhebung;
    default: throw new Error(`Uebung not found!`);
  }
}

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
