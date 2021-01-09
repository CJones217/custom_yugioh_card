import React from 'react';
import {StyleSheet, TouchableOpactiy, Text, View } from 'react-native';

export default function FlatButton({text, pressed}) {
    return(
        <TouchableOpactiy onPress={pressed}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpactiy>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#254cd0"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform:"capitalize",
        fontSize: 16,
        textAlign:"center"
    }
})