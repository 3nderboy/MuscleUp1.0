import { cmanhebung,
          bizepsCurls45,
          abwechselndePlanke,
          schulterdrehen,
          armekreisen,
          arnoldPresse,
          aufderStellelaufen,
          aufrechtesRudern,
          aufrichtendeKerze,
          aufsteigen,
          ausfallschritteverkehrtH,
          ausfallschritte,
          ausfallschritteH,
          ausfallschritteverkehrt,
          bankdrücken,
          bankdrückenbauch,
          bankdrückenbreit,
          bankdrückendrehend,
          bankdrückenhanteln,
          bankdrückenKopf,
          bankdrückenumgGriff,
          beckenhochPushUp,
          beinheben,
          beinhebenextrem,
          beinpresse,
          beinespreizen,
          beinstrecker,
          bentoverrows,
          bergsteiger,
          bergsteigeraufZehen,
          beugen,
          bizepsCurls,
          bizepsPushUp,
          brustexpander,
          bulgarianAusfallschH,
          bulgarianAusfallsch,
          crunchmaschine,
          dampflock,
          diamondPushUp,
          dipmaschine,
          dips,
          dumbbelldeadlift,
          einarmigerPushUp,
          einbeinigerPushUp,
          einbeinigesHüftheben,
          engeBizepsCurls,
          engerPushUp,
          engesBankdrücken,
          erhöhterPushUp,
          faltPushUp,
          flatterkicks,
          fliegen,
          frontheben,
          fronthebenliegend,
          geradeBizepsCurls,
          hammerCurls,
          hantelstrecken,
          hantelnkreisen,
          hantelnpushen,
          hantelnPressestehend,
          hantelnRotation,
          heelTaps,
          highRow,
          hüftheben,
          intensiveBizepsCurls,
          kabelzugvorne,
          klimmzugengerGriff,
          klimmzugbreiterGriff,
          kniezurNase,
          kniebeugen,
          kniebeugenHanteln,
          kommandoPlanke,
          kreissägePlanke,
          kreuzHammerCurls,
          kreuzkörperPushUp,
          kubanischePresse,
          kurzhantelheben,
          langhantelKniebeugen,
          latsRudern,
          liegendeWindmühle,
          lsitCrunches,
          negativtrizepsstrecker,
          normalerPushUp,
          pileKniebeugen,
          pileKniebeugenH,
          planke,
          plankemitBeinheben,
          pushUpmitDrehung,
          pushUpmitgreifen,
          radfahren,
          rollenmitHanteln,
          rotierendeseitlPlanke,
          rückenstrecker,
          rückenstreckerliegend,
          rückwärtsplanke,
          rudermaschine,
          rumpfdrehmaschine,
          russianTwists,
          schmetterlinge,
          schulterdrücken,
          schulterheben,
          schulterpresse,
          schwimmer,
          seitbeugen,
          seitheben,
          seitlPlankeBeinheben,
          seitlPlankemitGesäss,
          seitlPlankemitKopf,
          seitlicheKniebeugen,
          seitlicheKniebeugenH,
          seitlichePlanke,
          sitUps,
          sitzendesBankdrücken,
          spidermanPushUp,
          supermänner,
          tatePresse,
          tHeber,
          tisch,
          trizepsheben,
          trizepsstreckerhinten,
          trizepsstreckerKopf,
          unterarmstrecker,
          vorbeugen,
          wadenpresse,
          wadenpresseHanteln,
          wadenpressestehend,
          wandsitzen,
          wegdrücken,
          windmühlestehend,
          zottmanCurls,
} from '../data/alleUebungen';


