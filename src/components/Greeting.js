import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';

const Greeting = (props) => {
    const { userName } = props;
    return (
        <View>
            <Text>Hello {userName}!</Text>
        </View>
    );
}
//Props defecto
Greeting.defaultProps = {
    userName: 'John Doe'
}
//Props tipos.
Greeting.propTypes = {
    userName: PropTypes.string.isRequired //Obligatorio
}

export default Greeting;