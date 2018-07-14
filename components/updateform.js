import React, { Component } from 'react';
import {Text, TextInput, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios'


export default class UpdateForm extends Component {

state = {
  media_buttons_id : this.props.post.media_buttons_id,
  image : this.props.post.image,
  post: this.props.post.post,
  day: this.props.post.day,
  time: this.props.post.time

}

handleSubmit = (id, e) => {

  axios.put(`http://localhost:8000/update/${id}`, this.state)
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
            (e) => {this.handleSubmit(this.props.post.id, e)}
          }

        />
      </View>
    )
  }
}
