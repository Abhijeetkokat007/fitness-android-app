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
import { Text, View, Image } from "react-native";
import {StatusBar} from "expo-status-bar"
import {LinearGradient} from "expo-linear-gradient"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
// import tailwindcss from "tailwindcss"
import tw from "twrnc";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar barStyle="light-content" />
      <Image
        style={{height:"100%", width: "100%", position: "absolute" }}
        source={{ uri: 'https://i.pinimg.com/originals/79/23/a0/7923a02a292883a741bfa115374bacff.jpg' }}
      />
      <LinearGradient 
      colors={['transparent', '#18181b']}
      style={{width: wp(100) , height: hp(100), flex: 1, justifyContent: "end"}}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.8}}
     
       >
        <View className="text-center" style={tw`flex items-center`}>
          <Text className="text-white" style={tw`text-6xl mb-2 font-bold`}>Hello Abhijeet</Text>
          <Text className="text-red-500" style={tw`text-2xl mb-16`}>This is a Welcome to Fitness Club</Text>
        </View>
       </LinearGradient>
    
    </View>
  );
}
