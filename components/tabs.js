import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import AccountProfile from './accountProfile';
import Login from './login'

const Tabs = createBottomTabNavigator ({
  POSTS : AccountProfile,
  ANALYTICS: Login
})

export default Tabs
