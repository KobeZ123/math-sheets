import React from "react";
import { View, StyleSheet, Text, Button, Pressable, TouchableOpacity, ScrollView } from "react-native";


const WorkPages: string[] = [
    "one", "two", "three", "four", "five", "six", "seven"
]
    

export default function ChooseProblemSet() {
    return (
      
        <ScrollView contentContainerStyle={styles.scrollview}>
        {
            WorkPages.map(
                (item: string) => 
                    <TouchableOpacity style={styles.button} key={item} >
                        <Text>{item}</Text>
                    </TouchableOpacity>)   
        }
        </ScrollView>
      
    );
  }

  const styles = StyleSheet.create({
    container: {

    },
    scrollview: {
        alignItems: 'center',
    },
    button: {
        width: '80%',
        textAlign: 'center',
        backgroundColor: "lightpink",
        margin: 5,
        padding: 5,
        borderRadius: 10,
        height: 100,

    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });