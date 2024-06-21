import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from "./../components/ImageSlider"
import BodyParts from './../components/BodyParts'
export default function home() {
  return (
    <SafeAreaView
      style={tw`flex-1 bg-white space-y-8 flex `}
      edges={["top"]}
    >
      <StatusBar style="dark" />
      {/* punch line and avatar */}
      <View style={tw`flex-row  items-center justify-between mx-5`}>
        <View style={ tw`space-y-2`}>
        <Text  style={[tw`font-bold tracking-wider text-neutral-700 `, {fontSize: hp(4.5)}]}>Ready To</Text>
        <Text  style={[tw`font-bold tracking-wider text-rose-500 `, {fontSize: hp(4.5)}]}>Workout</Text>
      </View>

      <View  style={tw`flex justify-center items-center space-y-2 `}>
      <Image
        style={[tw`rounded-full border-[2px] border-neutral-400`,{ height: hp(6), width: hp(6) }]}
        source={{
          uri: "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197912.png",
        }}
      />
      <View style={[tw`bg-neutral-200 rounded-full flex  items-center justify-center border=[3px] border-neutral-300 my-2 `,{height: hp(5.5), width: hp(5.5) }]}>
      <Ionicons name="notifications" size={30} color="gray" />
      </View>
      </View>
      </View>
      {/* image slider */}
      <View>
      <ImageSlider/>
      </View>
      <View style={tw`flex-1  `}>
       <BodyParts/>
      </View>
    </SafeAreaView>
  );
}
