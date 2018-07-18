import React, { Component} from 'react';
import { DrawerActions } from 'react-navigation';
import { StyleSheet, Text, TextInput, View, List, ListItem, Image, ScrollView } from 'react-native';
import { Icon,  Left, Container } from 'native-base';
import { Button, Card, Header} from 'react-native-elements';
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
// componentWillReceiveProps(){
//   this.getMediaPosts()
// }

handleSubmit = (e) => {
let newState = {
   media_buttons_id :this.props.navigation.state.params.media_id,
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

postToApp = (id, e) => {
  axios(`http://localhost:8000/statuses/update/${id}`, id)
  .then(postedTweet => {
    console.log("POSTED TWEET:", postedTweet)
  }).catch(error => {
    console.log(error)
  })
}




 render(){
   // console.log("GET POSTS:", this.state.posts)
   // console.log("ACCOUNT PROFILE PROPS:", this.props.props.navigation.state.params.id )
   // console.log("THIS.STATE:", this.state.isToggle)
  let Name = this.props.navigation.state.params.name
  let posts = this.state.posts
  let button_id = this.props.navigation.state.params.id



 // console.log("LIST OF POSTS:", listOfPosts)

   return(
  <View>

    <Header outerContainerStyles={{ backgroundColor: '#8ee6e0' }} style={{height: 100}}>
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

   {
     posts.map(post => {
       return (
         <Card key={post.id} >
           {this.state.updateform && this.state.clickedId == post.id ? <UpdateForm post={post} /> :
       <View>

        <CardInfo post={post}/>

         <Button

             title='P'
             style={{height: 40, width: 40,  flexDirection: 'row'}}
             onPress={
               (e) => {this.postToApp(post.id, e)}
             }
           />

         <Button

             title='U'
             style={{height: 40, width: 40,  flexDirection: 'row'}}
             onPress={
               (e) => {
                 this.setState({updateform: !this.state.updateform, clickedId : post.id})
               }
             }/>
        <Button
             title='D'
             style={{height: 40, width: 40,  flexDirection: 'row'}}
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
    marginBottom : 50 + '%'

  }
})
