import React, { useState,useEffect } from "react";
import { Text, View, TouchableWithoutFeedback  } from "react-native";
import stylesQuiz from '../_styleQuizQuestions/styles/_styleQuiz'
import Header from "../_components/_header";
import QuizDisplay from "../_components/quizDisplay/questionDisplay";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";




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

  const [start, setStart] = useState<boolean>(false);

  function handleStartQuiz (){
    setStart(true);
    console.log(start);
  }

  interface Option {
    text: string;
    value: string;
  }
  
  interface Question {
    id:number;
    question: string;
    options: Option[];
  }

  // const [questions, setQuestions] = useState<Question[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  
  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       console.log('Fetching questions...');
  //       const response = await fetch(`https://quiz/bdquiz/index.php`);
  //       console.log('Response status:', response.status);
  //       //http://10.0.2.2:8080/bdquiz/ 
  //       if (!response.ok) {
  //         const errorText = await response.text(); 
  //         throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
  //       }
  
  //       const data = await response.json();
  //       console.log('Fetched data:', data);
  //       setQuestions(data);
  //     } catch (err) {
  //       console.error('Fetch error:', err);
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError('An unknown error occurred');
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchQuestions();
  // }, []);
  
  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }
  
  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }


  return (

    <View style={stylesQuiz.container}>
      <Header />
      {start ? <QuizDisplay /> : <StartBlock />}
     
      {!start && ( 
        <TouchableWithoutFeedback onPress={handleStartQuiz}>
          <View style={stylesQuiz.buttonStartQuiz}>
            <Text style={stylesQuiz.textStartQuiz}>Пройти тест</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>

  );
}


