import React, { Component } from 'react'
import{View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Tile, Icon } from 'react-native-elements'


export default class Tiles extends Component {

render(){
  const {navigate } = this.props.navigation

  return (

  <View style={styles.view} >

    <TouchableOpacity onPress={ () => navigate('Second', {})} style={{alignItems: 'center'}}>
      <Image style={{height : 500, width: 500, margin: 100, }} source={require('/Users/maraahlee/testing/newAppIcon.png')} />
    </TouchableOpacity>

  </View>

  )
}


}


styles=StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor:'black'

  }
})
