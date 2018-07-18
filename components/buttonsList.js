import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, TouchableOpacity } from 'react-native';
import { Button, Icon, Header} from 'react-native-elements';
import axios from 'axios';

export default class ButtonsList extends Component {

 state = {
   buttons : []
 }


  componentWillMount(){
      axios.get("http://localhost:8000/buttons")
      .then((result)=>{
        this.setState({
          buttons: result.data
        })
     })
  }


render(){
  const {navigate} = this.props.navigation

    let listOfButtons = this.state.buttons ? this.state.buttons.map( button =>

    <TouchableOpacity
      onPress={
      () =>  navigate('Fifth', {
              user_id : this.props.navigation.state.params.user.id,
              media_buttons_id : button.id,
              media_name: button.name,
              media_pic: button.img_url
          })
    }>

    <Image style={{height : 50, width: 50}} source={{uri : button.img_url}} />


    </TouchableOpacity>
  ) : null


    // console.log("buttonsList props:", this.props.navigation.state.params.user)
    // console.log('STATE =====>\n', this.state.buttons)
    // console.log("list of buttons:", listOfButtons)

    return(
     <View>

       <Header
         outerContainerStyles={{ backgroundColor: '#8ee6e0' }}
         centerComponent={{ text: 'SoMa', style: { color: '#fff' } }}
         leftComponent={
           <Icon
           name='keyboard-arrow-left'
           onPress = {
             () => navigate('Third', {})
           }
         />
       }
     />

   <View style={styles.buttonsList}>
    {listOfButtons}
   </View>

     </View>

    )
  }

}


const styles= StyleSheet.create({
  buttonsList : {
    marginTop: 50 + '%',
    padding: 0.2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons : {
    padding: 3,
    width: 200
  },
   text: {
     fontSize: 30,
     fontWeight: 'bold'
   }


})
