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



const Navigation = createStackNavigator ({
  First: {screen: Login},
  Second: {screen: MyMenu},
  Third: {screen: Register},
  Fourth: {screen: ButtonsList},
  Fifth: {screen: SignInBase},
  Sixth: {screen: Tabs},

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