const brustWorkoutZuhause1 = {
  WorkoutName: 'Brust-Workout für Zuhause',
  Für: 'Brust',
  Sonst: 'Schultern, Trizeps',
  Beschreibung: 'Das ideale Workout, um seine Brust ohne Hanteln und ohne Geräte zu stärken und zu verbessern. Dieses Workout ist sehr Push-Up-lastig und daher nicht besonders einfach. Dafür ist das Workout sehr effizient und trainiert fast den gesamten Oberkörper.',
  Wie: 'Zuhause',
  Dauer: '20',              // in min
  Schwierigkeit: '4',       // x / 5
  Pausendauer: '60',        // in sek
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    dips,
    armekreisen,
    normalerPushUp,
    diamondPushUp,
    rückwärtsplanke,
    spidermanPushUp,
    engerPushUp,
    vorbeugen,
    einbeinigerPushUp,
    brustexpander,
  ],
  key: '1'
}

const pushUpWorkout = {
  WorkoutName: 'Push-Up-Workout',
  Für: 'Brust',
  Sonst: 'Trizeps, Schultern',
  Beschreibung: 'Ein Workout, welches nur aus Push-Up-Übungen besteht. Da jeder Muskel deiner Brust in diesem Workout beansprucht wird, wird deine komplette Brust nach diesem Workout glühen. Falls das Workout trotzdem für dich zu einfach ist, kannst du zwischen den einzelnen Push-Ups noch andere Übungen einbauen.',
  Wie: 'Zuhause',
  Dauer: '20',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    faltPushUp,
    erhöhterPushUp,
    pushUpmitgreifen,
    normalerPushUp,
    engerPushUp,
    diamondPushUp,
    pushUpmitDrehung,
    brustexpander,
  ],
  key: '2',
}

const brustWorkoutHanteln1 = {
  WorkoutName: 'Brust-Workout mit Hanteln',
  Für: 'Brust',
  Sonst: 'Schultern, Trizeps',
  Beschreibung: 'Das ideale Workout, um mit Hanteln eine stabile Brust aufzubauen. Das Workout geht ziemlich lange, deswegen ist es sehr wichtig, längere Pausen zwischen den einzelnen Übungen zu machen, damit sich die Muskeln kurz erholen können.',
  Wie: 'Mit Hanteln',
  Dauer: '50',
  Schwierigkeit: '3',
  Pausendauer: '120',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '15',
  Sätze: '3',
  uebungen: [
    normalerPushUp,
    bankdrückenbreit,
    bankdrückenbauch,
    negativtrizepsstrecker,
    fronthebenliegend,
    schmetterlinge,
  ],
  key: '3',
}

const extremesBrustWorkout = {
  WorkoutName: 'Brust-Workout Extrem',
  Für: 'Brust',
  Sonst: 'Trapezmuskel, Trizeps',
  Beschreibung: 'Dieses Workout ist ein sehr anstrengedes, langes und intensives Workout für deine Brust und deinen Oberkörper. Am Besten du absolvierst dieses Workout in einem Fitnesscenter, in welchem du alle Geräte zur Verfügung hast.',
  Wie: 'Mit Geräten',
  Dauer: '45',
  Schwierigkeit: '5',
  Pausendauer: '120',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '12',
  Sätze: '3',
  uebungen: [
    dipmaschine,
    bankdrücken,
    latsRudern,
    bankdrückendrehend,
    schmetterlinge
  ],
  key: '4',
}

const schulternWorkout1 = {
  WorkoutName: 'Schultern-Workout mit Hanteln',
  Für: 'Schultern',
  Sonst: 'Trizeps',
  Beschreibung: 'Ein gutes und effizientes Workout, um in weniger als 30 Minuten deine Schultern und deinen Trizeps zu trainieren. Führe alle Übungen sauber und langsam aus und verwende nicht zu viel Gewicht.',
  Wie: 'Mit Hanteln',
  Dauer: '30',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '10',
  Sätze: '3',
  uebungen: [
    schulterdrücken,
    seitheben,
    frontheben,
    arnoldPresse,
  ],
  key: '5',
}

const schulternWorkoutExtrem = {
  WorkoutName: 'Schultern-Workout Extrem',
  Für: 'Schultern',
  Sonst: 'Trizeps, Trapezmuskel',
  Beschreibung: 'Ein sehr intensives und anstrengendes Workout, welches hauptsächlich deine Schultern trainieren wird. Führe alle Übungen immer langsam und sauber aus.',
  Wie: 'Mit Geräten',
  Dauer: '45',
  Schwierigkeit: '5',
  Pausendauer: '120',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '10',
  Sätze: '3',
  uebungen: [
    arnoldPresse,
    klimmzugbreiterGriff,
    schulterpresse,
    seitheben,
    aufrechtesRudern,
  ],
  key: '6',
}

