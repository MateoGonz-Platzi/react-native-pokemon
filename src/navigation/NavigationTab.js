import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PokedexScreen from '../screens/PokedexScreen';
import AccountScreen from '../screens/AccountScreen';
import { Image } from 'react-native';

const TabNavigation = createBottomTabNavigator();

const tabOptions = {
    favorites: {
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (<Icon name="heart" color={color} size={size} />)
    },
    account: {
        tabBarLabel: 'Mi cuenta',
        tabBarIcon: ({ color, size }) => (<Icon name="user" color={color} size={size} />)
    },
    pokedex: {
        tabBarLabel: '',
        tabBarIcon: () => (renderPokedexIcon())
    },
};

const renderPokedexIcon = () => {
    return (<Image source={require("../../assets/app-icons/pokeball.png")} style={{ width: 55, height: 55, top: -15 }} />)
}

const NavigationTab = () => {

    const { favorites, account, pokedex } = tabOptions;

    return (
        <TabNavigation.Navigator>
            <TabNavigation.Screen name="Home" component={HomeScreen} options={favorites} />
            <TabNavigation.Screen name="Favorites" component={FavoritesScreen} />
            <TabNavigation.Screen name="Pokedex" component={PokedexScreen} options={pokedex} />
            <TabNavigation.Screen name="Settings" component={SettingsScreen} />
            <TabNavigation.Screen name="Account" component={AccountScreen} options={account} />
        </TabNavigation.Navigator>
    )
}
export default NavigationTab;