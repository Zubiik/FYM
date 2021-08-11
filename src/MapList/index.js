import React from 'react';
import RNUrlPreview from 'react-native-url-preview';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Container, CustomFlatList,PreviewContainer } from "./styled";
import { LinearGradient } from 'expo-linear-gradient';



const MapList = () => {
  return (
    <Container>

     <CustomFlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        data={[
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
          {
            
            url: 'https://goo.gl/maps/xoHzSq1wTn6T9isq7',
          },
        ]}
        renderItem={( item ) => {
          return <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={[ '#00EC26','#AA4B7DFC' ]}
          style={{
            borderRadius: 10,
            margin:10,
          }}
        > 
          <PreviewContainer>   

            <RNUrlPreview 
            containerStyle={{
              backgroundColor:"none",
               alignItems:"center",
               padding:4,
              }}
            text={item.item.url}/>
          </PreviewContainer>
        </LinearGradient>
        }}
      /> 
    </Container>
  );
};

export default MapList;
