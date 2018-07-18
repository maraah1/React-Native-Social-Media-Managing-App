import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

export default class CardInfo extends Component {

render(){

  return(
  <View key={this.props.post.id} >

    {this.props.post.image ?

    <Image
      style={{height: 40, width: 40}}
      resizeMode="cover"
      source={{ uri: this.props.post.image}}
    />
    : null
  }

   <View style={styles.sections} size={30}>
   <Icon name='textsms' /> <Text style={styles.text} >{this.props.post.post}</Text>
  </View>

   <View style={styles.sections}>
   <Icon name='today' size={30} /> <Text style={styles.text}>{this.props.post.day}</Text>
   </View>

   <View style={styles.sections}>
   <Icon name='alarm' size={30}/> <Text style={styles.text} >{this.props.post.time}</Text>
   </View>

   <View style={styles.sections}>
   <Icon name='notifications' size={30} /> <Text  style={styles.text} >{this.props.post.day}</Text>
   </View>

  </View>
  )
}

}



const styles=StyleSheet.create({
  sections: {
    flexDirection: 'row',
    margin: 2
  },
  text:{
    paddingLeft: 10 + '%',
    fontSize: 20 
  }
})
