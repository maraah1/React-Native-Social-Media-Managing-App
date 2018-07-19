import React, { Component } from 'react'
import{View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import { Tile, Icon } from 'react-native-elements'


export default class Tiles extends Component {

render(){
  const {navigate } = this.props.navigation

  return (

  <View style={styles.view} >

    <TouchableOpacity onPress={ () => navigate('Second', {})} style={{alignItems: 'center'}}>
      {/* <Text style={styles.text}>SoMa</Text> */}
      <Image style={{height : 500, width: 500, marginTop: 80 }} source={require('/Users/maraahlee/testing/newAppIcon.png')} />
    </TouchableOpacity>

  </View>

  )
}


}


styles=StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor:'black',
    // alignItems: 'center',
    // justifyContent: 'center'

  },

  text: {
    position: 'absolute',
    color: '#8ee6e0',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 470,

  }
})
