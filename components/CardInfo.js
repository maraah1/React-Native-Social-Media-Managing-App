import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';


export default class CardInfo extends Component {

render(){
  return(
  <View>
    <Image
      style={{height: 40, width: 40}}
      resizeMode="cover"
      source={{ uri: this.props.post.image}}
    />
    <Text >Post: {this.props.post.post}</Text>
    <Text >Day: {this.props.post.day}</Text>
    <Text >Time: {this.props.post.time}</Text>
    <Text >Status: {this.props.post.status}</Text>
  </View>
  )
}

}
