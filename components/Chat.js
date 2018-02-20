import React, { Component } from 'react';
import { FlatList, View, Text, TextInput, ListView } from 'react-native';
import MessageInput from './MessageInput';

class Chat extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      newT:''
    }
  }
  render() {
    return (
        <ListView />
    );
  }
}

export default Chat;
