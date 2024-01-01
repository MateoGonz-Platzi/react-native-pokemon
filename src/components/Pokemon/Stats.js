import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { capitalize, map } from 'lodash';

export default function Stats(props) {
    const { stats } = props;

    const barStyles = (num) => {
        const backgroundColor = num > 50 ? '#6adc6a' : '#ff5959';
        const widthNum = num > 100 ? 100 : num;
        return {
            width: `${widthNum}%`,
            backgroundColor
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {map(stats, (item, index) => (
                <View key={index} style={styles.stat}>
                    <Text style={styles.stat.name}>{capitalize(item.stat.name)}</Text>
                    <Text style={styles.stat.info}>{item.base_stat}</Text>
                    <View style={styles.stat.bgBar}>
                        <View style={{ ...styles.stat.bgBar.innerBar, ...barStyles(item.base_stat) }}></View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    stat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        name: {
            color: "#6b6b6b",
            width: '40%',
            fontWeight: 'normal',
            fontSize: 16
        },
        info: {
            flexDirection: 'row',
            width: '10%',
            alignItems: 'center',
            fontSize: 12,
        },
        bgBar: {
            backgroundColor: '#dedede',
            width: '50%',
            height: 5,
            borderRadius: 5,
            overFlow: 'hidden',
            innerBar: {
                backgroundColor: '#ff5959',
                height: 5,
                borderRadius: 5,
            }
        }
    }
})