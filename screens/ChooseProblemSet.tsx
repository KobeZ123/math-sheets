import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Pressable, TouchableOpacity, ScrollView, Modal } from "react-native";

import { COLORS } from '../constants/Colors';
import { TOPICS } from '../constants/Constants';
import ProblemSetModal from "./ProblemSetModal";
    

export default function ChooseProblemSet() {
    const [openModal, setOpenModal] = useState(false);
    return (
        
        <ScrollView contentContainerStyle={styles.scrollview}>
        {
            TOPICS.map(
                (item: string) => 
                    <TouchableOpacity style={styles.button} key={item} onPress={(e) => setOpenModal(true)}>
                        <Text style={styles.worksheet_label}>{item}</Text>
                    </TouchableOpacity>)   
        }
        <ProblemSetModal isVisible={openModal} setIsVisible={(e) => setOpenModal(false)} />
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
        backgroundColor: COLORS.gold,
        margin: 5,
        padding: 5,
        borderRadius: 10,
        paddingVertical: 25,
        shadowColor: COLORS.grey,
        shadowOffset: {width: 0, height: 1},
    },
    worksheet_label: {
        fontSize: 20,
        fontWeight: '500',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });