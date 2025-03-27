import { Text, TouchableOpacity, View, Image, ScrollView, StatusBar } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Header from "../_components/_header";
import { Link } from "expo-router";
import Swiper from 'react-native-swiper';
import {styles} from "./stylesMain";

export default function Index() {
  return (

    <SafeAreaProvider>
    <SafeAreaView style={styles.containerSafe} edges={['top']}>
      <ScrollView style={styles.scrollView}>
    
    <View style={styles.container}>
    <Header />
      <View style={styles.containerMain}>
        <Image
          source={require("./homeImg/Rectangle 21.png")}
          style={styles.image}
        />
        <View style={styles.containerButtonHome}>
        
       
      
        <TouchableOpacity style={styles.buttonGoTest}>
        
        <Text style={styles.buttonTextQuiz}>Пройти тест</Text>
        
        </TouchableOpacity>
       
      <TouchableOpacity style={styles.buttonGoForm}>
        <Text style={styles.buttonText}>Связаться</Text>
      </TouchableOpacity>
          </View>
      </View>

      <View style={styles.mainInfo}>
      <Text style={styles.mainInfoText}>
      Компания NeoDev предлагает широкий спектр тестов для профориентации, специально разработанных для школьников и студентов.
       Эти тесты помогают молодым людям определить свои интересы, склонности и сильные стороны, что, в свою очередь, 
       способствует более осознанному выбору будущей профессии. Каждый тест учитывает индивидуальные особенности пользователей,
        что делает процесс поиска подходящей карьеры более эффективным и персонифицированным. 
      NeoDev стремится помочь молодежи уверенно ступать на путь профессионального развития и самоопределения.
      </Text>
      </View>
     
      <View style={styles.swiperContainer}>
        <Text style={styles.swiperContainerTitle}>NeoDev отвечает на три самых важных вопроса профориентации:</Text>
     
        <Swiper style={styles.wrapper} showsButtons={true}>
  <View style={styles.slide1}>
    <Image
        source={require("./homeImg/Rectangle 78.png")}
        style={styles.imageSlider}
    />
    <Text style={styles.imageText}>Что мне интересно?</Text>
  </View>
  <View style={styles.slide2}>
    <Image
        source={require("./homeImg/Rectangle 78.png")}
        style={styles.imageSlider}
    />
    <Text style={styles.imageText}>В чем я силен?</Text>
  </View>
  <View style={styles.slide3}>
    <Image
        source={require("./homeImg/Rectangle 78.png")}
        style={styles.imageSlider}
    />
    <Text style={styles.imageText}>Каковы перспективы выбранной профессии?</Text>
  </View>
</Swiper>
     
      </View>

      
      <Text style={styles.text}>Home screen</Text>
    
    </View>

    </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  
  );
}


