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
import { useDispatch, useSelector } from "react-redux";

export default function ResaltPage() {
  const { currentQuestionIndex, answers } = useSelector(
    (state: RootState) => state.quiz
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]}>
        <ScrollView>
          <View>
            <Header />
            <Text>
              Спасибо за участие! Ваши ответы: {JSON.stringify(answers)}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
