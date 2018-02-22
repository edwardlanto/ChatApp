import React, { Component } from 'react';
import {
  Platform,
  stylesSheet,
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
import AddButton from "./AddButton";
const styles = require("../styles");

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

class Chat extends React.Component {
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
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.name}>{item.author}</Text>
          <Text>Message:{item.message}</Text>
          <Text>Date Posted:{item.date}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  addItem(){
    this.setModalVisible(true);
  }

  render() {
    return (
      <ScrollView>
        <Modal
          visible={this.state.modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()}
          >
          <TextInput
            style={[styles.nameInput, styles.marginTop]}
            value={this.state.message}
            placeholder="Enter Message Here"
            onChangeText={(value) => this.setState({
              message:value
            })}
          />
          <TouchableHighlight onPress={() => {
            let desired = this.state.message.replace(/[^\w\s]/gi, '');
            this.itemsRef.push({
              author:this.props.currentAuthor,
              message:desired,
              date:this.state.date
            })
            this.setModalVisible(!this.setModalVisible)}}
            style={styles.action}
            > 
            <Text style={styles.actionText}>Save Item</Text>
            </TouchableHighlight>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.setModalVisible)}}
            style={styles.actionCancel}
            > 
            <Text style={styles.actionText}>Cancel Item</Text>
            </TouchableHighlight>
          </Modal>
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
          initial={true}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item" style={styles.saveButton} />
      </ScrollView>
    );
  }
}

export default Chat;
