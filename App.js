import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavogatior} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import ListCliente from './components/Clients/ListClientes.js' 

function HomeScreen(){
  return(
    <StatusBar
      animated={true}
      backgroundColor="#61dafb">
      <view>
        <text>Tela Principal</text>
      </view>

    </StatusBar>
  )
}




export default function App() {
  return ()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
