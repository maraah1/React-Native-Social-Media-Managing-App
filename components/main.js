import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import { Button,  Header, Icon } from 'react-native-elements';
import Register from './register';



export default class Main extends Component {


componentWillMount = () => {
   let id = this.props.navigation.state.params.user.id
   this.props.screenProps.getSideMenuInfo(id)

}

render(){

  const {navigate} = this.props.navigation
   name = this.props.navigation.state.params.user.name.toUpperCase()

  return (

      <View style={styles.view}>
  
         <Header
           style={{height : 100}}
           outerContainerStyles={{ backgroundColor: 'black', height: 100 }}
         />

         <Image
            style={{height: 100, width: 100, flex:1}}
            source={require('/Users/maraahlee/testing/newAppIcon.png')}
         />

      </View>

    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    flex: 1
  },

 text: {
   marginTop: 200,
   textAlign: 'center',
   fontSize: 50,
   color: '#5f66b8'
 },
 textt: {
   marginTop: 15,
   textAlign: 'center',
   fontSize: 50,
   color: '#5f66b8'
 }

})
