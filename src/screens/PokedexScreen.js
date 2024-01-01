import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import React, { useEffect, useState } from 'react'
import { getPokemonList, getPokemonByUrl } from '../api/pokemon.service'
import PokemonList from '../components/PokemonList';

export default function PokedexScreen() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);

    const pokemonListReq = async () => {
        try {
            const response = await getPokemonList(nextUrl);
            const pokemonArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonByUrl(pokemon.url);
                pokemonArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default,
                });
            };
            setPokemonList([...pokemonList, ...pokemonArray]);
            setNextUrl(response.next);
        } catch (error) { console.error(error); }
    };

    useEffect(() => {
        (async () => { await pokemonListReq() })();
    }, []);

    return (
        <View>
            {pokemonList && <PokemonList pokemonList={pokemonList} loadPokemons={pokemonListReq} isNext={nextUrl} />}
        </View>
    )
}