import { StyleSheet } from "react-native";

const stylesResult = StyleSheet.create({
  resultContainerDisplay: {
    alignItems: "center", // выравнивание по центру, если это необходимо
    paddingTop: 80,
   
  },
  resultContainer: {
    height: 207,
    width: "100%",
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

  containerCard: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#3C474C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom:80
  },
  titleCard: {
    fontSize:12,
    fontWeight:"bold",
    marginBottom:20,
    marginTop:20,
  }
});

export default stylesResult;
