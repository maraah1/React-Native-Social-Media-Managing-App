import React, { Component } from 'react'
import{View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Tile, Icon } from 'react-native-elements'


export default class Tiles extends Component {

render(){
  const {navigate } = this.props.navigation

  return (

  <View style={styles.view} >

    <TouchableOpacity onPress={ () => navigate('Second', {})}>
      <Image style={{height : 500, width: 500}} source={require('/Users/maraahlee/testing/Untitled.png')} />
    </TouchableOpacity>

  </View>

  )
}


}


styles=StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor:'purple'

  }
})
