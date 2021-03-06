import React from 'react';
import { Text, View, BlurView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';

import Feed from '../screens/feed';
import Tipps from '../screens/tipps';
import Uebungen from '../screens/uebungen';
import Details from '../screens/Nebenscreens/Details';
import Wabsolvieren from '../screens/Nebenscreens/Wabsolvieren';
import Workouts from '../screens/workouts';
import Übung1 from '../screens/Nebenscreens/InfoÜbungsScreen';
import WorkoutScreen from '../screens/Nebenscreens/InfoWorkoutScreen';
import OwnWorkout from '../screens/Nebenscreens/OwnWorkout';


const FeedStack = createStackNavigator();
const TippsStack = createStackNavigator();
const UebungenStack = createStackNavigator();           
const WorkoutsStack = createStackNavigator();           
const OwnWorkoutStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TopNavigator = createMaterialTopTabNavigator();


function UebungenScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', paddingBottom: 10, paddingTop: 22, backgroundColor: 'white' }}>
                {/* <Text style={{ fontFamily: 'nunitoBold', color: 'dimgrey', fontSize: 30, }}>Training</Text> */}
            </View>
            <View style={{ flex: 1 }}>
                <TopNavigator.Navigator swipeEnabled='false' tabBarPosition='top'
                    tabBarOptions={{
                        activeTintColor: 'turquoise',
                        inactiveTintColor: 'dimgrey',
                        pressColor: 'turquoise',
                        indicatorStyle: {
                            height: 2,
                            top: 0,
                            backgroundColor: 'turquoise',
                            borderRadius: 20,
                        },
                        labelStyle: {
                            fontFamily: 'nunitoBold',
                            fontSize: 12.5,
                        },
                        style: {
                            borderBottomLeftRadius: 20,    
                            borderBottomRightRadius: 20,
                        },
                    }}
                >
                    <TopNavigator.Screen name='Übungen' component={UebungenStackScreen} />
                    <TopNavigator.Screen name='Workouts' component={WorkoutsStackScreen} />
                    <TopNavigator.Screen name='Eigene Workouts' component={OwnWorkoutStackScreen} />
                </TopNavigator.Navigator>
            </View>
        </View>
    );
}

const FeedStackScreen = () => (
    <FeedStack.Navigator>
        <FeedStack.Screen name='Feed' component={Feed} options={{
            headerStatusBarHeight: 20, 
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'turquoise', 
                height: 85,
                elevation: 0,       
                //borderBottomLeftRadius: 20,
                //borderBottomRightRadius: 20.
            },
            headerTintStyle: {
                fontFamily: 'nunitoBold'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 30,
            },
        }} />
        <FeedStack.Screen name='Details' component={Details}
            options={{
                    headerTitle: 'Über die App',
                    headerStatusBarHeight: 20, 
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'turquoise',
                        height: 85,
                        elevation: 0,
                        //borderBottomLeftRadius: 20,
                        //borderBottomRightRadius: 20.
                    },
                    headerTintStyle: {
                        fontFamily: 'nunitoBold'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 26
                    },
                }} />
        {/* <FeedStack.Screen name='Wabsolvieren' component={Wabsolvieren}
            options={{
                headerTitle: 'Workout Absolvieren',
                headerStyle: {
                    height: 80
                },
                headerTintStyle: {
                    fontFamily: 'nunitoBold'
                },
                headerTintColor: 'dimgrey',
                headerTitleStyle: {
                    fontSize: 24
                },
            }} /> */}
            {/* <FeedStack.Screen name='OwnWorkout' component={OwnWorkout}
                options={{
                    headerTitle: 'Eigene Workouts',
                    headerStyle: {
                        height: 80
                    },
                    headerTintStyle: {
                        fontFamily: 'nunitoBold'
                    },
                    headerTintColor: 'dimgrey',
                    headerTitleStyle: {
                        fontSize: 24
                    },
            }} /> */}
            {/* <WorkoutsStack.Screen name='WorkoutScreen' component={WorkoutScreen} //provisorisch, kommt nicht hier hin am Schluss, sondern bei Topbar
                options={({ route }) => ({ title: route.params.WorkoutName,
                    headerStatusBarHeight: 0, 
                    headerStyle: {
                        backgroundColor: '#0000',   //macht es unsichtbar
                        height: 60,
                        elevation: 0,       //macht es unsichtbar
                        //borderBottomLeftRadius: 20,
                        //borderBottomRightRadius: 20.
                    },
                    headerTintStyle: {
                        fontFamily: 'nunitoBold'
                    },
                    headerTintColor: 'dimgrey',
                    headerTitleStyle: {
                        fontSize: 24
                    }
            })} /> */}
    </FeedStack.Navigator>
);

const TippsStackScreen = () => (
    <TippsStack.Navigator>
        <TippsStack.Screen name='Tipps' component={Tipps} options={{
            headerStatusBarHeight: 20, 
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'turquoise',
                height: 85,
                elevation: 0, 
                //borderBottomRightRadius: 30,
                //borderBottomLeftRadius: 30,
            },
            headerTintStyle: {
                fontFamily: 'nunitoBold'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 30
            },
        }} />
    </TippsStack.Navigator>
);

const UebungenStackScreen = () => (
    <UebungenStack.Navigator>
        <UebungenStack.Screen name='Übungen' component={Uebungen} options={{
            headerStyle: {
                height: 0
            },
            headerTitleStyle: {
                fontSize: 0
            },
    }} />
        <UebungenStack.Screen name='Übung1' component={Übung1}
            options={({ route }) => ({ title: route.params.ÜbungsName, 
                headerStatusBarHeight: 0, 
                headerStyle: {
                    backgroundColor: '#0000',   //macht es unsichtbar
                    height: 60,
                    elevation: 0,               //macht es unsichtbar
                    //borderBottomLeftRadius: 20,
                    //borderBottomRightRadius: 20.
                },
                headerTintStyle: {
                    fontFamily: 'nunitoBold'
                },
                headerTintColor: 'dimgrey',
                headerTitleStyle: {
                    fontSize: 24
                }
    })} />
    </UebungenStack.Navigator>
);


