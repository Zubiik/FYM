import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinkPage from '../LinkPage/index';
//import MapList from '../MapList';
//import MyTopBar from '../MyTopBar';
//import MyBottomBar from '../myBottomBar';

const Handler = () => {
const [searchInput, setSearchInput] = useState("");
const [linkInput, setLinkInput] = useState("");
const [titleInput, setTitleInput] = useState("");


  return (
    <View >
      
      <LinkPage 
      linkInput={linkInput}
      setLinkInput={setLinkInput}
      titleInput={titleInput}
      setTitleInput={setTitleInput}
      />
      {/*<MyBottomBar/>
      <MyTopBar 
      searchInput={searchInput} 
      setSearchInput={setSearchInput}
      />
      <MyBottomBar/>
      <MapList/>
      */}
    </View>

  );
}
export default Handler;