import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TextInput } from "react-native-gesture-handler";
import { 
    MaterialCommunityIcons, 
    FontAwesome5,
    Entypo,
    Fontisto,
    MaterialIcons,
 } from "@expo/vector-icons";
import { useState } from "react";

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn('Microphone')
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`)

        //send the message to the backend

        setMessage('');
    }

    const onPress = () => {
        if (!message)
        {
            onMicrophonePress();
        }
        else
        {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput 
                placeholder={"Type a message"}
                style={styles.textInput}
                multiline={true}
                value={message}
                onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icons}/>
                {!message && <Fontisto name="camera" size={24} color="grey"style={styles.icons}/>}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message 
                        ? <MaterialCommunityIcons name="microphone" size={28} color="white"/>
                        : <MaterialIcons name="send" size={28} color="white" />}
                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;