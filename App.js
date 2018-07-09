import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Login from './components/login';
import Main from './components/main';
import Register from './components/register'

const Navigation = createStackNavigator ({
  First: {screen: Login},
  Second: {screen: Main},
  Third: {screen: Register},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation
