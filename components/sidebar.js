import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class SideBar extends Component {

state = {
  acc : []
}

componentWillMount(){
  AsyncStorage.getItem('results').then((value) =>{
   //console.log("ACC INFO", value)
    this.setState({acc : [...this.state.acc, JSON.parse(value)] })
  })
}


render(){
   console.log("STATE.ACC:===> \n", this.state.acc)
  const { navigate } = this.props.navigation;

  let listOfAccounts =  this.state.acc.map(account =>
    <Button key={account.media_buttons_id}
     title={account.name}
     onPress={
       () => navigate('Sixth', {
         id : account.media_buttons_id,
         user_id : account.user_id,
         name: account.name
       })
     }
   />)

  console.log('MAP STATE.ACC ====>', listOfAccounts)

  return (
    <View >
      {listOfAccounts}
    </View>
  )
}

}
