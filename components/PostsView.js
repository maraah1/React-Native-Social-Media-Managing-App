import React, { Component } from 'react';
import CardInfo from './CardInfo';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class PostsView extends Component {

  render() {

    let { deletePost, post, updateToggle } = this.props

    return (
      <View style={styles.container}>

          <View style={styles.cardContainer}>
            <CardInfo post={post}/>
          </View>

           <View style={styles.littleButtonsContainer}>

            <Button
              buttonStyle={{ backgroundColor: "#dbdbd0"}}
              color='black'
              title='Update'
              style={styles.littleButtons}
              onPress={updateToggle(post.id)}
            />

            <Button
              buttonStyle={{ backgroundColor: "#e04843"}}
              title='Delete'
              style={styles.littleButtons}
              onPress={deletePost(post.id)}
            />

          </View>

        </View>

    );
  }
}

const styles = {
  container : {
    flexDirection: 'row'
  },

  cardContainer : {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1
  },

  littleButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 1
  },

  littleButtons: {
    height: 40,
    width: 80,
    margin: 1
  }

}

export default PostsView;
