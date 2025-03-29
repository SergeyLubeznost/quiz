
import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet,Image} from "react-native";
import dataQuestion, {Question} from "../dataFolder/data";

export default function QuizDisplay() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionPress = (value: string) => {
    // Добавляем ответ в массив
    setAnswers((prevAnswers) => [...prevAnswers, value]);

    // Переходим к следующему вопросу
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion: Question | undefined = dataQuestion[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {currentQuestion ? (
        <>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          <View style={styles.containerQuestion}>
          {currentQuestion.options.map((option, index) => (
            <View style={styles.cardQuestion} key={index}>
                <Image
                          source={require("./istockphoto-1398132096-1024x1024 1.png")}
                         
                        />
            <TouchableWithoutFeedback key={option.value} onPress={() => handleOptionPress(option.value)}>
              <Text style={styles.option}>{option.text}</Text>
            </TouchableWithoutFeedback>
            </View>
          ))}
          </View>
        </>
      ) : (
        <Text style={styles.finalMessage}>Спасибо за участие! Ваши ответы: {JSON.stringify(answers)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    display:"flex",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    fontSize: 10,
    marginVertical: 10,
    color: 'black'
  },
  finalMessage: {
    fontSize: 18,
    textAlign: 'center',
  },
  containerQuestion:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:"space-between"
  },
  cardQuestion:{
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
    borderRadius:10,
    width:"48%",
    display:'flex',
    justifyContent:"space-between",
    alignItems:'center',
    padding:12,
  }
});