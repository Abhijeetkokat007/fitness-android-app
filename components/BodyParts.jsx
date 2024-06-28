import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { bodyParts } from './../constants';
import { LinearGradient } from 'expo-linear-gradient';

const BodyParts = () => {
  return (
    <View style={styles.container}>
      <Text style={[tw`font-semibold text-neutral-700`, { fontSize: hp(3) }]}>Exercises</Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => <BodyPartCard index={index} item={item} />}
      />
    </View>
  );
};

const BodyPartCard = ({ item }) => {
  return (
    <View>
      <TouchableOpacity
        style={[tw`flex justify-end p-2 mb-4`, { width: wp(44), height: hp(25) }]}
      >
        <Image
          source={item.source}
          resizeMode='cover'
          style={[tw`rounded-[35px] absolute`, { width: wp(42), height: hp(25) }]}
        />

        <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={[tw` absolute bottom-0 rounded-b-[35px] `, { width: wp(42), height: hp(15) }]}
        />

        <Text
        style={[tw`text-white font-semibold text-center tracking-wide pb-2`, { fontSize: hp(2.3)}]}
        >
           {item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  flatListContent: {
    paddingBottom: hp(10),
    paddingTop: hp(2),
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default BodyParts;
