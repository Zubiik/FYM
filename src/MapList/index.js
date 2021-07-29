import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const MapList = () => {
  return (
    <View>
      <FlatList
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
    </View>
  );
};

export default MapList;
