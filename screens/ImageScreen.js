import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class ImageScreen extends React.Component {
  static navigationOptions  = () => ({
    title: 'Image',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
  			},	
  	
    
  	 
      
  
  });
  render() {
    return <Text>Hello, ImageScreen!</Text>;
  }
}
