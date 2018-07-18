import React, { Component } from 'react';
// import axios from 'axios';
import { createDrawerNavigator, DrawerItems, DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Icon, Header, Left } from 'native-base';
import Register from './register';

// import AccountHolder from './accountHolder'



export default class Main extends Component {

  // static navigationOptions = {
  //   headerVisible : false
  // };

componentWillMount = () => {
 console.log('PROPS', this.props)
 let id = this.props.navigation.state.params.user.id
 console.log("id from main:", id)
 this.props.screenProps.getSideMenuInfo(id)

}

render(){
  // console.log("Main state:", this.state.accounts)
  // console.log("main props:", this.props.navigation.state.params.user)
  console.log('INSIDE MAIN RENDER', this.props)
  const {navigate} = this.props.navigation
   name = this.props.navigation.state.params.user.name.toUpperCase()

  return (

      <View>
         <Header
           style={{height : 100}}
           outerContainerStyles={{ backgroundColor: '#8ee6e0' }}>
           <Left>
             <Icon
               size={40}
               name="ios-menu"
               onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
             />
           </Left>

         </Header>

        <Text style={styles.text}>Welcome {name}</Text>

      </View>

    )
  }
}

const styles = StyleSheet.create({
 text: {
   marginTop: 200,
   textAlign: 'center',
   fontSize: 50,
   color: '#5f66b8'
 }

})
