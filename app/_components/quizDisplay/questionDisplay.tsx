//import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState,useEffect } from "react";
//import dataQuestion, { Question } from "../dataFolder/data";
import * as Progress from 'react-native-progress';

import { useDispatch, useSelector } from "react-redux";
import { setAnswer, nextQuestion, resetQuiz} from "../../store/slice/quizSlice";
import { RootState } from "../../store/store";

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Определите типы для Option и QuestionNum
interface Option {
  text: string;
  value: string;
}

interface QuestionNum {
  id: number;
  question: string;
  options: Option[]; // Исправлено: options - массив
}

interface QuizDisplayProps {
  arr: QuestionNum[];  // Проп arr - массив QuestionNum объектов
}

export default function QuizDisplay( {arr}: QuizDisplayProps ) {

 


  type RootStackParamList = {
    resultPage: undefined;
    // Добавьте другие экраны при необходимости
  };

  type QuizScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'resultPage'
>;

  const navigation = useNavigation<QuizScreenNavigationProp>(); // Получаем navigation
  const handlePress = () => {
    navigation.navigate('resultPage'); 
  };

  const dispatch = useDispatch();
  const { currentQuestionIndex, answers } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleOptionPress = (value: string) => {
    dispatch(setAnswer({ questionId: currentQuestionIndex +1, answer: value })); // Добавляем ответ в хранилище
    dispatch(nextQuestion()); // Переходим к следующему вопросу
  };

  const handleReset = () => {
   console.log("click")
    dispatch(resetQuiz());
  };

  const currentQuestion: QuestionNum | undefined =
    arr[currentQuestionIndex];

    const totalQuestions = arr.length

     const progress = (currentQuestionIndex + 1) / totalQuestions;

  return (
    <View style={styles.container}>
      {currentQuestion ? (
        <View>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          <View style={styles.containerQuestion}>
            {currentQuestion.options.map((option, index) => (
              <View style={styles.cardQuestion} key={index}>
                <Image
                  source={require("./istockphoto-1398132096-1024x1024 1.png")}
                />
                <TouchableWithoutFeedback
                  onPress={() => handleOptionPress(option.value)}
                >
                  <Text style={styles.option}>{option.text}</Text>
                </TouchableWithoutFeedback>
              </View>
            ))}
          </View>
          
          <Progress.Bar style={styles.progress} progress={progress} width={370} height={18}
           borderColor="#FFD800" // Цвет границы
        color="#FFD800" // Цвет заполняемой шкалы
       
        borderWidth={1} // Толщина границы
          />
        </View>
      ) : (
        <View>
          <Text style={styles.finalMessage}>
            Спасибо за участие! 
          </Text>
          
          <TouchableWithoutFeedback  onPress={() => handleReset()} style={styles.buttonAgainTest} >
            <Text style={styles.buttonAgainTestText} >Пройти заново</Text>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handlePress} style={styles.buttonToResult}>
            <Text style={styles.buttonToResultText}>
              Перейти на страницу результатов
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    fontSize: 10,
    marginVertical: 10,
    color: "black",
  },
  finalMessage: {
    fontSize: 18,
    textAlign: "center",
  },
  containerQuestion: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cardQuestion: {
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    borderRadius: 10,
    width: "48%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  buttonAgainTest: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAgainTestText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 55,
    backgroundColor: "black",
    textAlign: "center", // Добавлено для центрации текста
    lineHeight: 55, // Чтобы текст по вертикали также был выровнен по центру
    borderRadius: 10,
    fontSize: 18,
    color:"#FFD800",
    marginBottom:15,
    marginTop:15,
  },
  buttonToResult: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonToResultText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 55,
    backgroundColor: "#FFD800",
    textAlign: "center", // Добавлено для центрации текста
    lineHeight: 55, // Чтобы текст по вертикали также был выровнен по центру
    borderRadius: 10,
    fontSize: 18,
  },
  progress:{
    marginTop:30
  }
});
