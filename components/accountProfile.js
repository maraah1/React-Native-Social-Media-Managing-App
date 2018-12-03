import React, {Component} from 'react';
import {DrawerActions} from 'react-navigation';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  List,
  ListItem,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Left, Container, Center} from 'native-base';
import {Button, Card, Header, Icon} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import axios from 'axios';
import UpdateForm from './updateform';
import CardInfo from './CardInfo';
import PostsView from './PostsView';
import AddPostForm from './AddPostForm';

export default class AccountProfile extends Component {

  state = {
    isToggle: false,
    posts: [],
    updateform: false,
    clickedId: '',
    isVisible: false
  }

  updateToggle = (postId) => {
    this.setState({
      updateform: !this.state.updateform,
      clickedId: postId
    })
  }

  setToggle = (e) => {
    this.setState({isToggle : !this.state.isToggle});
  }

  getMediaPosts() {
    let id = this.props.navigation.state.params.media_id
    axios.get(`http://localhost:8000/getposts/${id}`).then(results => {
      this.setState({posts: results.data})
     }).catch(error => {
       console.log(error)
    })
  }

  componentDidMount() {
    this.getMediaPosts()
  }

  componentDidUpdate(prevProps) {
    if (this.props.navigation.state.params.media_id !== prevProps.navigation.state.params.media_id) {

      this.getMediaPosts()
    }
  }

  handleSubmit = (e) => {
    let newState = {
      media_buttons_id: this.props.navigation.state.params.media_id,
      image: this.state.image,
      post: this.state.post,
      day: this.state.day,
      time: this.state.time,
      fulldate: this.state.fulldate,
      status: 'pending'
    }
    axios.post(`http://localhost:8000/posts`, newState).then((results) => {
      this.setState({
        isToggle: !this.state.isToggle,
        posts: [
          ...this.state.posts,
          results.data
        ]
      })
    })

  }

  deletePost = (id, e) => {
    let mediaId = this.props.navigation.state.params.user_id
    axios.delete(`http://localhost:8000/delete/${mediaId}/${id}`).then(results => {

      this.setState({
        posts: [...results.data]
      })
    }).catch(error => {
      console.log(error)
    })
  }

  postToApp = (id, e) => {
    axios.patch(`http://localhost:8000/statuses/update/${id}`).then(postedTweet => {
    }).catch(error => {
      console.log(error)
    })
  }

  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  _handleDatePicked = (date) => {

    this.setState({time: `${date.getHours()}:${date.getMinutes()}`, day: `${date.getMonth()}/ ${date.getDate()}`, fulldate: date})

    this._hideDateTimePicker();
  };

  render() {

    let Name = this.props.navigation.state.params.name
    let posts = this.state.posts
    let button_id = this.props.navigation.state.params.media_id
    let status = this.props.navigation.state.params.status
    let image = this.props.navigation.state.params.image
    let {navigate} = this.props.navigation
    let isToggle = this.state.isToggle
    let updateForm = this.state.UpdateForm
    let clickedId = this.state.clickedId



    return (
        <View>
          <Header
          outerContainerStyles={styles.outerContainer}
          rightComponent={
              <TouchableOpacity onPress={this.setToggle}>
                <Text style={styles.text}>{Name}</Text>
              </TouchableOpacity> }
          leftComponent={
              <Icon
              name = 'home'
              color = "#8ee6e0"
              onPress = {
                () => navigate('Third', {})
              }/>}
            />
  { isToggle ?
          <AddPostForm
            handleSubmit={this.handleSubmit}
            isDateTimePickerVisible={this.isDateTimePickerVisible}
            _showDateTimePicker={this._showDateTimePicker}
            _hideDateTimePicker={this._hideDateTimePicker}
            _handleDatePicked={this._handleDatePicked}
          />
      :
          <ScrollView contentContainerStyle={{ paddingVertical: 70 }}>
              { posts.map(post => {
                  return (

                    <Card key={post.id}>
                      { updateform && clickedId == post.id ?
                        <UpdateForm post={post} updateToggle={this.updateToggle}/>
                        : <PostsView
                            post={post}
                            updateToggle={this.updateToggle}
                            deletePost={this.deletePost}
                          />
                         }
                      </Card>
                   );
                })
              }

              <Button
              title='Add Post'
              color="#5f66b8"
              style={styles.buttons} buttonStyle={{ backgroundColor: "#8ee6e0"}}
              onPress {this.setToggle}/>

          </ScrollView> }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 10 + '%',
    width: 40 + '%',
    marginLeft: 30 + '%',
    marginBottom: 50 + '%'
  },

  text: {
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

  holder: {
    height: 38,
    width: 79,
    marginRight: 16,
    backgroundColor: '#8ee6e0'
  },

  outerContainer: {
    backgroundColor: 'black',
    height: 150,
  }

})
