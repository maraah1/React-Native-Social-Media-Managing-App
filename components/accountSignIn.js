import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import axios from 'axios'


export default class Account extends Component {

 state = {
   media_buttons_id : this.props.navigation.state.params.media_buttons_id,
   user_id: this.props.navigation.state.params.user_id,
   media_username : '',
   media_password : ''
 }

 handleSubmit = (e) => {
   axios.post(`http://localhost:8000/accountsignin`, this.state)
    .then((response) => {
      console.log("accountSignIn response:", response.data)
    })
 }

 render(){
   const {navigate} = this.props.navigation

   return(
    <View>

     <Text>{this.props.navigation.state.params.media_name}</Text>

     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(media_username) => this.setState({media_username})}
       autoCapitalize= 'none'
       placeholder= "Username"
       value={this.state.media_username}
     />

     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(media_password) => this.setState({media_password})}
       autoCapitalize= 'none'
       placeholder= "Password"
       value={this.state.media_password}
     />

     <Button
       raised
       style={{width: 100, height: 100}}
       onPress = {
         (e) => {this.handleSubmit()}
       }
       title = "Sign In"
     />
     <Button
       raised
       style={{width: 100, height: 100}}
       onPress = {
         () => navigate('Fourth', {})
       }
       title = "Back To Accounts"
     />

     <Button
       raised
       style={{width: 100, height: 100}}
       onPress = {
         () => navigate('First', {})
       }
       title = "Continue To Login"
     />
 </View>
   )
 }

}
