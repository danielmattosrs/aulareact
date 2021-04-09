import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavogatior} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'

function ListCliente(){
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
