import React, { Component } from 'react'
import { Tile, Icon } from 'react-native-elements'


export default class Tile extends Component {

render(){
  return (
    <Tile
      imageSrc={{ require: './img/path' }}
      title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
      featured
      caption="Some Caption Text"
/>
 
  )
}


}
