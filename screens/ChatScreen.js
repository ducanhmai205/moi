import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat  ',
    headerTitleStyle: { color: '#ecf0f1' },
    headerStyle: {
      backgroundColor: '#f39c12'
        },  
     
  };

  render() {
     return <SearchBar  />;
  }
}
