import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import PokemonScreen from '../screens/PokemonScreen';
import PokedexScreen from '../screens/PokedexScreen';

const StackNavigation = createStackNavigator();

const stackOptions = {
    pokedexTab: {
        headerTitleAlign: 'center',
        headerTitle: 'Pokedex'
    },
    pokemonTab: {
        headerTitleAlign: 'center',
        headerTitle: 'Pokemon'
    }
}

export default function PokemonStack() {
    const { PokedexTab, pokemonTab } = stackOptions;
    return (
        <StackNavigation.Navigator>
            <StackNavigation.Screen name="PokedexTab" component={PokedexScreen} options={PokedexTab} />
            <StackNavigation.Screen name="Pokemon" component={PokemonScreen} options={pokemonTab} />
        </StackNavigation.Navigator>
    )
}