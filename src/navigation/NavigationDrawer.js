import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PokedexScreen from '../screens/PokedexScreen';
import AccountScreen from '../screens/AccountScreen';

const DrawerNavigation = createDrawerNavigator();

const NavigationDrawer = () => {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name="Home" component={HomeScreen} />
            <DrawerNavigation.Screen name="Account" component={AccountScreen} />
            <DrawerNavigation.Screen name="Pokedex" component={PokedexScreen} />
            <DrawerNavigation.Screen name="Favorites" component={FavoritesScreen} />
            <DrawerNavigation.Screen name="Settings" component={SettingsScreen} />
        </DrawerNavigation.Navigator>
    )
}

/**
 * Recomendaciones para su uso:
 * 1. npx expo install react-native-gesture-handler react-native-reanimated
 * 2. Agregar la línea de código: plugins: ['react-native-reanimated/plugin'], seguido del atributo "presets"
 * 3. npx expo start --clear
 */

export default NavigationDrawer;