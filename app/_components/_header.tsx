import stylesHeader from "../_styleQuizQuestions/styles/_headerStyles" 
import { Text, View } from "react-native";
export default function Header(){
    return (
      
     <View style={stylesHeader.containerHeader}>
      <Text style={stylesHeader.textHeader}>NeoDev tests</Text>
    </View>
 
  );
}