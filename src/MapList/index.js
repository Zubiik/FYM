import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import { Container, CustomFlatList } from "./styled";


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
            
            url: 'https://www.google.fr/maps/place/Mont+Gerbier+de+Jonc/@44.8444583,4.2112452,15z/data=!3m1!4b1!4m5!3m4!1s0x12b4ce091a45f85b:0xc25f0737e4ae3bfc!8m2!3d44.844444!4d4.22',
          
          },
          {
            
            url: 'https://www.youtube.com/watch?v=-zZbkPnBtS8&t=41s',
          },
          {
            
            url: 'https://epicreact.dev/modules/react-fundamentals/react-fundamentals-welcome',
          },
          {
            
            url: 'https://www.pole-emploi.fr/accueil/',
          },
          {
            
            url: 'https://mail.google.com/mail/u/0/#inbox',
          },
        ]}
        renderItem={({ item }) => {

          return <Text>{item.id}</Text>;
        }}
      />
    </Container>
  );
};

export default MapList;