const kurzesrückenWorkoutZuhause = {
  WorkoutName: 'Kurzes Rücken-Workout für Zuhause',
  Für: 'Trapezmuskel, Rückenstrecker',
  Sonst: 'Bauchmuskulatur',
  Beschreibung: 'Das ideale Workout, um in möglichst kurzer Zeit fast den kompletten Rücken ohne Hilfsmittel zu trainieren. Dieses Workout eignet sich ideal, um es parallel in andere Workouts als Supersatz einzubauen oder um es ganz simpel Zuhause in zehn Minuten durchzuführen.',
  Wie: 'Zuhause',
  Dauer: '10',
  Schwierigkeit: '2',
  Pausendauer: '60',
  Wiederholungen: '16',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    abwechselndePlanke,
    vorbeugen,
    windmühlestehend,
    rückwärtsplanke,
    einbeinigesHüftheben,
  ],
  key: '7',
}

const langesRückenWorkoutZuhause = {
  WorkoutName: 'Langes Rücken-Workout für Zuhause',
  Für: 'Trapezmuskel, Rückenstrecker',
  Sonst: 'Bauchmuskulatur',
  Beschreibung: 'Mit diesem Workout kannst du ohne Hanteln und ohne Geräte deinen Rücken stärken und ihn definieren. Du brauchst lediglich ein wenig Zeit und Ausdauer, um dieses Workout bis am Schluss durchzuziehen.',
  Wie: 'Zuhause',
  Dauer: '35',
  Schwierigkeit: '4',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '2',
  uebungen: [
    windmühlestehend,
    vorbeugen,
    rückwärtsplanke,
    schwimmer,
    tHeber,
    abwechselndePlanke,
    supermänner,
  ],
  key: '8',
}

const rückenWorkoutmitHanteln = {
  WorkoutName: 'Rücken-Workout mit Hanteln',
  Für: 'Kompletter Rücken',
  Sonst: '-',
  Beschreibung: 'Das ideale Workout, um mit Hanteln schnell und einfach einen stabilen und definierten Rücken aufzubauen. Mit diesem Workout trainierst du alle drei Hauptmuskeln deines Rückens (Trapezmuskel, Latissimus und den Rückenstrecker).',
  Wie: 'Mit Hanteln',
  Dauer: '40',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '18',
  Sätze: '3',
  uebungen: [
    vorbeugen,
    dumbbelldeadlift,
    hantelstrecken,
    latsRudern,
    fliegen,
  ],
  key: '9',
}

const rückenWorkoutGeräten = {
  WorkoutName: 'Rücken-Workout mit Geräten',
  Für: 'Kompletter Rücken',
  Sonst: 'Schultern',
  Beschreibung: 'Das ideale Rücken-Workout mit Geräten und Hanteln. Nach diesem Workout wirst du am nächsten Tag bestimmt Muskelkater am Rücken haben.',
  Wie: 'Mit Geräten',
  Dauer: '40',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '18',
  Sätze: '3',
  uebungen: [
    latsRudern,
    kabelzugvorne,
    klimmzugbreiterGriff,
    schulterheben,
    rückenstreckerliegend,
  ],
  key: '10',
}

const rückenWorkoutExtrem = {
  WorkoutName: 'Rücken-Workout Extrem',
  Für: 'Kompletter Rücken',
  Sonst: 'Schultern',
  Beschreibung: 'Ein vielseitiges und mit vielen Übungen beschmücktes Workout, um deinen kompletten Rücken ideal zu trainieren. Dieses Workout kann auch gut als Supersatz-Workout verwendet werden, indem du andere Übungen zwischen die einzelnen Rücken-Übungen einbaust.',
  Wie: 'Mit Geräten',
  Dauer: '35',
  Schwierigkeit: '4',
  Pausendauer: '120',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '18',
  Sätze: '2',
  uebungen: [
    rückenstrecker,
    latsRudern,
    kabelzugvorne,
    dumbbelldeadlift,
    rudermaschine,
    rückenstreckerliegend,
  ],
  key: '11',
}

