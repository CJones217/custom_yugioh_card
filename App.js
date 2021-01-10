import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground, TextInput } from 'react-native';
//import FlatButton from './button';
//import CardOverlay from './cardOverlay.js';
//import styles from './styles.js';

//const image = {require("./monster_template.png")};
//uri: "https://reactjs.org/logo-og.png" 



export default function App(){
  const [name,setName] = useState("Collin");
  const [card, setCard] = useState({card: "monster", name: "kuriboh", level: 1, attribute: "dark", type: "effect",type2:"fiend", description: "blah blah", atk:300,def:200});
  return(
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./monster_template.png")} >
            <View style={styles.cardName}>
                <TextInput style={styles.nameText}
                maxLength={20}
                keyboardType="default"
                placeholder= {card.name}
                onChangeText={(val => setName(val))}/>
            </View>
            <View style={styles.cardAtk}>
                <TextInput style={styles.numText}
                maxLength={4}
                keyboardType="number-pad"
                placeholder= {String(card.atk)}
                onChangeText={(val => setName(val))}/>
            </View>
            <View style={styles.cardDef}>
                <TextInput style={styles.numText}
                maxLength={4}
                keyboardType="number-pad"
                placeholder= {String(card.def)}
                onChangeText={(val => setName(val))}/>
            </View>
            <View style={styles.cardDesc}>
                <TextInput style={styles.descripText}
                maxLength={140}
                multiline={true}
                keyboardType="default"
                placeholder= {card.description}
                onChangeText={(val => setName(val))}/>
            </View>
      </ImageBackground>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position:'relative',
    resizeMode: "cover",
    //justifyContent: "center"
  },
  image: {
    position:'absolute',
    marginHorizontal:45,
    resizeMode: "cover",
    //justifyContent: "center",
    width: 311,
    height: 457
  },
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
  descripText: {
    color: "black",
    fontSize: 14,
    textAlign: "left",
    textTransform:"capitalize",
    //backgroundColor: "#000000a0"
  },
  cardDesc: {
    position:"absolute",
    marginTop:340,
    marginLeft:28,
    width:260,
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
    marginLeft:190
  },
  cardDef: {
    position:"absolute",
    marginTop:400,
    marginLeft:255
  }
});
