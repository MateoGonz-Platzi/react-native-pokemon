import { Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Greeting from '../components/Greeting';
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = (props) => {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>React Native Course 2023 - 2024</Text>
            <Greeting userName={'Mateo'} />
            <Button title='Go to Settings' onPress={() => goToPage("Settings")} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;