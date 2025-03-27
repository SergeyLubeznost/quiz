import {  StyleSheet } from "react-native";

 const stylesQuiz = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      position:"relative"
    },
    text: {
      color: "#3C474C",
    },
    containerStartBlock:{
        width:"90%",
        height:"70%",
        justifyContent:"center",
        alignItems:"center"
    },
    titleStartBlock:{
        fontSize: 32,
        color:"#3C474C",
        marginBottom: 40,
         fontWeight:"700"

    },
    textStartBlock:{
      fontSize: 16,
    },
    buttonStartQuiz:{
      width:"80%",
      backgroundColor:"#FFD000",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:58,
      borderRadius:10
    },
    textStartQuiz:{
fontSize:18,
fontWeight:"700"
    }
  });
  
  export default stylesQuiz;