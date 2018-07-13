import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class Register extends Component {

state = {
  name: '',
  email: '',
  password: ''
}

handleSubmit = e => {
console.log("register submit hit")
axios.post(`http://localhost:8000/register`, this.state)
   .then(response => {
     console.log("register response:", response.data)
     const { navigate } = this.props.navigation
     navigate('Fourth', { user : response.data})
 })
}



render(){
  return (
    <View >
    <Text>Register</Text>

    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(name) => this.setState({name})}
      autoCapitalize= 'none'
      placeholder= "Enter Name"
      value={this.state.name}
    />

    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(email) => this.setState({email})}
      autoCapitalize= 'none'
      placeholder= "Enter Email"
      value={this.state.email}
    />

    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(password) => this.setState({password})}
      autoCapitalize= 'none'
      placeholder= "Enter Password"
      value={this.state.password}
    />
    <Button
      raised
      style={{width: 100, height: 100}}
      onPress = {
        (e) => {this.handleSubmit()}
      }
      title = "Register"
    />
    </View>
  )
}

}
