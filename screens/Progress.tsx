import React from "react";
import { View, StyleSheet, Text } from "react-native";



export default function Progress() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Progress Hub</Text>
        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
    },
    title: {
        fontSize: 25,
    }
});