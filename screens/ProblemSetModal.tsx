import React from "react";
import { Button, Modal, NativeSyntheticEvent, Text, TouchableOpacity, View, StyleSheet } from "react-native"




export default function ProblemSetModal(props : ProblemSetModalProps) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isVisible}
            onRequestClose={props.setIsVisible}>
            <View style={styles.container}>
                <View style={styles.problem_panel}>
                    <Text>RANDOM TEXT</Text>
                </View>
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
    setIsVisible: (arg: NativeSyntheticEvent<any>) => void
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: "#000000",
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    problem_panel: {
        backgroundColor: "#111111",
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