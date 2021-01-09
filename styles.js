import { StyleSheet } from "react-native";

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
      width: 100,
      height: 50
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });