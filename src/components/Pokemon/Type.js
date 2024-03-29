import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { capitalize, map } from 'lodash';
import getColorType from '../../../assets/utils/getColorType';

export default function Type(props) {
    const { types } = props;


    return (
        <View style={styles.content}>
            {map(types, (item, index) =>
                <View key={index} style={{
                    backgroundColor: getColorType(item.type.name),
                    ...styles.pill
                }}>
                    <Text style={styles.pill.pillValue}>{capitalize(item.type.name)}</Text>
                </View>
            )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginHorizontal: 10,
        borderRadius: 20,
        pillValue: {
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: "#fff"
        }
    }
})