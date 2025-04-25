import { StyleSheet } from "react-native";

const stylesResult = StyleSheet.create({
  resultContainerDisplay: {
    alignItems: "center", // выравнивание по центру, если это необходимо
    paddingTop: 80,
   
  },
  discTitle:{
marginTop:43,
marginBottom:20,
fontWeight:"bold",
marginLeft:"auto",
marginRight:"auto"
  },
  resultContainer: {
    height: 207,
    width: "95%",
    borderWidth: 1,
    borderColor: "#FFD800",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 28,
    borderRadius: 10,
  },
  resultScaleCon: {
    width: "100%",
    flexDirection: "row", // используйте flexDirection для горизонтального размещения
    justifyContent: "flex-end",
    alignItems: "center", // выравнивание по центру, если это необходимо
  },
  titleScaleContainer: {
    width: "48%",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  titleScale: {
    width: "100%",
    fontSize: 12,
    textAlign: "right",
  },
  countScaleContainer: {
    width: "50%",
    flexDirection: "row", // используйте flexDirection для горизонтального размещения
    justifyContent: "flex-start",
    alignItems: "center", // выравнивание по центру, если это необходимо
  },
  countBlock: {
    marginRight: 3,
    width: 14,
    height: 21,
    backgroundColor: "#005DE9",
    borderRadius: 6,
  },
  count: {
    color: "transparent",
  },

  discriptionContainer:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },

  containerCard: {
    boxSizing:"border-box",
    width: "90%",
    borderWidth: 1,
    borderColor: "#3C474C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom:40
  },
  titleCard: {
    fontSize:12,
    fontWeight:"bold",
    marginBottom:20,
    marginTop:20,
  },
  orderContainer:{
    width:"100%",

  },
  orderProfessions:{
    width:"50%",
  marginRight:"50%",
  color:"#3C474C"
  },
  discription:{
    fontSize:12,
   lineHeight:25
  },
  buttonFormToGo:{
    width:"90%",
height:58,
marginLeft:"auto",
marginRight:"auto",
backgroundColor:"#FFD800",
marginBottom:60,
borderRadius:10,
borderWidth:1,
textAlign:"center"
  },
  buttonTextFormToGo:{
    margin:"auto",
    fontSize:12,
    fontWeight:"bold"
  }
});

export default stylesResult;
