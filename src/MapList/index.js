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
            id: '1',
            url: ' hello',
            img:'',
          },
          {
            id: '2',
            url: 'Salut',
          },
          {
            id: '3',
            url: 'hola',
          },
          {
            id: '4',
            url: 'Ramen',
          },
          {
            id: '5',
            url: 'Salam',
          },
        ]}
        renderItem={({ item }) => {
          console.log(item);

          return <Text>{item.id}</Text>;
        }}
      />
    </Container>
  );
};

export default MapList;
