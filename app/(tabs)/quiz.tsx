import { Text, View, TouchableWithoutFeedback  } from "react-native";
import stylesQuiz from '../_styleQuizQuestions/styles/_styleQuiz'
import Header from "../_components/_header";




function StartBlock() {
  return (
  <View style={stylesQuiz.containerStartBlock}>
    <Text style={stylesQuiz.titleStartBlock}>тест климова</Text>
    <Text style={stylesQuiz.textStartBlock}>
      Тест Климова — зачем он нужен?? {'\n'}
      {'\n'}
      Когда ты выбираешь свою будущую профессию,
      это похоже на начало приключения с чистого листа. Важно понять свои
      таланты и интересы, чтобы идти по пути, который подходит именно тебе.{'\n'} 
      {'\n'}
      Он
      поможет тебе узнать, какие профессии могут быть тебе интересны и подходят
      под твои способности. Это важно, потому что выбор профессии влияет на твою
      будущую жизнь и карьеру.
    </Text>
  </View>
  )
}

export default function AboutScreen() {
  return (
    <View style={stylesQuiz.container}>
      <Header />
      <StartBlock />
      <TouchableWithoutFeedback onPress={() => console.log('Tapped!')}>
      <View style={stylesQuiz.buttonStartQuiz}>
        <Text style={stylesQuiz.textStartQuiz}>Пройти тест</Text>
      </View>
    </TouchableWithoutFeedback>
    </View>
  );
}


