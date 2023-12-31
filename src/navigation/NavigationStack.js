import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const StackNavigation = createStackNavigator();

const NavigationStack = () => {
    return (
        <StackNavigation.Navigator initialRouteName='Home'>
            <StackNavigation.Screen name="Home" component={HomeScreen} />
            <StackNavigation.Screen name="Settings" component={SettingsScreen} />
        </StackNavigation.Navigator>
    )
}

export default NavigationStack;