const armWorkoutZuhause = {
  WorkoutName: 'Arme-Workout für Zuhause',
  Für: 'Komplette Arme',
  Sonst: 'Brust',
  Beschreibung: 'Die Arme ohne Hanteln oder Geräte zu trainieren ist eine grosse Herausforderung. Mit diesem Workout schaffst du es jedoch, auch ohne Hanteln einen guten Bizeps und Trizeps zu bekommen. Vergesse jedoch nicht, dass du mit Hanteln oder Geräten deinen Bizeps und Trizeps deutlich effizienter trainieren könntest.',
  Wie: 'Zuhause',
  Dauer: '20',
  Schwierigkeit: '2',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '2',
  uebungen: [
    normalerPushUp,
    bizepsPushUp,
    dips,
    engerPushUp,
  ],
  key: '12',
}

const bizepsWorkoutHanteln = {
  WorkoutName: 'Bizeps-Workout mit Hanteln',
  Für: 'Bizeps',
  Sonst: 'Unterarm',
  Beschreibung: 'Möchtest du in kurzer Zeit, jedoch möglichst intensiv deinen Bizeps trainieren? Dann ist dieses Workout ideal für dich. Da es jedoch so kurz ist, sind die Pausen zwischen den Übungen nicht so lange und daher ist das Workout recht anstrengend.',
  Wie: 'Mit Hanteln',
  Dauer: '10',
  Schwierigkeit: '3',
  Pausendauer: '60',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '13',
  Sätze: '1',
  uebungen: [
    bizepsCurls,
    bizepsCurls45,
    geradeBizepsCurls,
    hammerCurls,
    kreuzHammerCurls,
  ],
  key: '13',
}

const armWorkoutHanteln = {
  WorkoutName: 'Arme-Workout mit Hanteln',
  Für: 'Komplette Arme',
  Sonst: 'Brust',
  Beschreibung: 'Das ideale Workout, um deine Oberarme und auch deine Unterarme mit Hanteln zu trainieren. Lässt du die Pausen zwischen Bizeps-und Trizepsübungen aus (wie bei einem Supersatz), kannst du deutlich Zeit sparen und das Workout intensiver machen.',
  Wie: 'Mit Hanteln',
  Dauer: '55',
  Schwierigkeit: '4',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '15',
  Sätze: '3',
  uebungen: [
    intensiveBizepsCurls,
    negativtrizepsstrecker,
    geradeBizepsCurls,
    bankdrückenumgGriff,
    hantelnRotation,
    engerPushUp,
    kreuzHammerCurls,
  ],
  key: '14',
}

const unterarmWorkout = {
  WorkoutName: 'Unterarm-Workout mit Hanteln',
  Für: 'Unterarm, Bizeps',
  Sonst: '-',
  Beschreibung: 'Ein Workout, welches den Unterarm und Bizeps trainieren sollte. Es muss nicht besonders lange gehen (du kannst auch weniger als vier Sätze machen) und es ist nicht besonders anstrengend. Das ideale Workout für zwischendruch, um deine Arme wachsen zu lassen.',
  Wie: 'Mit Hanteln',
  Dauer: '40',
  Schwierigkeit: '2',
  Pausendauer: '90',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '16',
  Sätze: '4',
  uebungen: [
    hantelnRotation,
    zottmanCurls,
    unterarmstrecker,
    hammerCurls,
  ],
  key: '15',
}

