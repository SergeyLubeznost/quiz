import { Text, TouchableOpacity, View, Image, ScrollView, StatusBar } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Header from "../_components/_header";
import { Link } from "expo-router";
import Swiper from 'react-native-swiper';
import styleMain from "../_styleQuizQuestions/styles/_stylesMain";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Index() {

 type RootStackParamList = {
    quiz: undefined;
    formScreen: undefined;
    // Добавьте другие экраны при необходимости
  };

  type QuizScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'quiz', "formScreen"
>;

  const navigation = useNavigation<QuizScreenNavigationProp>(); // Получаем navigation
  const linkToTest = () => {
    navigation.navigate('quiz'); 
  };
  const linkToSend = () => {
    navigation.navigate('formScreen'); 
  };


  return (

    <SafeAreaProvider>
    {/* <SafeAreaView  edges={['top']}> */}
      <ScrollView >
    
    <View style={styleMain.container}>
    <Header />
      <View style={styleMain.containerMain}>
        <Image
          source={require("./homeImg/Rectangle 21.png")}
          style={styleMain.image}
        />
        <View style={styleMain.containerButtonHome}>
        
       
      
        <TouchableOpacity style={styleMain.buttonGoTest} onPress={linkToTest}>
        
        <Text style={styleMain.buttonTextQuiz}>Пройти тест</Text>
        
        </TouchableOpacity>
       
      <TouchableOpacity style={styleMain.buttonGoForm} onPress={linkToSend}>
        <Text style={styleMain.buttonText}>Связаться</Text>
      </TouchableOpacity>
          </View>
      </View>

      <View style={styleMain.mainInfo}>
      <Text style={styleMain.mainInfoText}>
      Компания NeoDev предлагает широкий спектр тестов для профориентации, специально разработанных для школьников и студентов.
       Эти тесты помогают молодым людям определить свои интересы, склонности и сильные стороны, что, в свою очередь, 
       способствует более осознанному выбору будущей профессии. Каждый тест учитывает индивидуальные особенности пользователей,
        что делает процесс поиска подходящей карьеры более эффективным и персонифицированным. 
      NeoDev стремится помочь молодежи уверенно ступать на путь профессионального развития и самоопределения.
      </Text>
      </View>
     
      <View style={styleMain.swiperContainer}>
        <Text style={styleMain.swiperContainerTitle}>NeoDev отвечает на три самых важных вопроса профориентации:</Text>
     
        <Swiper style={styleMain.wrapper} showsButtons={true}>
  <View style={styleMain.slide1}>
    <Image
        source={require("./homeImg/Rectangle 78.png")}
        style={styleMain.imageSlider}
    />
    <Text style={styleMain.imageText}>Что мне интересно?</Text>
  </View>
  <View style={styleMain.slide2}>
    <Image
        source={require("./homeImg/Rectangle 78.png")}
        style={styleMain.imageSlider}
    />
    <Text style={styleMain.imageText}>В чем я силен?</Text>
  </View>
  <View style={styleMain.slide3}>
    <Image
        source={require("./homeImg/Rectangle 78.png")}
        style={styleMain.imageSlider}
    />
    <Text style={styleMain.imageText}>Каковы перспективы выбранной профессии?</Text>
  </View>
</Swiper>
     
      </View>

      
      <Text style={styleMain.text}>Home screen</Text>
    
    </View>

    </ScrollView>
    {/* </SafeAreaView> */}
  </SafeAreaProvider>
  
  );
}