const WorkoutsStackScreen = () => (
    <WorkoutsStack.Navigator>
        <WorkoutsStack.Screen name='Workouts' component={Workouts} options={{
            headerStyle: {
                height: 0
            },
            headerTitleStyle: {
                fontSize: 0
            },
        }} />
            <WorkoutsStack.Screen name='WorkoutScreen' component={WorkoutScreen}
                options={({ route }) => ({ title: route.params.WorkoutName,
                    headerStatusBarHeight: 0, 
                    headerStyle: {
                        backgroundColor: '#0000',   //macht es unsichtbar
                        height: 60,
                        elevation: 0,               //macht es unsichtbar
                        //borderBottomLeftRadius: 20,
                        //borderBottomRightRadius: 20.
                    },
                    headerTintStyle: {
                        fontFamily: 'nunitoBold'
                    },
                    headerTintColor: 'dimgrey',
                    headerTitleStyle: {
                        fontSize: 24
                    }
            })} />
            <WorkoutsStack.Screen name='Wabsolvieren' component={Wabsolvieren}
                options={{
                    headerTitle: 'Workout Absolvieren',
                    headerStatusBarHeight: 0,
                    headerStyle: {
                        height: 60
                    },
                    headerTintStyle: {
                        fontFamily: 'nunitoBold'
                    },
                    headerTintColor: 'dimgrey',
                    headerTitleStyle: {
                        fontSize: 24
                    },
            }} />
            <UebungenStack.Screen name='Übung1' component={Übung1}
                options={({ route }) => ({ title: route.params.ÜbungsName, 
                    headerStatusBarHeight: 0, 
                    headerStyle: {
                        backgroundColor: '#0000',   //macht es unsichtbar
                        height: 60,
                        elevation: 0,               //macht es unsichtbar
                        //borderBottomLeftRadius: 20,
                        //borderBottomRightRadius: 20.
                    },
                    headerTintStyle: {
                        fontFamily: 'nunitoBold'
                    },
                    headerTintColor: 'dimgrey',
                    headerTitleStyle: {
                        fontSize: 24
                    }
            })} />
    </WorkoutsStack.Navigator>
);

const OwnWorkoutStackScreen = () => (
    <OwnWorkoutStack.Navigator>
        <OwnWorkoutStack.Screen name='OwnWorkout' component={OwnWorkout}
            options={{
                headerStyle: {
                    height: 0
                },
                headerTitleStyle: {
                    fontSize: 0
                },
        }} />
        <OwnWorkoutStack.Screen name='WorkoutScreen' component={WorkoutScreen}
            options={({ route }) => ({ title: route.params.WorkoutName,
                headerStatusBarHeight: 0, 
                headerStyle: {
                    backgroundColor: '#0000',   //macht es unsichtbar
                    height: 60,
                    elevation: 0,               //macht es unsichtbar
                    //borderBottomLeftRadius: 20,
                    //borderBottomRightRadius: 20.
                },
                headerTintStyle: {
                    fontFamily: 'nunitoBold'
                },
                headerTintColor: 'dimgrey',
                headerTitleStyle: {
                    fontSize: 24
                }
        })} />
        <WorkoutsStack.Screen name='Wabsolvieren' component={Wabsolvieren}
            options={{
                headerTitle: 'Workout Absolvieren',
                headerStatusBarHeight: 0,
                headerStyle: {
                    height: 60
                        
                },
                headerTintStyle: {
                    fontFamily: 'nunitoBold'
                },
                headerTintColor: 'dimgrey',
                headerTitleStyle: {
                    fontSize: 24
                },
        }} />
        <UebungenStack.Screen name='Übung1' component={Übung1}
            options={({ route }) => ({ title: route.params.ÜbungsName, 
                headerStatusBarHeight: 0, 
                headerStyle: {
                    backgroundColor: '#0000',   //macht es unsichtbar
                    height: 60,
                    elevation: 0,               //macht es unsichtbar
                    //borderBottomLeftRadius: 20,
                    //borderBottomRightRadius: 20.
                },
                headerTintStyle: {
                    fontFamily: 'nunitoBold'
                },
                headerTintColor: 'dimgrey',
                headerTitleStyle: {
                    fontSize: 24
                }
        })} />
    </OwnWorkoutStack.Navigator>
);





export default function BottomBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Feed') {
                            iconName = focused ? 'ios-stopwatch' : 'md-stopwatch';
                        } else if (route.name === 'Training') {
                            iconName = focused ? 'md-body' : 'ios-body';
                        } else if (route.name === 'Tipps') {
                            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        }



                        return <Ionicons name={iconName} size={29} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'turquoise',
                    inactiveTintColor: 'dimgrey',
                    style: {
                        height: 56,
                        // elevation: 30,
                        // shadowColor: 'black',
                        // shadowOffset: { width: 30, height: 30 },
                        // shadowOpacity: 1,
                    },
                    labelStyle: {
                        fontFamily: 'nunitoBold',
                        fontSize: 12,
                        marginBottom: 4,
                    },
                    labelPosition: 'below-icon',
                    keyboardHidesTabBar: 'true',
                }}
            >
                <Tab.Screen name='Feed' component={FeedStackScreen} />
                <Tab.Screen name='Training' component={UebungenScreen} />
                <Tab.Screen name='Tipps' component={TippsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}