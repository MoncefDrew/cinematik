import { View, Text, StyleSheet } from 'react-native';
import "../global.css"
import {Link} from 'expo-router'

export default function App() {
  return (
    <View className='h-full w-full items-center justify-center ' >
      <Text className='text-3xl color-black-100 font-pregular '>Aora!</Text>
      <Link href="./tabs/home">Home</Link>
    </View>
  );
}

