import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import PokemonScreen from '../screens/PokemonScreen';
import PokedexScreen from '../screens/PokedexScreen';

const StackNavigation = createStackNavigator();

export default function PokemonStack() {
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="Pokedex" component={PokedexScreen} options={{ headerTitleAlign: 'center', headerTitle: 'Pokedex' }} />
            <StackNavigation.Screen name="Pokemon" component={PokemonScreen} options={{ headerTitleAlign: 'center', headerTitle: 'Pokemon' }} />
        </StackNavigation.Navigator>
    )
}