import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { pokemonCard } from '../../assets/utils/pokemonCard.styles';
import getColorType from '../../assets/utils/getColorType';
import { capitalize } from 'lodash';

const styles = pokemonCard;

export default function PokemonCard(props) {
    const { pokemon } = props;

    const bgStyle = { backgroundColor: getColorType(pokemon.type), ...styles.card }

    const goToPokemon = () => {
        console.log('goToPokemon', pokemon.name);
        console.log('goToPokemon', pokemon.image);
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.container}>
                <View style={bgStyle}>
                    <View style={styles.details}>
                        <Text style={styles.details.order}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.details.name}>{capitalize(pokemon.name)}</Text>
                    </View>
                    <Image source={{ uri: pokemon.image || 'https://reactjs.org/logo-og.png' }} style={styles.image} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}