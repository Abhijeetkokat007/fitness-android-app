// import React from 'react'
// import { View, Text } from 'react-native'
// import Carousel ,{ParallaxImage} from 'react-native-snap-carousel';
// import {sliderImages} from './../constants';
// import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
// export default function ImageSlider() {
//   return (
//     // <Carousel
//     // data={sliderImages}
//     // loop={true}
//     // autoplay={true}
//     // renderItem={ItemCard}
//     // hasParallexImages={true}
//     // sliderWidth={wp(100)}
//     // firstItem={1}
//     // autoplayInterval={4000}
//     // itemWidth={wp(100)-70}
//     // slideStyle={{display: 'flex', alignItems: 'center'}}
//     // />
//     <View>
//       hello
//     </View>
//   )
// }

// const ItemCard = ({item, index}, parallaxprop) =>{
//    return (
//  <View style={{width: wp(100)-70, height: hp(25)}}>
// <ParallaxImage
// source={item}
// containerStyle={{borderRadius: 30, flex:1}}
// style={{resizeMode: 'contain'}}
// parallaxFactor={1}
// {...parallaxProps}
// />
//  </View>
//    )
// }

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width: screenWidth } = Dimensions.get('window');

const ImageSlider = () => {
  const imageHeight = 500;
  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <SimpleCarousel 
          data={[
            {
              title: 'Hokkaido',
              source: 'https://wallpapercave.com/wp/wp4659392.jpg',
            },
            {
              title: 'Tokyo',
              source: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?cs=srgb&dl=active-aerobics-balance-868483.jpg&fm=jpg',
            },
            {
              title: 'Osaka',
              source: 'https://www.lakeshoresf.com/wp-content/uploads/2021/04/Kids-Fitness-Training-Lincoln-Park-Chicago-scaled.jpeg',
            },
            {
              title: 'Kyoto',
              source: 'https://images8.alphacoders.com/110/thumb-1920-1106033.jpg',
            },
            {
              title: 'Shimane',
              source: 'https://www.fyzical.com/littleton-co/media/img/403564/Fitness_and_Wellness.jpg',
            }
          ]}
          renderItem={(props, index, itemWidth) => {
            // Set image height based on item width
            
            
            return (
              <Banner
                id={`${props.title}_${index}`}
                source={{ uri: props.source }}
                width={wp('97%')} // Make the Banner width 80% of screenWidth
                height={imageHeight}
                onPress={(id) => console.log(`${id} was tapped.`)}
              />
            )
          }} 
          itemWidth={wp('90%')} // Set itemWidth to 80% of screenWidth using wp
        />
      </View>
      <StatusBar translucent={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    paddingVertical: 12,
    width: '100%',
    height: '500px',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default ImageSlider;
