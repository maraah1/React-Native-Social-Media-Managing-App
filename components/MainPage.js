import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'
import Main from './main'
import Register from './register'
import AccountProfile from './accountProfile'
import SideBar from './sidebar'

const MenuNav = createDrawerNavigator(
  {
    Home : SideBar
  },
  {
    initialRouteName : 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    contentComponent : Main,
    drawerWidth : 200

  }
)

class MyMenu extends React.Component {
  static router = MenuNav.router;

  state = {
    accounts: []
  }

  getSideMenuInfo(id){
    axios.get(`http://localhost:8000/sidemenu/${id}`)
     .then(results => {
       this.setState({
         accounts : results.data
       })
     })
  }

  render() {
    const { navigation } = this.props;
    return <MenuNav navigation={navigation} screenProps={{getSideMenuInfo:this.getSideMenuInfo.bind(this), accounts: this.state.accounts} } />;
  }
}

export default MyMenu