const armeWorkoutGerät = {
  WorkoutName: 'Arme-Workout mit Geräten',
  Für: 'Komplette Arme',
  Sonst: 'Brust, Latissimus',
  Beschreibung: 'Ein Workout, um den Bizeps, Trizeps und Unterarm mit Hilfe von Hanteln und Geräten zu trainieren. Führe die Übungen langsam und sorgfältig aus.',
  Wie: 'Mit Geräten',
  Dauer: '45',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '15',
  Sätze: '3',
  uebungen: [
    klimmzugengerGriff,
    dipmaschine,
    zottmanCurls,
    trizepsstreckerKopf,
    rudermaschine,
    engesBankdrücken,
  ],
  key: '16',
}

const trizepsWorkoutZuhause = {
  WorkoutName: 'Trizeps-Workout für Zuhause',
  Für: 'Trizeps',
  Sonst: 'Brust',
  Beschreibung: 'Mit diesem Workout trainierst du deinen Trizeps und deine Brust effizient und simpel Zuhause. Natürlich ist das Workout dadurch recht Push-Up-lastig, doch dies heisst nichts schlechtes: Push-Ups sind eine sehr effiziente Übung und trainieren, neben dem Trizeps und der Brust, fast den gesamten Oberkörper.',
  Wie: 'Zuhause',
  Dauer: '12',
  Schwierigkeit: '3',
  Pausendauer: '60',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    dips,
    engerPushUp,
    diamondPushUp,
    trizepsheben,
    spidermanPushUp,
    einbeinigerPushUp,
  ],
  key: '17',
}

const trizepsWorkoutHanteln = {
  WorkoutName: 'Trizeps-Workout mit Hanteln',
  Für: 'Trizeps',
  Sonst: 'Brust',
  Beschreibung: 'Wenn du in einem Workout das Maximum aus deinem Trizeps herausholen möchtest, dann ist dieses Workout ideal für dich. Mit diesen vier sehr effizienten Trizeps-Übungen wirst du an deine Grenzen kommen.',
  Wie: 'Mit Hanteln',
  Dauer: '35',
  Schwierigkeit: '3',
  Pausendauer: '120',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '13',
  Sätze: '3',
  uebungen: [
    negativtrizepsstrecker,
    trizepsstreckerhinten,
    trizepsstreckerKopf,
    tatePresse,
  ],
  key: '18',
}

const trizepsWorkoutGerät = {
  WorkoutName: 'Trizeps-Workout mit Geräten',
  Für: 'Trizeps',
  Sonst: 'Brust, Trapezmuskel',
  Beschreibung: 'Mit diesem Workout wirst du deinen Trizeps an seine Grenzen bringen. Mit einer guten Abwechslung von Gerät und Hanteln, ist dieses Workout ideal, um es in einem Fitnesscenter zu absolvieren.',
  Wie: 'Mit Geräten',
  Dauer: '40',
  Schwierigkeit: '4',
  Pausendauer: '90',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '16',
  Sätze: '3',
  uebungen: [
    hantelnpushen,
    dipmaschine,
    bankdrückenumgGriff,
    bankdrücken,
    trizepsstreckerKopf,
  ],
  key: '19',
}

const intensivesBauchWorkoutZuhause = {
  WorkoutName: 'Intensives Bauch-Workout für Zuhause',
  Für: 'Bauchmuskulatur',
  Sonst: '-',
  Beschreibung: 'Ein schnelles und intensives Bauchmuskeln-Workout, um schnell an ein Six-Pack zu kommen. Dadurch dass das Workout nur Pausen von 30 Sekunden besitzt, ist es sehr anstrengend. Trotzdem ist es ideal, um einen Bauch aus Stahl zu bekommen',
  Wie: 'Zuhause',
  Dauer: '15',
  Schwierigkeit: '2',
  Pausendauer: '30',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    dampflock,
    beinheben,
    aufrichtendeKerze,
    beinhebenextrem,
    sitUps,
    beinespreizen,
    flatterkicks,
    planke,
  ],
  key: '20',
}

