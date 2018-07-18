import React, { Component } from 'react';
import {Text, TextInput, View, Image, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios'


export default class UpdateForm extends Component {

state={
  isVisible: true
}

handleSubmit = (id, e) => {
  newState = {
    media_buttons_id : this.props.post.media_buttons_id,
    image : this.state.image,
    post: this.state.post,
    day: this.state.day,
    time: this.state.time

  }
  axios.put(`http://localhost:8000/update/${id}`, newState)
  .then(results => {
    console.log(results)
  }).catch(error => {
    console.log(error)
  })
}


  render(){
    console.log("UPDATE FORM PROPS:", this.props)
    return(
      <View>
        <Modal animationType="slide"
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

        <TextInput
          style={{height : 100, width: 100}}
          image={<Image
              style={{height: 100, width: 100}}
              source={{uri : this.props.post.image}}
            />}
          onChangeText={(image) => this.setState({image})}
        />
        <TextInput
          style={{height : 100, width: 100}}
          placeholder={this.props.post.post}
          onChangeText={(post) => this.setState({post})}
        />
        <TextInput
          style={{height : 100, width: 100}}
          placeholder={this.props.post.day}
          onChangeText={(day) => this.setState({day})}
        />
        <TextInput
          style={{height : 100, width: 100}}
          placeholder={this.props.post.time}
          onChangeText={(time) => this.setState({time})}
        />

        <Button
          style={{height: 100, width: 100}}
          title='Update'
          onPress={
            (e) => {this.handleSubmit(this.props.post.id, e), this.setState({isVisible: false})}
          }

        />

      </Modal>
      </View>
    )
  }
}
