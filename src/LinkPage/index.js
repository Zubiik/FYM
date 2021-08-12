import React from 'react';
import {
  View,StyleSheet,TextInput,Button,Text
} from 'react-native';
import { Container, TextInputCustom, CustomButton,CustomText } from './styled';


const LinkPage = ({titleInput,setTitleInput,linkInput,setLinkInput}) => {
  return (
    <Container>
       <TextInputCustom
       style={styles.input}
       onChangeText={(text) => {setTitleInput(text)}}
       placeholder={" title of your map"}
      />
       <TextInputCustom
       style={styles.input}
       onChangeText={(text) => {setLinkInput(text)
      console.log(linkInput);}}
       placeholder={" Paste link of map"}
      />
     <CustomButton 
     onPress={() => {console.log(titleInput,linkInput)}}
        title="Send">
          <CustomText>
          SEND
          </CustomText>
        </CustomButton>


    </Container>
  );
  
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });
   


export default LinkPage;
