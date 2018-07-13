import React, { Component } from 'react';
import axios from 'axios';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Icon, Header, Left } from 'native-base';
import Register from './register';
// import AccountHolder from './accountHolder'



export default class Main extends Component {


state = {
  accounts : []
}

componentWillMount = () => {
 console.log('PROPS', this.props)
 let id = this.props.navigation.state.params.user.id
 console.log("id from main:", id)
 axios.get(`http://localhost:8000/sidemenu/${id}`)
  .then(results => {
    console.log("RESULTS:", results.data)
    AsyncStorage.setItem('results', JSON.stringify(results.data))
    this.setState({
      accounts : results.data
    })
  })
}

render(){
  console.log("Main state:", this.state.accounts)
  console.log("main props:", this.props.navigation.state.params.user)


  return (

      <View>
         <Header>
           <Left>
             <Icon
               name="ios-menu"
               onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
             />
           </Left>

         </Header>

        <Text>HIIII</Text>

      </View>

    )
  }
}

// export const MyMenu = createDrawerNavigator({
//   Home: {
//     screen: MainPage
//     },
//   Setting: {
//     screen: Register
//   }
// })
