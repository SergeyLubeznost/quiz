import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "yellow",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(255, 255, 255, 0.0)", // Задайте цвет с прозрачностью
          borderTopWidth: 0, // Убирает верхнюю границу
          elevation: 0, // Убирает тень на Android
        },
      }}
    >
      
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Image
              style={stylesTabs.tabsImage}
              source={
                color === "yellow"
                  ? require("./homeImg/Group 29.png") // изображение для активного состояния
                  : require("./homeImg/Group 28.png")
              } // изображение для неактивного состояния}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="quiz"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Image
              style={stylesTabs.tabsImage}
              source={
                color === "yellow"
                  ? require("./homeImg/Group 30.png") // изображение для активного состояния
                  : require("./homeImg/Group 31.png")
              } // изображение для неактивного состояния}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="resultPage"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Image
              style={stylesTabs.tabsImage}
              source={
                color === "yellow"
                  ? require("./homeImg/Group 33.png") // изображение для активного состояния
                  : require("./homeImg/Group 32.png")
              } // изображение для неактивного состояния}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="formScreen"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Image
              style={stylesTabs.tabsImage}
              source={
                color === "yellow"
                  ? require("./homeImg/Group 35.png") // изображение для активного состояния
                  : require("./homeImg/Group 34.png")
              } // изображение для неактивного состояния}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const stylesTabs = StyleSheet.create({
  tabsImage: {
    marginTop: "auto",
    marginBottom: "auto",
    width: 80,
    borderRadius:10
  },
});
