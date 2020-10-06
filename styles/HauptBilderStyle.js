import React from 'react';
import { StyleSheet, View } from 'react-native';
import { hauptbildarm, 
        hauptbildbauch, 
        hauptbildbeine, 
        hauptbildbrust, 
        hauptbildrücken,
        } 
        from '../data/alleBilder';

export const HauptBilderStyles = {
    übungenBildLinks: {
        '1': hauptbildarm,
        '2': hauptbildbauch,
        '3': hauptbildbeine,
        '4': hauptbildbrust,
        '5': hauptbildrücken,
    }
};


// '1': require('../assets/HauptBilderÜbungen/ÜLinksArme.png'),
// '2': require('../assets/HauptBilderÜbungen/ÜLinksBauch.png'),
// '3': require('../assets/HauptBilderÜbungen/ÜLinksBeine.png'),
// '4': require('../assets/HauptBilderÜbungen/ÜLinksBrust1.png'),
// '5': require('../assets/HauptBilderÜbungen/ÜLinksRücken.png'),