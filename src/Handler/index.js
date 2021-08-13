import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinkPage from '../LinkPage/index';
import MapList from '../MapList';
import MyBottomBar from '../MyBottomBar';
//import MyTopBar from '../MyTopBar';

const Handler = () => {
const [searchInput, setSearchInput] = useState("");
const [linkInput, setLinkInput] = useState("");
const [titleInput, setTitleInput] = useState("");
const [onOffButton,setOnOffButton] =useState(true);

  return (
    <View >
      { !onOffButton ? <LinkPage 
            linkInput={linkInput}
           setLinkInput={setLinkInput}
          titleInput={titleInput}
          setTitleInput={setTitleInput}
          /> : <MapList/>
      }
      <MyBottomBar
      setOnOffButton={setOnOffButton}
      />
     
      {/*
     
      
      <MyTopBar 
      searchInput={searchInput} 
      setSearchInput={setSearchInput}
      />
      */}
    </View>

  );
}
export default Handler;