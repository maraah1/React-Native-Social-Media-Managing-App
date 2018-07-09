import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View , Picker, FormLabel, FormInput} from 'react-native';
import { Button } from 'react-native-elements';

export default class Register extends Component {

render(){

  return (
    <View style={styles.container}>
        <Text h1>Register</Text>

        <FormLabel>Name</FormLabel>
        <FormInput style={styles.textBox}

        />
        <FormLabel>Email</FormLabel>
        <FormInput style={styles.textBox}

        />
        {/* <Picker
          // selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          // onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Company" value="Company" />
          <Picker.Item label="Personal Brand" value="Personal Brand" />
        </Picker> */}

        <FormLabel>Phone</FormLabel>
        <FormInput style={styles.textBox}

        />
        <FormLabel>Password</FormLabel>
        <TextInput style={styles.textBox}

        />
        <FormLabel>Confirm Password</FormLabel>
        <FormInput style={styles.textBox}

        />

        <Button
          raised
          style={{width: 100, height: 100}}
          onPress = {
            () => navigate("First", {})
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
