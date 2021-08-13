import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,TextInput,Button } from 'react-native';
import {Container, CustomButton, TextCustom} from "./styled";

const MyBottomBar = ({setOnOffButton}) => {

  return (
    <Container>
       <CustomButton onPress={() => setOnOffButton(true) }>
        <TextCustom>
         retour
        </TextCustom>
      </CustomButton>
  
      <CustomButton onPress={() => setOnOffButton(false)}>
        <TextCustom>
         Add map
        </TextCustom>
      </CustomButton>
    </Container>
  );
  
}


  export default MyBottomBar;