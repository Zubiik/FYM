import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

const MyBottomBar = () => {

  return (
    <View style={styles.input}>
       
    <Button
  onPress={() => null}
  title="Favorite"
  color="#841584"
/>
<Button
  onPress={() => null}
  title="Add map"
  color="#841584"
/>
    </View>
  );
  
}

const styles = StyleSheet.create({
    input: {
      height: 5,
      margin: 12,
      borderWidth: 1,
    },
  });

  export default MyBottomBar;