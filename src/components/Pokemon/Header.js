import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from 'react-native'
import React from 'react'
import getColorType from '../../../assets/utils/getColorType';
import { capitalize } from 'lodash';

export default function Header(props) {
    const { id, name, type, order, image } = props.pokemon;
    const bgColor = getColorType(type);
    const bgStyle = [{ backgroundColor: bgColor, ...styles.background }]

    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>

                <View style={styles.header}>
                    <Text style={styles.header.name}>{capitalize(name)}</Text>
                    <Text style={styles.header.order}># {`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.container}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text>Pokemon Header</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 350,
        position: 'absolute',
        borderBottomLeftRadius: 300,
        borderBottomEndRadius: 300,
        transform: [{ scaleX: 2 }],
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        name: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 27
        },
        order: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 20
        }
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    }
})