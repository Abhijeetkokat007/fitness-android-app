// import { StyleSheet, Text, View } from "react-native";

// export default function Page() {
//   return (
//     <View className="bg-red-300" style={styles.container}>
//       <View style={styles.main}>
//         <Text style={styles.title} className="bg-red-300">Hello Abhijeet</Text>
//         <Text style={styles.subtitle}>This is the first page of your app.</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     padding: 24,
//   },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
// });

import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "twrnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated ,{  FadeInDown } from 'react-native-reanimated';
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar barStyle="light-content" />
      <Image
        style={{ height: "100%", width: "100%", position: "absolute" }}
        source={{
          uri: "https://i.pinimg.com/originals/79/23/a0/7923a02a292883a741bfa115374bacff.jpg",
        }}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        // style={{width: wp(100) , height: hp(100), flex: 1, justifyContent: "end"}}
        style={[
          tw`flex justify-end pb-12 space-y-8`,
          { width: wp(100), height: hp(100) },
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View entering={FadeInDown.delay(100).springify()} style={tw`flex items-center mb-5`}>
          <Text
            style={[
              tw`text-white   font-bold tracking-wide`,
              { fontSize: hp(5) },
            ]}
          >
            Best<Text style={tw`text-rose-500`}> Workouts</Text>
          </Text>
          <Text
            style={[
              tw`text-white   font-bold tracking-wide`,
              { fontSize: hp(5) },
            ]}
          >
            For you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
          onPress={()=> router.push('home')}
          style={[
              tw`bg-rose-500  flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200`,
              { height: hp(7), width: wp(80) },
            ]}>
            <Text style={[
              tw`text-white   font-bold tracking-widest`,
              { fontSize: hp(3) },
            ]}>
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
    </GestureHandlerRootView>
  );
}
