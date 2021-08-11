import React from 'react';
import { StyleSheet, View,TextInput,Button } from 'react-native';

const MyTopBar = ({searchInput,setSearchInput}) => {

  return (
    <View>
       <TextInput
       style={styles.input}
       onChangeText={(text) => {setSearchInput(text)}}
       
      />
      <Button
        onPress={() => {searchInput}}
        title="Search"
        color="#841584"
      />
    </View>
  );
  
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });

  export default MyTopBar;