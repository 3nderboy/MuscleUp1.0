import React, { Component }from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, FlatList, Button } from 'react-native';
import { globalStyles } from '../styles/globalstyle';
import CardUebungen from '../styles/uebungencard';
import { HauptBilderStyles } from '../styles/HauptBilderStyle';

export default class Herausforderungen extends Component{

    constructor(){
        super();
        this.state={
            imageURL : require('../assets/Hauptbilder/Mm1.png')
        }
    }

    Load_New_Image=()=>{
        this.setState({
            imageURL : require('../assets/Hauptbilder/Mmh1.png')
        })
    }

    Load_Old_Image=()=>{
        this.setState({
            imageURL : require('../assets/Hauptbilder/Mm1.png')
        })
    }

    render() {

        const { navigation } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Image 
                    source={this.state.imageURL}
                    style={{ flex: 1, justifyContent: 'center', width: 200, height: 490 }}
                />
                <View style={{ paddingLeft: 85, paddingBottom: 155, position: 'absolute' }}>
                    <TouchableOpacity onPress={this.Load_New_Image}>                      
                        <Text style={{ color: 'red' }}>ooo{'\n'}ooo{'\n'}ooo{'\n'}ooo</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingLeft: 15, paddingBottom: 155, position: 'absolute' }}>
                    <TouchableOpacity onPress={this.Load_Old_Image}>                      
                        <Text style={{ color: 'red' }}>ooo{'\n'}ooo{'\n'}ooo{'\n'}ooo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ); 
    }
}







// export default function Herausforderungen({ navigation }) {
//     return (
//         <View style={{ flex: 1, flexDirection: 'column' }}>
//             <ImageBackground
//             source={require('../assets/Hauptbilder/Mm1.png')}
//             style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', width: 200, height: 490 }}
//             >

//                 <View style={{ paddingLeft: 85, paddingBottom: 155, position: 'absolute' }}>
//                     <TouchableOpacity onPress={() => {this.Load_Old_Image}}>
//                         <Text style={{ color: 'red' }}>ooo{'\n'}ooo{'\n'}ooo{'\n'}ooo</Text>
//                     </TouchableOpacity>
//                 </View>


//             </ImageBackground>
//         </View>
//     );
// }