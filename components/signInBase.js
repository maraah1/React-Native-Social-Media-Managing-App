import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Image } from 'react-native-elements';
import Account from './accountSignIn'


export default class SignInBase extends Component {

  render(){

    const {navigate} = this.props.navigation

    return (
        <View>

           <Account info={this.props} />


            <Button
              raised
              style={{width: 100, height: 100}}
              onPress = {() => navigate('Fourth', {})}
              title = "Back To Accounts"
            />

            <Button
              raised
              style={{width: 100, height: 100}}
              onPress = {() => navigate('First', {})}
              title = "Continue To Login"
            />
        </View>
     )
   }
 }
