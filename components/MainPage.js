import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'
import Main from './main'
import Register from './register'
import AccountProfile from './accountProfile'
import SideBar from './sidebar'

// export default class MainPage extends Component {
//
//  render(){
//    return (
//     <View>
//      <Text>helloooo</Text>
//    </View>
//    )
//  }
//
// }


const MyMenu = createDrawerNavigator(
  {
    Home : Main,
    Second : AccountProfile
  },
  {
    initialRouteName : 'Home',
    navigationOptions: {
      header : null,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    contentComponent : SideBar,
    drawerWidth : 200

  }
)
console.log("MY MENU PROPS:", this.props)

export default MyMenu
