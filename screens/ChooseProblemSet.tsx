import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Pressable, TouchableOpacity, ScrollView, Modal } from "react-native";


import WORKSHEETS from "../data/worksheets.json"
    

export default function ChooseProblemSet() {
    const [openModal, setOpenModal] = useState(false);
    return (
        
        <ScrollView contentContainerStyle={styles.scrollview}>
        {
            WORKSHEETS.worksheetNames.map(
                (item: string) => 
                    <TouchableOpacity style={styles.button} key={item} onPress={(e) => setOpenModal(true)}>
                        <Text style={styles.worksheet_label}>{item}</Text>
                    </TouchableOpacity>)   
        }
        <Modal
            animationType="slide"
            transparent={false}
            visible={openModal}
            onRequestClose={(e) => setOpenModal(false)}>
            <Text>HERE I AM </Text>
        </Modal>
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
        paddingVertical: 15,
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