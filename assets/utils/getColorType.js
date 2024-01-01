import { POKEMON_TYPE_COLORS } from "./pokemonCard.styles";

const getColorType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];
export default getColorType;