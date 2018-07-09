import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchUser } from '../redux/actions/users'

export default class Login extends Component {
 static navigationOptions = {
   title: 'Login'
 }

state= {
  email: '',
  password: ''
}


handleSubmit = e => {
  console.log("handle submit called")
  fetchUser(this.state)
}


render(){
  const { navigate } = this.props.navigation
  return (
    <View style={styles.container}>
        <Text h1>Login</Text>
        <TextInput
          style={styles.textBox}
          autoCapitalize= 'none'
          onChangeText= {(email) => this.setState({email})}
          value={this.state.email}

        />
        <TextInput
          style={styles.textBox}
          autoCapitalize= 'none'
          onChangeText= {(password) => this.setState({password})}
          value={this.state.password}

        />
        <Button
          raised
          style={{width: 100, height: 100}}
          onPress = {
            (e) => {this.handleSubmit()}
          }
          title = "Login"
        />
        <Button
          raised
          style={{width: 100, height: 100}}
          onPress = {
            () => navigate("Second", {})
          }
          title = "Register"
        />
    </View>
  )
}

}





const styles = StyleSheet.create({
  container: {
    paddingTop: 50 + '%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    height: 20 + '%',
    width: 45 + '%',
    borderWidth: 1,
    borderColor: 'black',
    margin: 1 + '%'

  }
});
