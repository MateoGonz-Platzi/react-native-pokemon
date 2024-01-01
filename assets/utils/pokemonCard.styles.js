import { StyleSheet } from 'react-native';

export const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
};

export const pokemonCard = StyleSheet.create({
    container: {
        flex: 1,
        height: 130,
        margin: 5,
    },
    card: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#C3C4CA",
        flex: 1,
        padding: 8,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 1,
        width: 100,
        height: 100,
    },
    details: {
        name: {
            color: "#FFFF",
            fontWeight: "bold",
            fontSize: 20,
            textTransform: "capitalize"
        },
        order: {
            color: "#EBEBEC",
            fontSize: 15,
        },
    }
});