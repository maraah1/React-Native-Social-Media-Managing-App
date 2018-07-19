import React, { Component} from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Left, Container, Center } from 'native-base';
import { Button, Card, Header, Icon} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import axios from 'axios';
import UpdateForm from './updateform'
import CardInfo from './CardInfo'



export default class AccountProfile extends Component {


state = {
  isToggle : false,
  posts : [],
  updateform: false,
  clickedId: '',
  isVisible: false
}

getMediaPosts(){
  console.log('PROPS IN ACCT', this.props)
  let id = this.props.navigation.state.params.media_id
  axios.get(`http://localhost:8000/getposts/${id}`)
  .then(results => {
    console.log('FETCHED POSTS IN ACCOUNT PROFILE',results)
    this.setState({posts : results.data})
  }).catch(error => {
    console.log(error)
  })
}

componentDidMount(){
  this.getMediaPosts()
}

componentDidUpdate(prevProps){
  if(this.props.navigation.state.params.media_id !== prevProps.navigation.state.params.media_id){
    console.log('I UPDATED!~~~~~~~~~~~~~')
    this.getMediaPosts()
  }
}


handleSubmit = (e) => {
let newState = {
   media_buttons_id :this.props.navigation.state.params.media_id,
   image : this.state.image,
   post : this.state.post,
   day: this.state.day,
   time: this.state.time,
   fulldate: this.state.fulldate,
   status: 'pending'
 }
 axios.post(`http://localhost:8000/posts`, newState).then((results) => {
   console.log('POSTED POST:', results.data)
   this.setState({
     isToggle : !this.state.isToggle,
     posts : [...this.state.posts, results.data]
   })
 })

}


deletePost = (id, e) => {
  axios.delete(`http://localhost:8000/delete/${id}`)
  .then(results => {
    console.log(results)
    this.setState({
      posts: [...results.data]
    })
  }).catch(error => {
    console.log(error)
  })
}

postToApp = (id, e) => {
console.log("POST HIT", id)
  axios.patch(`http://localhost:8000/statuses/update/${id}`)
  .then(postedTweet => {
    console.log("POSTED TWEET:", postedTweet)
  }).catch(error => {
    console.log("HIT AGAIN")
    console.log(error)
  })
}


_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

 _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

 _handleDatePicked = (date) => {
   console.log('A date has been picked: ', date.getTime());
   this.setState({time: `${date.getHours()}:${date.getMinutes()}`, day: `${date.getMonth()}/ ${date.getDate()}`, fulldate: date})

   this._hideDateTimePicker();
 };


 render(){
   // console.log("GET POSTS:", this.state.posts)
   console.log("ACCOUNT PROFILE PROPS:", this.props.navigation.state.params.id)
   // console.log("THIS.STATE:", this.state.isToggle)
  let Name = this.props.navigation.state.params.name
  let posts = this.state.posts
  let button_id = this.props.navigation.state.params.id
  let status = this.props.navigation.state.params.status
  let image = this.props.navigation.state.params.image
  let {navigate} = this.props.navigation

 // console.log("LIST OF POSTS:", listOfPosts)

   return(
  <View>

    <Header
      outerContainerStyles={{ backgroundColor: 'black' }} style={{height: 150}}
      rightComponent={
        <TouchableOpacity onPress={() => this.setState({isToggle : !this.state.isToggle}) }>
        <Text style={styles.text}>{Name}</Text>
        </TouchableOpacity>
      }

      leftComponent={
        <Icon
        name="menu"
        color='#8ee6e0'
        onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    }
    />



    {this.state.isToggle ?
  <View>
    <View style={styles.inputs}>
     <TextInput
       style={styles.textBox}
       autoCapitalize= 'none'
       placeholder='Image'
       onChangeText= {(image) => this.setState({image})}
       value={this.state.image}

     />

     <TextInput
       style={styles.textBox}
       autoCapitalize= 'none'
       placeholder='Post'
       onChangeText= {(post) => this.setState({post})}
       value={this.state.post}

     />

     <TouchableOpacity onPress={this._showDateTimePicker} >
        <Text style={styles.time}>Select Day and Time</Text>
        {this.state.day && this.state.time ?
          <Text>{this.state.day + ' - ' + this.state.time}</Text>
        : null}
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode='datetime'
        />

 </View>

     <Button
       style={styles.postButtons}
       color='#5f66b8'
       title='Post'
       buttonStyle={{
          backgroundColor: "#8ee6e0",
       }}
       onPress= {
         (e) => {this.handleSubmit()}
       }
     />
   </View>
:
<ScrollView contentContainerStyle={{paddingVertical: 70}}>

   {
     posts.map(post => {
       return (
         <Card key={post.id} >
           {this.state.updateform && this.state.clickedId == post.id ? <UpdateForm post={post} /> :
<View style={{flexDirection: 'row'}}>
     <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 1}}>
        <CardInfo post={post} />
     </View>

  <View style={styles.littleButtonsContainer}>



         <Button
             buttonStyle={{ backgroundColor: "#dbdbd0",}}
             color='black'
             title='Update'
             style={styles.littleButtons}
             onPress={
               (e) => {
                 this.setState({updateform: !this.state.updateform, clickedId : post.id})
               }
             }/>
        <Button
             buttonStyle={{ backgroundColor: "#e04843",}}
             title='Delete'
             style={styles.littleButtons}
             onPress={
               (e) => {this.deletePost(post.id, e)}
             } />

     </View>

  </View>



   }
       </Card>



       );
     })
   }

     <Button
       title='Add Post'
       color="#5f66b8"
       style={styles.buttons}
       buttonStyle={{
          backgroundColor: "#8ee6e0",
       }}
       onPress= {
         () => this.setState({isToggle : !this.state.isToggle})
       }
     />

  </ScrollView>
  }
</View>
   )
 }


}


const styles=StyleSheet.create({
  buttons: {
    marginTop: 10 + '%',
    width: 40 + '%',
    marginLeft: 30 + '%',
    marginBottom : 50 + '%',

  },
  littleButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1
  },

  littleButtons : {
    height: 40 ,
    width: 80 ,
    margin: 1
  },
  text : {
    textAlign: 'center',
    margin: 0,
    padding: 0,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8ee6e0'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  textBox: {
    height: 50 ,
    width: 300 ,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowOffset:{  width: 3,  height: 3,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3

  },

  inputs: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  postButtons: {
    width: 40 + '%',
    marginLeft: 30 + '%',
    marginBottom : 50 + '%',
    marginTop: 15 + '%'

  },

  holder : {
    height: 38,
    width: 79,
    marginRight: 16,
    backgroundColor: '#8ee6e0'
  },

  time: {
    fontSize: 20,
    fontWeight: 'bold'
  }


})