const bauchWorkoutZuhause = {
  WorkoutName: 'Bauch-Workout für Zuhause',
  Für: 'Bauchmuskulatur',
  Sonst: 'Seitliche Bauchmuskeln',
  Beschreibung: 'Das ideale Bauchmuskeln-Workout, um deinen kompletten sogenannten Core zu trainieren. Mit diesem Workout wirst du schnell merken, wie deine Bauchmuskeln nach vorne schiessen.',
  Wie: 'Zuhause',
  Dauer: '30',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '2',
  uebungen: [
    bergsteiger,
    seitlPlankemitGesäss,
    aufrichtendeKerze,
    plankemitBeinheben,
    sitUps,
    abwechselndePlanke,
    kniezurNase,
  ],
  key: '21',
}

const bauchWorkoutGerät = {
  WorkoutName: 'Bauch-Workout mit Geräten',
  Für: 'Bauchmuskulatur',
  Sonst: 'Seitliche Bauchmuskeln',
  Beschreibung: 'Du bist in einem Fitnesscenter und möchtest deinen Bauch trainieren? Dann ist dieses Workout ideal für dich. Natürlich beinhaltet dieses Workout auch noch Übungen, welche keine Geräte beanspruchen.',
  Wie: 'Mit Geräten',
  Dauer: '40',
  Schwierigkeit: '2',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '16',
  Sätze: '3',
  uebungen: [
    sitUps,
    plankemitBeinheben,
    crunchmaschine,
    rumpfdrehmaschine,
    kreissägePlanke,
  ],
  key: '22',
}

const gesässWorkout = {
  WorkoutName: 'Gesäss-Workout für Zuhause',
  Für: 'Gesäss',
  Sonst: 'Oberschenkel, Rückenstrecker',
  Beschreibung: 'Es gibt leider nicht besonders viele Übungen, um sein Gesäss zu trainieren. Trotzdem solltest du mit diesem Workout dein Gesäss und somit deinen kompletten Rumpf gut stärken und trainieren können.',
  Wie: 'Zuhause',
  Dauer: '30',
  Schwierigkeit: '2',
  Pausendauer: '60',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '3',
  uebungen: [
    tisch,
    aufderStellelaufen,
    seitlicheKniebeugen,
    hüftheben,
    kniebeugen,
  ],
  key: '23',
}

const kurzesbeineWorkoutZuhause = {
  WorkoutName: 'Kurzes Beine-Workout für Zuhause',
  Für: 'Beine',
  Sonst: 'Gesäss',
  Beschreibung: 'Mit diesem kurzen aber flotten Beine-Workout kannst du deinen ganzen Unterkörper simpel und leicht Zuhause trainieren. Vor allem deine Oberschenkel und Adduktoren werden mit Hilfe von diesem Workout trainiert.',
  Wie: 'Zuhause',
  Dauer: '15',
  Schwierigkeit: '3',
  Pausendauer: '60',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    ausfallschritte,
    wandsitzen,
    bergsteigeraufZehen,
    wadenpressestehend,
    bulgarianAusfallsch,
    aufsteigen,
  ],
  key: '24',
}

const langesBeineWorkoutZuhause = {
  WorkoutName: 'Langes Beine-Workout für Zuhause',
  Für: 'Beine',
  Sonst: 'Gesäss',
  Beschreibung: 'Trainiere ausführlich und intensiv deinen kompletten Unterkörper mit Hilfe dieses Workouts. Nach diesem Workout wirst du alle deine Beinmuskeln, also deine Oberschenkel, Adduktoren und Waden, spüren.',
  Wie: 'Zuhause',
  Dauer: '40',
  Schwierigkeit: '4',
  Pausendauer: '120',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '2',
  uebungen: [
    aufderStellelaufen,
    kniebeugen,
    ausfallschritteverkehrt,
    wadenpressestehend,
    ausfallschritte,
    pileKniebeugen,
  ],
  key: '25',
}

