import React from "react";
import { View, StyleSheet, Text } from "react-native";
import STATISTICS from "../data/information.json"


export default function Progress() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Progress Hub</Text>
            <Text style={styles.introduction}>You have solved:</Text>
            <Text style={styles.progress}>{STATISTICS.problemsSolved}</Text>
            <Text style={styles.introduction}>problems</Text>
        </View>
    )
    
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 5,
    },
    title: {
        fontSize: 50,
    },
    introduction: {
        fontSize: 30,
    },
    progress: {
        fontSize: 80,
        fontWeight: 'bold',
    }
    
});