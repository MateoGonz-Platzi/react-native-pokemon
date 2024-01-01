import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { getPokemonById } from '../api/pokemon.service';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';



export default function PokemonScreen(props) {
    const { navigation, route: { params } } = props;
    const [pokemon, setPokemon] = React.useState(null);

    useEffect(() => {
        (async () => {
            if (params.id) {
                try {
                    const res = await getPokemonById(params.id);
                    setPokemon({
                        id: res.id,
                        name: res.name,
                        type: res.types[0].type.name,
                        allTypes: res.types,
                        order: res.order,
                        stats: res.stats,
                        image: res.sprites.other['official-artwork'].front_default,
                    });
                } catch (error) { navigation.goBack(); }
            }
        })();
    }, [params]); //Cada vez que params sea ejecutado, se ejecutará el useEffect.

    if (!pokemon) return null
    return (
        <ScrollView>
            <Header pokemon={pokemon}></Header>
            <Type types={pokemon.allTypes}></Type>
            <Stats stats={pokemon.stats}></Stats>
        </ScrollView>
    )
}