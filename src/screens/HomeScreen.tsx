
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React Native 🚀</Text>
            <Text>TypeScript project is ready!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default HomeScreen;