const beineWorkoutHanteln = {
  WorkoutName: 'Beine-Workout mit Hanteln',
  Für: 'Beine',
  Sonst: 'Gesäss',
  Beschreibung: 'Das ideale Workout, um deine Beine und dein Gesäss mit Hilfe von Hanteln zu trainieren. Fast alle Übungen mit den Hanteln für die Beine, könntest du auch ohne Hanteln durchführen. Dadurch verliert die Übung jedoch an Effizienz.',
  Wie: 'Mit Hanteln',
  Dauer: '40',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '16',
  Sätze: '3',
  uebungen: [
    ausfallschritteverkehrtH,
    ausfallschritteH,
    wadenpresseHanteln,
    pileKniebeugenH,
    kniebeugenHanteln,
  ],
  key: '26',
}

const intensivesBeineWorkout = {
  WorkoutName: 'Intensives Beine-Workout',
  Für: 'Beine',
  Sonst: 'Gesäss',
  Beschreibung: 'Die perfekte und kurze Mischung der effizientesten Übungen für deine Beine. Die Pause zwischen den einzelnen Übungen ist nicht besonders lange, daher ist dieses Workout recht intensiv.',
  Wie: 'Mit Hanteln',
  Dauer: '25',
  Schwierigkeit: '4',
  Pausendauer: '60',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '15',
  Sätze: '3',
  uebungen: [
    bulgarianAusfallschH,
    kniebeugenHanteln,
    wadenpresseHanteln,
    ausfallschritteH,
  ],
  key: '27',
}

const beineWorkoutGeräte = {
  WorkoutName: 'Beine-Workout mit Geräten',
  Für: 'Beine',
  Sonst: 'Gesäss',
  Beschreibung: 'Das ideale Beine-Workout für im Fitnesscenter. Dieses Workout beitzt eine gute und angenehme Mischung zwischen Übungen mit Geräten und Übungen mit Hanteln.',
  Wie: 'Mit Geräten',
  Dauer: '35',
  Schwierigkeit: '3',
  Pausendauer: '120',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '13',
  Sätze: '2',
  uebungen: [
    beinpresse,
    ausfallschritteH,
    beinstrecker,
    wadenpresse,
    langhantelKniebeugen,
    wadenpresseHanteln,
  ],
  key: '28',
}

const ganzkörperWorkoutZuhause = {
  WorkoutName: 'Ganzkörper-Workout für Zuhause',
  Für: 'Alle Muskeln',
  Sonst: '-',
  Beschreibung: 'Das ideale Ganzkörper-Workout, um in weniger als einer Stunde den kompletten Körper zu trainieren. Dieses Workout beansprucht alle Muskeln gleich. Somit eignet sich dieses Workout ideal, um deinen gesamten Körper in Form zu bringen.',
  Wie: 'Zuhause',
  Dauer: '40',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: 'max.',
  WiederholungenmitHanteln: '-',
  Sätze: '1',
  uebungen: [
    normalerPushUp,
    dips,
    sitUps,
    planke,
    engerPushUp,
    wandsitzen,
    abwechselndePlanke,
    wadenpressestehend,
    ausfallschritte,
    bizepsPushUp,
    seitlPlankemitGesäss,
    beckenhochPushUp,
    kniebeugen,
    vorbeugen,
    kniezurNase,
  ],
  key: '29',
}

const ganzkörperWorkoutHanteln = {
  WorkoutName: 'Ganzkörper-Workout mit Hanteln',
  Für: 'Alle Muskeln',
  Sonst: '-',
  Beschreibung: 'Noch effizienter und noch härter als das Ganzkörper-Workout für Zuhause. In diesem Workout wirst du alle Muskeln mit Hilfe von Hanteln trainieren (den Bauch musst du jedoch ohne Hanteln trainieren, da es dafür leider keine Übungen gibt). Daher solltest du ein Gewicht verwenden, welches dich nicht komplett überfordert (also kein Maximalgewicht).',
  Wie: 'Mit Hanteln',
  Dauer: '35',
  Schwierigkeit: '4',
  Pausendauer: '90',
  Wiederholungen: '30',
  WiederholungenmitHanteln: '13',
  Sätze: '1',
  uebungen: [
    bankdrückenbauch,
    geradeBizepsCurls,
    dumbbelldeadlift,
    schulterheben,
    seitheben,
    zottmanCurls,
    kniebeugenHanteln,
    wadenpresseHanteln,
    beinespreizen,
    hantelnRotation,
    seitlPlankemitKopf,
    latsRudern,
    engesBankdrücken,
  ],
  key: '30',
}

