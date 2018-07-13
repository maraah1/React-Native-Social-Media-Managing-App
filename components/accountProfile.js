import React, { Component} from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, ScrollView } from 'react-native';
import { Icon, Header, Left, Container } from 'native-base';
import { Button, Card } from 'react-native-elements';
import axios from 'axios';


export default class AccountProfile extends Component {

state = {
  isToggle : false,
  posts : [],
  updateform: false
}

handleSubmit = (e) => {
let newState = {
   media_buttons_id : 1,
   image : this.state.image,
   post : this.state.post,
   day: this.state.day,
   time: this.state.time,
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

componentWillMount(){
  let id = this.props.navigation.state.params.user_id
  axios.get(`http://localhost:8000/getposts/${id}`)
  .then(results => {
    this.setState({posts : results.data})
  }).catch(error => {
    console.log(error)
  })
}




 render(){
   // console.log("GET POSTS:", this.state.posts)
   //console.log("ACCOUNT PROFILE PROPS:", this.props )
   // console.log("THIS.STATE:", this.state.isToggle)
  let Name = this.props.navigation.state.params.name
  let posts = this.state.posts;



 // console.log("LIST OF POSTS:", listOfPosts)

   return(
  <View>
    <Header>
      <Left>
        <Icon
          name="ios-menu"
          onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </Left>
      <Text>{Name}</Text>

    </Header>


    {this.state.isToggle ?
      <View>
     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       autoCapitalize= 'none'
       placeholder='Image'
       onChangeText= {(image) => this.setState({image})}
       value={this.state.image}

     />

     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       autoCapitalize= 'none'
       placeholder='Post'
       onChangeText= {(post) => this.setState({post})}
       value={this.state.post}

     />

     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       autoCapitalize= 'none'
       placeholder='Day'
       onChangeText= {(day) => this.setState({day})}
       value={this.state.day}

     />


     <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       autoCapitalize= 'none'
       placeholder='Time'
       onChangeText= {(time) => this.setState({time})}
       value={this.state.time}

     />

     <Button
       title='Post'
       onPress= {
         (e) => {this.handleSubmit()}
       }
     />
   </View>
:
<ScrollView contentContainerStyle={{paddingVertical: 70}}>
 <View>
   {
     posts.map(post => {
       return (
         <Card key={post.id} >
           <View >
           <Image
             style={{height: 40, width: 40}}
             resizeMode="cover"
             source={{ uri: post.image}}
           />
           <Text >Post: {post.post}</Text>
           <Text >Day: {post.day}</Text>
           <Text >Time: {post.time}</Text>
           <Text >Status: {post.status}</Text>
         </View>
         <Button
             title='P'
             style={{height: 40, width: 40}}/>
         <Button
             title='U'
             style={{height: 40, width: 40}} />
        <Button
             title='D'
             style={{height: 40, width: 40}} />
       </Card>
       );
     })
   }

     <Button
       title='Add Post'
       onPress= {
         () => this.setState({isToggle : !this.state.isToggle})
       }
     />
    </View>
  </ScrollView>
  }
</View>
   )
 }


}
