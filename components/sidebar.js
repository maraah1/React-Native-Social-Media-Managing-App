import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, AsyncStorage, Image} from 'react-native';
import { Button, Header } from 'react-native-elements';
import axios from 'axios';

export default class SideBar extends Component {

  // static navigationOptions = {
  //   headerTitle: <HeaderTitle />
  // };


render(){
 console.log("STATE.ACC:===> \n", this.props.screenProps.accounts)
  const { navigate } = this.props.navigation;

  let listOfAccounts =  this.props.screenProps.accounts.map(account =>
    <Button
     raised
     style={styles.button}
     color="#5f66b8"
     key={account.media_buttons_id}
     title={account.name}
     buttonStyle={{
       backgroundColor: '#8ee6e0'
     }}
     onPress={
       () => navigate('POSTS', {
         media_id : account.media_buttons_id,
         user_id : account.user_id,
         name: account.name,
         image: account.img_url
       })
     }
   />)

  // console.log('MAP STATE.ACC ====>', listOfAccounts)

  return (
    <View>
      <Header
        outerContainerStyles={{ backgroundColor: 'black', height : 100, marginBottom : 20 }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
       />

      {listOfAccounts}

      <Image
        style={styles.image}
        source={require('/Users/maraahlee/testing/new-plus-sign.png') }
    />

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

  button: {
    margin: 10,
  }
})
