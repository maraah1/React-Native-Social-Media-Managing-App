import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, TouchableOpacity } from 'react-native';
import { Button, Icon, Header} from 'react-native-elements';
import axios from 'axios';


export default class Analytics extends Component {
  render(){
    return(

        <Image source={{uri: '/Users/maraahlee/testing/stats.jpg'}} style={styles.MainContainer}/>

    )
  }
}


const styles = StyleSheet.create({

 MainContainer: {
   flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
   width: 500,
   height: 500,
 }

});
