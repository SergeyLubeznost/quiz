import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import Header from "../_components/_header";

import styleFormScreen from "../_styleQuizQuestions/styleFormScreen";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function FormScreen() {
  type RootStackParamList = {
    formScreen: undefined;
    // Добавьте другие экраны при необходимости
  };

  type QuizScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "formScreen"
  >;

  const navigation = useNavigation<QuizScreenNavigationProp>(); // Получаем navigation

  const linkToSend = () => {
    navigation.navigate("formScreen");
  };

  return (
    // <SafeAreaView edges={["top"]}>
    <View style={styleFormScreen.formContainerScreen}>
      <Header />
      <View style={styleFormScreen.formContainer}>
        <Text style={styleFormScreen.formTitle}>
          Оставьте контакты, и мы с вами свяжемся
        </Text>
        <View style={styleFormScreen.form}>
          <TextInput
            style={[
              styleFormScreen.inputForm,
              {
                paddingHorizontal: 15, // Отступы слева и справа
                paddingVertical: 12, // Отступы сверху и снизу
              },
            ]}
            placeholder="Введите имя"
            placeholderTextColor="#A0A0A0"
          />
          <TextInput
            style={[
              styleFormScreen.inputForm,
              {
                paddingHorizontal: 15, // Отступы слева и справа
                paddingVertical: 12, // Отступы сверху и снизу
              },
            ]}
            placeholder="Введите номер"
            placeholderTextColor="#A0A0A0"
          />
          <TouchableOpacity style={styleFormScreen.buttonForm}>
            <Text style={styleFormScreen.textForm}>Отправить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      // </SafeAreaView>
  );
}
