import React, { Component} from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, ScrollView } from 'react-native';
import { Icon, Header, Left, Container } from 'native-base';
import { Button, Card } from 'react-native-elements';
import axios from 'axios';
import UpdateForm from './updateform'
import CardInfo from './CardInfo'


export default class AccountProfile extends Component {

state = {
  isToggle : false,
  posts : [],
  updateform: false,
  clickedId: '',
}

handleSubmit = (e) => {
let newState = {
   media_buttons_id : button_id,
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
  let posts = this.state.posts
  let button_id = this.props.navigation.state.params.id



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
           {this.state.updateform && this.state.clickedId == post.id ? <UpdateForm post={post} /> :
       <View>

        <CardInfo post={post}/>

         <Button
             title='P'
             style={{height: 40, width: 40}}/>
         <Button
             title='U'
             style={{height: 40, width: 40}}
             onPress={
               (e) => {
                 this.setState({updateform: !this.state.updateform, clickedId : post.id})
               }
             }/>
        <Button
             title='D'
             style={{height: 40, width: 40}}
             onPress={
               (e) => {this.deletePost(post.id, e)}
             } />
        </View>
        }
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
