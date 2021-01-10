import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground, TextInput } from 'react-native';


export default function CardOverlay(){
    return(
        <View>
            <View style={styles.cardName}>
                <TextInput style={styles.nameText}
                keyboardType="default"
                placeholder= {card.name}
                onChangeText={(val => setName(val))}/>
            </View>
            <View style={styles.cardAtk}>
                <TextInput style={styles.numText}
                keyboardType="number-pad"
                placeholder= {String(card.atk)}
                onChangeText={(val => setName(val))}/>
            </View>
            <View style={styles.cardDef}>
                <TextInput style={styles.numText}
                keyboardType="number-pad"
                placeholder= {String(card.def)}
                onChangeText={(val => setName(val))}/>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    nameText: {
      color: "black",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "left",
      textTransform:"capitalize",
      //backgroundColor: "#000000a0"
    },
    cardName: {
      position:"absolute",
      marginTop:10,
      marginLeft:30
    },
    numText: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "right",
      textTransform:"capitalize",
      //backgroundColor: "#000000a0"
    },
    cardAtk: {
      position:"absolute",
      marginTop:400,
      marginLeft:190,
    },
    cardDef: {
      position:"absolute",
      marginTop:400,
      marginLeft:255
    }
  });