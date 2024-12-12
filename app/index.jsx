import { View, Text, StyleSheet } from 'react-native';
import "../global.css"
import { ScrollView } from 'react-native';
import '../constants/images'
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images';
import CustomButton from "../components/CustomButton";
import { StatusBar } from 'expo-status-bar';
import { router,Redirect } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-5">
          <Image source={images.logo} className="w-[130px] h-[84px] " resizeMode='contain' />
          <Image source={images.cards} className="max-w-[380px] w-full h-[320px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text
              style={{
                fontSize: 24,
                color: "#FFFFFF",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Discover Endless Possibilities with{" "}
              <Text style={{ color: "#FFA001" }}>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

