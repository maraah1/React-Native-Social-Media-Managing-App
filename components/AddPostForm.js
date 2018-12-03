import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';


class AddPostForm extends Component {

  render() {

    let { handleSubmit } = this.props

    return (

          <View>
            <View style={styles.inputs}>
              <TextInput
                style={styles.textBox}
                autoCapitalize='none'
                placeholder='Image'
                onChangeText {(image) => this.setState({image})} value={this.state.image}
              />

              <TextInput
                style={styles.textBox}
                autoCapitalize='none'
                placeholder='Post'
                onChangeText {(post) => this.setState({post})} value={this.state.post}
              />

              <TouchableOpacity onPress={this.props._showDateTimePicker}>
                  <Text style={styles.time}>Select Day and Time</Text>
                    {
                     this.state.day && this.state.time &&
                     <Text>{this.state.day + ' - ' + this.state.time}</Text>
                    }
              </TouchableOpacity>

              <DateTimePicker
                isVisible={this.props.isDateTimePickerVisible} onConfirm={this.props._handleDatePicked}
                onCancel={this.props._hideDateTimePicker}
                mode='datetime'
               />

            </View>

            <Button
                style={styles.postButtons}
                color='#5f66b8'
                title='Post'
                buttonStyle={{ backgroundColor: "#8ee6e0" }}
                onPress { this.props.handleSubmit }
            />
       </View>
     );
  }
}

const styles = {
  inputs : {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textBox: {
    height: 50,
    width: 300,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowColor: 'grey',
    shadowOpacity: 0.3

  },

  time: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  postButtons: {
    width: 40 + '%',
    marginLeft: 30 + '%',
    marginBottom: 50 + '%',
    marginTop: 15 + '%'

  },
}

export default AddPostForm;
