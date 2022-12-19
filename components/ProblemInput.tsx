import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { COLORS } from "../constants/Colors"
import { Level, Topic } from "../constants/Constants";
import { GenerateNumber } from "../features/Features";

export function ProblemInput(props : ProblemInputProp) {
    return (
        <View style={styles.container}>
            <Text>QUESTION</Text>
            <View style={styles.submission_section}>
                <TextInput
                    style={styles.input_field}
                    autoCorrect={false}
                    autoComplete='off'
                    autoFocus={true}
                    keyboardType="numeric"
                
                    />
                <View style={styles.submit_button_view}>
                    <TouchableOpacity style={styles.submit_button}>
                        <Text style={styles.submit_text} onPress={()=>console.log(GenerateNumber(5, 25))}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export type ProblemInputProp = {
    level? : Level,
    topic? : Topic
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    submission_section: {
        width: '80%',
    },
    input_field: {
        borderColor: COLORS.black,
        borderWidth: 3,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        fontSize: 25,
        padding: 3,
        textAlign: 'center',
        marginVertical: 5,
    },
    submit_button_view: {
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
        overflow: 'hidden',
    },
    submit_button: {
        textAlign: 'center',
        paddingVertical: 5,
        backgroundColor: COLORS.gold,
    },
    submit_text: {
        fontSize: 20,
        fontWeight: '500',
    }
    
});