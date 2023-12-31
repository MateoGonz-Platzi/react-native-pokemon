import React from "react";
import { TextInput, Button, Text, View } from "react-native";

const LoginForm = () => {
    return (
        <View>
            <Text>Username</Text>
            <TextInput placeholder="Email" />
            <Text>Password</Text>
            <TextInput placeholder="Password" />
            <Button title="Login" onPress={() => console.log('Sended')} />
        </View>
    )
}

export default LoginForm;