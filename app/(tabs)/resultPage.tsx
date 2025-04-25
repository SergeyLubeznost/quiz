import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../_components/_header";
import { RootState } from "../store/store";
import scales from "../_components/dataFolder/dataAnswer";
import { useDispatch, useSelector } from "react-redux";
import resultDisplay from "../_styleQuizQuestions/styles/_resultDisplay";
import answerKeys from "../_components/dataFolder/professions";

export default function ResaltPage() {
  const { currentQuestionIndex, answers } = useSelector(
    (state: RootState) => state.quiz
  );

  const images: { [key: string]: any } = {
    "человек – техника": require("../_components/dataFolder/image/человек-техника.png"),
    "человек – человек": require("../_components/dataFolder/image/человек-человек.png"),
    "человек – природа": require("../_components/dataFolder/image/человек-природа.png"),
    "человек – знаковая система": require("../_components/dataFolder/image/знаковая-система.png"),
    "человек – искусство": require("../_components/dataFolder/image/человек-искусство.png"),
  };

  const results = scales
    .map((scale) => {
      const matchingAnswers = scale.answers.filter((answer) =>
        answers.some(
          (userAnswer) =>
            userAnswer.questionId === answer.questionNumber &&
            userAnswer.answer === answer.answer
        )
      );
      return {
        title: scale.title,
        answers: matchingAnswers.map((answer) => answer.questionNumber),
      };
    })
    .filter((result) => result.answers.length > 0);

  if (results.length === 0) {
    console.log(
      "Results array is empty. Please check the logic for generating results."
    );
  }

  const maxAnswersLength = Math.max(
    ...results.map((result) => result.answers.length)
  );

  const maxScales = results.filter(
    (result) => result.answers.length === maxAnswersLength
  );

  console.log("Max Scales:", maxScales);

  const matchedProfessions = answerKeys.filter((item) =>
    maxScales.some((scale) => scale.title === item.scale)
  );

  console.log("Matched Professions:", matchedProfessions);
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]}>
        <ScrollView>
          <View style={resultDisplay.resultContainerDisplay}>
            <Header />
            <View style={resultDisplay.resultContainer}>
              {results.map((result) => (
                <View key={result.title} style={resultDisplay.resultScaleCon}>
                  <View style={resultDisplay.titleScaleContainer}>
                    <Text style={resultDisplay.titleScale}>{result.title}</Text>
                  </View>

                  <View style={resultDisplay.countScaleContainer}>
                    {result.answers.map((answer) => (
                      <View key={answer} style={resultDisplay.countBlock}>
                        <Text style={resultDisplay.count}>{answer}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            <View style={resultDisplay.discriptionContainer}>
              <Text style={resultDisplay.discTitle}>Описание результатов</Text>

              {matchedProfessions.map((item) => (
                <View style={resultDisplay.containerCard}  key={item.scale}>
                  <Image
                    source={images[item.scale]}
                    style={{ width: 100, height: 80 }}
                  />
                  <Text style={resultDisplay.titleCard}>{item.scale}</Text>
                  <View style={resultDisplay.orderContainer}>
                  {item.professions.map((it, index) => (
        <Text key={index} style={resultDisplay.orderProfessions}>&bull; {it}</Text>
      ))}
                  </View>
                  <Text style={resultDisplay.discription}>{item.description}</Text>
                </View>
              ))}

<TouchableOpacity style={resultDisplay.buttonFormToGo}>
        
        <Text style={resultDisplay.buttonTextFormToGo}>Записаться на консультацию профориентолога</Text>
        
        </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
