import React from 'react';

import { StyleSheet, Text, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class HomeScreen extends React.Component {
  static navigationOptions  = () => ({
    title: 'Home',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
  			},	
  	 
      
  
  });
  render() {
    return <Text>Hello, Home!</Text>;
  }
}
