import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const DrawerNavigation = createDrawerNavigator();

const NavigationDrawer = () => {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name="Home" component={HomeScreen} />
            <DrawerNavigation.Screen name="Settings" component={SettingsScreen} />
        </DrawerNavigation.Navigator>
    )
}

/**
 * Recomendaciones para su uso:
 * 1. npx expo install react-native-gesture-handler react-native-reanimated
 * 2. Agregar la línea de código: plugins: ['react-native-reanimated/plugin'], seguido del atributo "presets"
 * 3. expo start --clear
 */

export default NavigationDrawer;