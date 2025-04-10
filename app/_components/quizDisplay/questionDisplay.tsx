import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import dataQuestion, { Question } from "../dataFolder/data";

import { useDispatch, useSelector } from "react-redux";
import { setAnswer, nextQuestion, resetQuiz} from "../../store/slice/quizSlice";
import { RootState } from "../../store/store";

export default function QuizDisplay() {
  const dispatch = useDispatch();
  const { currentQuestionIndex, answers } = useSelector(
    (state: RootState) => state.quiz
  );

  const handleOptionPress = (value: string) => {
    dispatch(setAnswer({ questionId: currentQuestionIndex, answer: value })); // Добавляем ответ в хранилище
    dispatch(nextQuestion()); // Переходим к следующему вопросу
  };

  const handleReset = () => {
   
    dispatch(resetQuiz());
  };

  const currentQuestion: Question | undefined =
    dataQuestion[currentQuestionIndex];

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
        </View>
      ) : (
        <View>
          <Text style={styles.finalMessage}>
            Спасибо за участие! Ваши ответы: {JSON.stringify(answers)}
          </Text>
          <TouchableWithoutFeedback style={styles.buttonAgainTest} >
            <Text style={styles.buttonAgainTestText}  onPress={() => handleReset()}>Пройти заново</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.buttonToResult}>
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
});
