import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, View, List, ListItem } from 'react-native';
import { Button, Icon} from 'react-native-elements';
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
      <Button key={button.id} icon={
        <Icon
          name='arrow-right'
          size={15}
          color='white'
        />
      }
      onPress={
        () =>  navigate('Fifth', {
                user_id : this.props.navigation.state.params.user.id,
                media_buttons_id : button.id,
                media_name: button.name,
                media_pic: button.img_url
            })
      }
      title={button.name} />
    ) : null

    console.log("buttonsList props:", this.props.navigation.state.params.user)
    console.log('STATE =====>\n', this.state.buttons)
    console.log("list of buttons:", listOfButtons)

    return(
     <View>
        {listOfButtons}
     </View>

    )
  }

}
