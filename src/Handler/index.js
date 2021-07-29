import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyTopBar from '../../MyTopBar/Index';
import MyBottomBar from '../MyBottomBar';
import LinkPage from '../LinkPage';
const Handler = () => {
const [searchInput, setSearchInput] = useState("");
const [linkInput, setLinkInput] = useState("");
const [titleInput, setTitleInput] = useState("");


  return (
    <View >
      <MyTopBar searchInput={searchInput} setSearchInput={setSearchInput}/>
      <MyBottomBar/>
      <LinkPage 
      linkInput={linkInput}
      setLinkInput={setLinkInput}
      titleInput={titleInput}
      setTitleInput={setTitleInput}
      />
    </View>

  );
}
export default Handler;