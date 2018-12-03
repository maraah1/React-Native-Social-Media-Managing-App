import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Image, Header, Icon } from 'react-native-elements';
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
   const name = this.props.navigation.state.params.media_name


   return(
      <View style={{backgroundColor: 'white', flex: 1}}>

         <Header
           outerContainerStyles={{ backgroundColor: 'black'}}
           centerComponent={<Text style={styles.text}>{name}</Text> }
           leftComponent={
             <Icon
             name='keyboard-arrow-left'
             color='#8ee6e0'
             onPress = {() => navigate('Fifth', {})}
            />
           }
         />

         <View style={styles.inputs}>

             <TextInput
               style={styles.textBox}
               onChangeText={(media_username) => this.setState({media_username})}
               autoCapitalize= 'none'
               placeholder= "Username"
               value={this.state.media_username}
             />

             <TextInput
               style={styles.textBox}
               onChangeText={(media_password) => this.setState({media_password})}
               autoCapitalize= 'none'
               placeholder= "Password"
               value={this.state.media_password}
               secureTextEntry={true}
             />


             <Button
               raised
               color='#5f66b8'
               buttonStyle={{ backgroundColor: "#8ee6e0" }}
               style={styles.postButtons}
               onPress={ (e) => {this.handleSubmit()} }
               title = "Sign In"
             />
         </View>

           <Button
             style={{marginTop: 0}}
             color='#5f66b8'
             buttonStyle={{ backgroundColor: 'white'}}
             onPress = { () => navigate('Second', {})}
             title = 'Continue To Login'
           />

      </View>
    )
  }
}


const styles = StyleSheet.create({

  textBox: {
    height: 50 ,
    width: 300 ,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3

  },

  inputs: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer:{
    marginTop: 40
  },

  postButtons: {
    height: 100,
    width: 100,
    margin: 10,
    marginTop: 15
  },

  text : {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8ee6e0'
  },

  link: {
    fontWeight: 'bold',
    marginTop: 0
  }

})
