import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, TouchableOpacity } from 'react-native';
import { Button, Icon, Header, Card} from 'react-native-elements';
import axios from 'axios';


export default class Analytics extends Component {
  render(){
    return(
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Header
        outerContainerStyles={{ backgroundColor: 'black' }}
        centerComponent={{text: 'STATISTICS', style: {color: '#8ee6e0', fontWeight: 'bold', fontSize: 20}}}
      />
 <View style={{flexDirection: 'row'}}>

   <View style={styles.textContainer}>
     <Text style={styles.text}>Sun</Text>
     <Text style={styles.text}>Mon</Text>
     <Text style={styles.text}>Tues</Text>
     <Text style={styles.text}>Wed</Text>
     <Text style={styles.text}>Thurs</Text>
     <Text style={styles.text}>Fri</Text>
     <Text style={styles.text}>Sat</Text>
   </View>


    <View style={styles.mainContainer}>
        <Image source={{uri: '/Users/maraahlee/testing/an.jpg'}} style={styles.image}/>
    </View>


 </View>

    <View style={{flexDirection: 'row', marginLeft: 75}}>
       <Text style={styles.time}>3pm</Text>
       <Text style={styles.time}>4pm</Text>
       <Text style={styles.time}>5pm</Text>
       <Text style={styles.time}>6pm</Text>
       <Text style={styles.time}>7pm</Text>
       <Text style={styles.time}>8pm</Text>
       <Text style={styles.time}>9pm</Text>
    </View>

   <Card>
         <View style={{flexDirection : 'row', marginLeft: 25}}>

           <Button buttonStyle={{backgroundColor: '#e4fff3', height: 20, width: 20}}/>
           <Button buttonStyle={{backgroundColor: '#9adaff', height: 20, width: 20}}/>
           <Button buttonStyle={{backgroundColor: '#59a6ff', height: 20, width: 20}}/>
           <Button buttonStyle={{backgroundColor: '#336f9c', height: 20, width: 20}}/>
           <Button buttonStyle={{backgroundColor: '#162f42', height: 20, width: 20,}}/>

         </View>

         <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Least Active</Text>
            <Text style={{color: 'black', marginLeft: 150}}>Most Active</Text>
         </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
           <Text>Best Times To Post:</Text>
          </View>

          <View style={{flexDirection: 'column'}}>
           <Text style={{fontWeight: 'bold'}}>Thursdays from 3-6pm</Text>
          </View>
       </View>
   </Card>
  </View>
    )
  }
}


const styles = StyleSheet.create({

mainContainer : {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  flexDirection: 'column',
  alignItems: 'flex-end',
  flex: 1

},

 image: {
   width: 300,
   height: 350,
 },

 text : {
   color: 'white',
   fontSize: 15,
   margin: 15
 },

 textContainer : {
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: 1,
  marginTop: 20
},
 time: {
   color: 'white',
   fontSize: 15,
    margin: 6
 }


});
