import { StyleSheet } from "react-native";

 const styleFormScreen = StyleSheet.create({
    formContainerScreen:{
paddingTop:10
    },
    formContainer:{
        marginTop:80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    formTitle:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        width:"80%",
        marginTop:60,
    },
    form:{
         width:"90%",
         alignItems:"center",
         marginTop:70,
    },
    inputForm:{
        borderWidth:1,
        borderColor:"#DED1D1",
        width:"90%",
        height:55,
        marginBottom:30,
        borderRadius:10,
    },
    buttonForm:{
    backgroundColor: "#FFD800", // цвет кнопок
    padding: 10,
    width: 162,
    height: 45,
    borderRadius: 10, // округление углов
    },
    textForm:{
        margin: "auto",
        fontSize: 12,
        fontWeight: "bold",
    }
 });
 export default styleFormScreen