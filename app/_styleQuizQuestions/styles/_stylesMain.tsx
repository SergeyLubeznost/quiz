import { StyleSheet } from "react-native";

 const styleMain = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    position:"relative",
    paddingTop:55
  },
  containerMain: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  linkButton: {
    width: "100%",
    textAlign: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  image: {
    marginTop: 20,
  },
  containerButtonHome: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonGoTest: {
    backgroundColor: "#FFD800", // цвет кнопок
    width: 162,
    height: 45,
    padding: 10,
    borderRadius: 10, // округление углов
    marginHorizontal: 10, // отступы между кнопками
    marginRight: 10,
  },
  buttonGoForm: {
    backgroundColor: "#343434", // цвет кнопок
    padding: 10,
    width: 162,
    height: 45,
    borderRadius: 10, // округление углов
    marginHorizontal: 10, // отступы между кнопками
  },
  buttonText: {
    color: "#FFD800",
    fontSize: 16, // размер шрифта
    textAlign: "center", // выравнивание текста
  },
  buttonTextQuiz: {
    color: "#343434",
    fontSize: 16, // размер шрифта
    textAlign: "center", // выравнивание текста
  },
  mainInfo: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 38,

    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#FFD800",
    width: "100%",
  },
  mainInfoText: {
    fontSize: 16,
    textAlign: "center",
  },

  swiperContainer: {
    display: "flex",
    justifyContent: "center",
    width:"100%"
  },
  swiperContainerTitle:{
    fontSize:25,
    width:"100%",
    textAlign:"center",
    letterSpacing:2,
    fontWeight:"700",
    marginTop:"5%"
  },

  wrapper: {
    height: 400,
  },
  slide1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide2: {
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide3: {
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSlider: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  imageText: {
    position: "absolute",
    fontSize:25,
    width:195,
    zIndex: 99,
    color: "black", // Или любой другой цвет для контраста
   fontWeight:700,
    top: "20%", // Центрирование по вертикали
    left: "20%", // Центрирование по горизонтали
    transform: [{ translateX: -50 }, { translateY: -50 }] // Корректировка для центрирования
  }
  
});

export default styleMain;
