import React from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import FlatButton from './button.js';
//import styles from './styles.js';

//const image = {require("./monster_template.png")};
//uri: "https://reactjs.org/logo-og.png" 


const App = () => (
  <View style={styles.container}>
    <ImageBackground style={styles.image} source={require("./monster_template.png")} >
      <Text style={styles.text}>Fuck</Text>
    </ImageBackground>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position:'relative',
    resizeMode: "cover"
  },
  image: {
    position:'absolute',
    resizeMode: "cover",
    justifyContent: "center",
    width: 411,
    height: 657
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});


export default App;