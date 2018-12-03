import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage, Image, TouchableOpacity} from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import axios from 'axios';

export default class SideBar extends Component {


render(){

  const { navigate } = this.props.navigation;
  let name = this.props.navigation.state.params.user.name

  let listOfAccounts =  this.props.screenProps.accounts.map(account =>
       <TouchableOpacity
          key={account.media_buttons_id}
          onPress={
           () => navigate('POSTS', {
             media_id : account.media_buttons_id,
             user_id : account.user_id,
             name: account.name,
             image: account.img_url,
             status: account.status
           })
         }>
          <Image  style={styles.buttons} source={{uri : account.img_url}} />
      </TouchableOpacity>
   )


  return (
        <View>
            <View style={styles.view}>
               <Header
                 style={{height : 100}}
                 outerContainerStyles={{ backgroundColor: 'black', height: 100 }}
                 centerComponent={
                   <Image
                  style={{height: 100, width: 100, flex:1}}
                  source={require('/Users/maraahlee/testing/newAppIcon.png')}
                  />
                 }
                 rightComponent={
                   <Icon
                   name="settings"
                   color='#8ee6e0'
                   size={20}
                   onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                   />
                 }
                 leftComponent={
                   <Icon
                   name="menu"
                   color='#8ee6e0'
                   size={30}
                   />
                 }
               />
             <Text style={styles.text}>Welcome {name}!</Text>

                {listOfAccounts}

                <Image
                  style={styles.image}
                  source={require('/Users/maraahlee/testing/new-plus-sign.png') }
                />
          </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  image : {
    height : 10 + '%',
    width : 10 + '%',
    position: 'absolute',
    bottom: -250,
    left: 90
  },

  buttons : {
    height: 80,
    width: 80,
    margin: 5,
    marginLeft: 150,
    marginTop: 40


  },
  text: {
    borderBottomWidth : 2,
    borderColor: '#8ee6e0',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3

  }
})
