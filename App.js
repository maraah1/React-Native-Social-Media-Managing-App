import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Login from './components/login';
import Main from './components/main';
import Register from './components/register';
import ButtonsList from './components/buttonsList';
import Account from './components/accountSignIn'
import MyMenu from './components/MainPage'
import AccountProfile from './components/accountProfile'
import Tabs from './components/tabs';
import SignInBase from './components/signInBase';
import Tiles from './components/tile'
import Analytics from './components/analytics'
import CardInfo from './components/CardInfo'


const Navigation = createStackNavigator ({
  First: {screen : Tiles},
  Second: {screen: Login},
  Third: {screen: MyMenu},
  Fourth: {screen: Register},
  Fifth: {screen: ButtonsList},
  Sixth: {screen: Account},
  Seventh: {screen: Tabs},
  Eighth: {screen: CardInfo}

},
  {headerMode: 'none'}


)





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation
