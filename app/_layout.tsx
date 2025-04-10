import { Provider } from 'react-redux';
import { store } from './store/store';

import { Stack } from 'expo-router';


export default function Layout() {
  return (
    <Provider store={store}>
    <Stack>
      {/* <Stack.Screen 
        name="index" 
        options={{ 
          title: 'NeoDev tests',
          headerStyle: { backgroundColor: '#FFD800' },
          headerTintColor: '#000000', // цвет текста заголовка
          headerTitleStyle: {
            fontSize: 24, // Задайте нужный размер шрифта
            letterSpacing: 1, // Задайте нужное расстояние между символами
            paddingVertical: 10, // Задайте вертикальный отступ
            paddingHorizontal: 16, // Задайте горизонтальный отступ
          } as any, // Добавьте это для обхода предупреждений TS
        }} 
      />
      <Stack.Screen 
        name="quiz" 
        options={{ 
          title: '',
          headerStyle: { backgroundColor: '#FFD800' },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontSize: 24, 
            letterSpacing: 1, 
            paddingVertical: 10, 
            paddingHorizontal: 16,
          } as any, 
        }} 
      /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </Provider>
  );
}


