import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import AccountProfile from './accountProfile';
import Login from './login'
import Analytics from './analytics'

const Tabs = createBottomTabNavigator ({
    POSTS : AccountProfile,
    ANALYTICS: Analytics
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'POSTS') {
          iconName = 'people'
        } else if (routeName === 'ANALYTICS') {
          iconName ='timeline';
        }
        return <Icon name={iconName} style={{height: 30, width: 30}} />
       },
    }),

      tabBarOptions: {
        activeTintColor: '#8ee6e0',
        inactiveTintColor: '#5f66b8',
      },
      animationEnabled: false,
      swipeEnabled: false,
    }
)

export default Tabs
