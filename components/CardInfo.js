import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';


export default class CardInfo extends Component {

render(){

  return(
  <View key={this.props.post.id}>
    {this.props.post.image ?
    <Image
      style={{height: 40, width: 40}}
      resizeMode="cover"
      source={{ uri: this.props.post.image}}
    />
    : null
  }
    <Text >Post: {this.props.post.post}</Text>
    <Text >Day: {this.props.post.day}</Text>
    <Text >Time: {this.props.post.time}</Text>
    <Text >Status: {this.props.post.status}</Text>
  </View>
  )
}

}
