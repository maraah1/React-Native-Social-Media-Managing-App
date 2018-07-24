import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight, Image} from 'react-native';
import { Button, Card} from 'react-native-elements';
import axios from 'axios'

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
     display: 'none',
   }
  };




state= {
  email: '',
  password: ''
}


handleSubmit = e => {
  console.log("handle submit called")

axios.post(`http://localhost:8000/login`, this.state)
    .then((response)=>{
      // console.log("response", response)
      if(response === 'false' || response === null){
      navigate('Second', {})
    }else{
      const { navigate } = this.props.navigation;
      // console.log("login response:", response.data)
      navigate('Third', {user : response.data})
    }

 })
}

render(){
  const { navigate } = this.props.navigation;
  return (
    <View style={styles.container}>

      <Image style={{height: 300, width: 300, marginLeft: 40}} source={require('/Users/maraahlee/testing/whiteIcon.png')} />

      <View style={{marginBottom: 50}}>
        <TextInput
          style={styles.textBox}
          placeholder="Enter email"
          autoCapitalize= 'none'
          onChangeText= {(email) => this.setState({email})}
          value={this.state.email}

        />,
        <TextInput
          style={styles.textBox}
          placeholder='Enter Password'
          autoCapitalize= 'none'
          onChangeText= {(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}

        />



        <Button
          style={styles.buttons}
          buttonStyle={{
             backgroundColor: "#5f66b8",
          }}
          raised
          onPress = {
            (e) => {this.handleSubmit()}
          }
          title = "Login"
        />
        <Button
          style={styles.buttons}
          color="#5f66b8"
          buttonStyle={{
             backgroundColor: "#8ee6e0",
          }}
          onPress = {
          () => navigate("Fourth", {})
          }
          title = "Register"
        />
     </View>
    </View>
  )
}

}





const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: 70 ,
    justifyContent: 'center',
    backgroundColor: 'white'
    // alignItems: 'center',


  },

  text: {
    fontSize: 30,
    textAlign : 'center',
    color : 'white',
    fontWeight: 'bold',
    shadowOffset:{  width: 0,  height: 0,  },
    shadowOpacity: 0
  },
  textBox: {
    height: 15 + '%',
    width: 70 + '%',
    marginLeft : 15 + '%',
    marginBottom : 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3

  },

   buttons: {
     width: 30 + '%',
     marginLeft: 35 + '%',
     margin: 5

   },

   textsView: {
     marginBottom: 0
   }
});