const ganzkörperWorkoutGeräte = {
  WorkoutName: 'Ganzkörper-Workout mit Geräten',
  Für: 'Alle Muskeln',
  Sonst: '-',
  Beschreibung: 'Ein Workout, welches nur aus Übungen mit Hilfe von Geräten besteht. Dieses Workout eignet sich ideal, um die verschiedenen Geräte in einem Fitnesscenter kennenzulernen oder um einfach schnell und simpel deinen ganzen Körper zu trainieren.',
  Wie: 'Mit Geräten',
  Dauer: '35',
  Schwierigkeit: '3',
  Pausendauer: '90',
  Wiederholungen: '-',
  WiederholungenmitHanteln: '15',
  Sätze: '1',
  uebungen: [
    bankdrücken,
    dipmaschine,
    kabelzugvorne,
    klimmzugbreiterGriff,
    rudermaschine,
    crunchmaschine,
    rumpfdrehmaschine,
    schulterpresse,
    klimmzugengerGriff,
    beinstrecker,
    wadenpresseHanteln,
    beinpresse,
  ],
  key: '31',
}

const test = {
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
  key: '40',
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
    latsRudern,
  ],
  BildLinks: '2',
  key: '1.1',
}

export const alleWorkouts = [
  ganzkörperWorkoutZuhause,
  ganzkörperWorkoutHanteln,
  ganzkörperWorkoutGeräte,
  armWorkoutZuhause,
  armWorkoutHanteln,
  armeWorkoutGerät,
  bauchWorkoutZuhause,
  bauchWorkoutGerät,
  beineWorkoutHanteln,
  beineWorkoutGeräte,
  bizepsWorkoutHanteln,
  brustWorkoutZuhause1,
  brustWorkoutHanteln1,
  extremesBrustWorkout,
  gesässWorkout,
  intensivesBauchWorkoutZuhause,
  intensivesBeineWorkout,
  kurzesbeineWorkoutZuhause,
  kurzesrückenWorkoutZuhause,
  langesBeineWorkoutZuhause,
  langesRückenWorkoutZuhause,
  pushUpWorkout,
  rückenWorkoutmitHanteln,
  rückenWorkoutGeräten,
  rückenWorkoutExtrem,
  schulternWorkout1,
  schulternWorkoutExtrem,
  trizepsWorkoutZuhause,
  trizepsWorkoutHanteln,
  trizepsWorkoutGerät,
  unterarmWorkout,
];

export const brustworkouts = [
  brustWorkoutZuhause1,
  pushUpWorkout,
  brustWorkoutHanteln1,
  extremesBrustWorkout,
];

export const schulternworkouts = [
  schulternWorkout1,
  schulternWorkoutExtrem,
];

export const rückenworkouts = [
  kurzesrückenWorkoutZuhause,
  langesRückenWorkoutZuhause,
  rückenWorkoutmitHanteln,
  rückenWorkoutGeräten,
  rückenWorkoutExtrem,
];

export const armworkouts = [
  armWorkoutZuhause,
  bizepsWorkoutHanteln,
  armWorkoutHanteln,
  unterarmWorkout,
  armeWorkoutGerät,
  trizepsWorkoutZuhause,
  trizepsWorkoutHanteln,
  trizepsWorkoutGerät,
];

export const trizepsworkouts = [
  trizepsWorkoutZuhause,
  trizepsWorkoutHanteln,
  trizepsWorkoutGerät,
];

export const bauchworkouts = [
  bauchWorkoutZuhause,
  intensivesBauchWorkoutZuhause,
  bauchWorkoutGerät,
];

export const gesässworkouts = [
  gesässWorkout,
];

export const beineworkouts = [
  kurzesbeineWorkoutZuhause,
  langesBeineWorkoutZuhause,
  beineWorkoutHanteln,
  intensivesBeineWorkout,
  beineWorkoutGeräte,
];