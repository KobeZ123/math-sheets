import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Modal, NativeSyntheticEvent, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { ProblemInput } from "../components/ProblemInput"
import { COLORS } from "../constants/Colors";
import { Level, Topic } from "../constants/Constants";




export default function ProblemSetModal(props : ProblemSetModalProps) {

    useEffect(() => {
        console.log(props.isVisible);
    })
    
    const [hasSelectedLevel, setHasSelectedLevel] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState<Level>();

    function CloseModal() {
        props.setIsVisible;
        console.log(props.isVisible);
        setHasSelectedLevel(false);
        
    }
    return (
        (hasSelectedLevel) ? 
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isVisible}
            onRequestClose={props.setIsVisible}>
            <View style={styles.container}>
                <ProblemInput topic={props.topic} level={selectedLevel}/>
                <View style={styles.close_button_view}>
                    <TouchableOpacity 
                        style={styles.close_button}
                        onPress={CloseModal}>
                        <Text style={styles.close_text}>Close</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </Modal> :
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isVisible}
            onRequestClose={props.setIsVisible}>
            <View style={styles.container}>
                <Text style={styles.level_instructions}>Choose a level for {props.topic?.name}</Text>
                {props.topic?.levels.map(
                    (level: Level) => 
                        <TouchableOpacity 
                            style={styles.level_button}
                            key={level.name}
                            onPress={()=> {setSelectedLevel(level); setHasSelectedLevel(true); console.log(level.name)}}>
                            <Text style={styles.level_label}>{level.name}</Text>
                        </TouchableOpacity>
                )}
                <View style={styles.close_button_view}>
                    <TouchableOpacity 
                        style={styles.close_button}
                        onPress={props.setIsVisible}>
                        <Text style={styles.close_text}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        </Modal>
    )
}

type ProblemSetModalProps = {
    isVisible: boolean,
    setIsVisible: (arg: NativeSyntheticEvent<any>) => void,
    topic?: Topic
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "#000000",
        backgroundColor: 'red',
    },
    level_instructions: {
        fontSize: 20,
        fontWeight: '500',
    },
    level_button: {
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
    level_label: {
        fontSize: 20,
        fontWeight: '500',
    },
    close_button_view: {
        
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        borderRadius: 5,
        overflow: 'hidden',
    },
    close_button: {
        backgroundColor: '#AAAAAA',
        textAlign: 'center',
        width: '100%',
        paddingVertical: 5,
        
    },
    close_text: {
        fontSize: 20,
        fontWeight: '500',
    }
});