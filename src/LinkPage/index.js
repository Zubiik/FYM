import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';


const LinkPage = ({titleInput,setTitleInput,linkInput,setLinkInput}) => {
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
};

export default LinkPage;
