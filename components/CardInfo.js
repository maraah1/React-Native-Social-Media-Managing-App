import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

export default class CardInfo extends Component {

render() {

  let { id, image, post, day, time, status } = this.props.post

  return (
      <View key={id} >

        {image &&

              <Image
                style={{height: 40, width: 40}}
                resizeMode="cover"
                source={{ uri: this.props.post.image}}
              />
          }

         <View style={styles.sections} size={30}>
             <Icon name='textsms' />
             <Text style={styles.text} >{post}</Text>
         </View>

         <View style={styles.sections}>
             <Icon name='today' size={30} />
             <Text style={styles.text}>{day}</Text>
         </View>

         <View style={styles.sections}>
             <Icon name='alarm' size={30}/>
             <Text style={styles.text} >{time}</Text>
         </View>

         <View style={styles.sections}>
             <Icon name='notifications' size={30} />
             <Text  style={styles.sectionss} >{status}</Text>
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
  sectionss: {
    paddingLeft: 10 + '%',
    fontSize: 20,
    color: '#8ee6e0'
  },
  text:{
    paddingLeft: 10 + '%',
    fontSize: 20
  }
})
