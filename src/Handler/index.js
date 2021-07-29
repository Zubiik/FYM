import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyTopBar from '../MyTopBar/Index';
import MyBottomBar from '../MyBottomBar';
import MapList from '../MapList';


const Handler = () => {
const [searchInput, setSearchInput] = useState("");
  return (
    <View >
      <MapList/>
      <MyTopBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <MyBottomBar/>
    </View>

  );
}
export default Handler;