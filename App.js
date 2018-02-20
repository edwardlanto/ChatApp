import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Modal,
  Button,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Input from "./components/Input";
import ToolBar from "./components/Input";
const style = require("./style");

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHpuAEzrFocRoLBUZedAi_CQ0nXrfBqkY",
  authDomain: "chat-app-4b7e6.firebaseapp.com",
  databaseURL: "https://chat-app-4b7e6.firebaseio.com",
  projectId: "chat-app-4b7e6",
  storageBucket: "chat-app-4b7e6.appspot.com",
  messagingSenderId: "985990696062"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// type Props = {};
class App extends React.Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      itemDataSource: ds,
      modalVisible:false,
      author: '',
      message: '',
      date: ''
    };
    this.itemsRef = this.getRef().child('items')
    this.renderRow = this.renderRow.bind(this);
  }

  setModalVisible(visible){
    this.setState({
      modalVisible:visible
    })
  }

  getRef(){
    return firebaseApp.database().ref();
  }
  componentWillMount() {
    this.getList(this.itemsRef);
  }
  componentDidMount() {
    this.getList(this.itemsRef);
    this.setState({
      date: JSON.stringify(new Date().toLocaleString()).replace(/['"]+/g, '')
    })
  }


  getList(itemsRef) {
    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          author:child.val().author,
          message:child.val().message,
          date:child.val().date,
          _key:child.key
        })
      })
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      })
    });


  }

  renderRow(item) {
    return (
      <TouchableHighlight
        onPress={item => {
          this.pressRow(item);
        }}
      >
        <View style={style.li}>
          <Text>Author:{item.author}</Text>
          <Text>Message:{item.message}</Text>
          <Text>Date:{item.date}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  addItem(){
    this.setModalVisible(true)
  }

  validate(message){
    console.log(message.length)
    if(message.length < 30){
      Alert.alert(
        'Error',
        'Message must be longer than 30'
      )
    }else{
      console.log('returned true')
      return true;
    }
  }
  render() {
    return (
      <ScrollView>
        <Home />
        <Modal
          visible={this.state.modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()}
          >
          <ToolBar style={style.center}title="Message Page" />
          <TextInput
            style={style.nameInput}
            value={this.state.author}
            placeholder="Enter Name Here"
            onChangeText={(value) => this.setState({
              author:value
            })
            
            }
          />
          <TextInput
            style={style.nameInput}
            value={this.state.message}
            placeholder="Enter Message Here"
            onChangeText={(value) => this.setState({
              message:value
            })}
          />
          <TouchableHighlight onPress={() => {
            this.validate(this.state.message)
            this.itemsRef.push({
              author:this.state.author,
              message:this.state.message,
              date:this.state.date
            })
            this.setModalVisible(!this.setModalVisible)}}> 
            <Text>Save Item</Text>
            </TouchableHighlight>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.setModalVisible)}}> 
            <Text>Cancel Item</Text>
            </TouchableHighlight>
          </Modal>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
          initial={true}
        />
        <Input onPress={this.addItem.bind(this)} title="Add Item" style={style.saveButton} />
      </ScrollView>
    );
  }
}

export default App;
