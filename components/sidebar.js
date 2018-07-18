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
     key={account.media_buttons_id}
     title={account.name}
     onPress={
       () => navigate('POSTS', {
         media_id : account.media_buttons_id,
         user_id : account.user_id,
         name: account.name
       })
     }
   />)

  // console.log('MAP STATE.ACC ====>', listOfAccounts)

  return (
    <View >
      <Header
        outerContainerStyles={{ backgroundColor: 'black', height : 100, marginBottom : 20 }}
       />

      {listOfAccounts}

      <Image
        style={styles.image}
        source={require('/Users/maraahlee/testing/new-plus-sign.png') }
        // onPress={
        //   () =>
        // }
    />

    </View>
  )
}

}




const styles = StyleSheet.create({
  image : {
    height : 50 + '%',
    width : 50 + '%',
    position: 'absolute',
    bottom: -500,
    left: 50
  }
})
