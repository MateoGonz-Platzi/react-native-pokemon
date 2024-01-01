import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const { pokemonList, loadPokemons, isNext } = props;

    const loadMore = () => {
        loadPokemons();
    }

    return (
        <FlatList
            data={pokemonList}
            numColumns={2}
            showsVerticalScroolIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && <ActivityIndicator size="large" style={styles.spinner} color={'#AEAEAE'} />}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        padding: 5,
        overflow: "hidden",
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    }
})