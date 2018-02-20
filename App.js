import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from "react-native";
import Home from "./components/Home";
import Chat from "./components/Chat";
import MessageInput from "./components/MessageInput";
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
      itemDataSource: ds
    };
    this.itemsRef = this.getRef().child('itemd')
    this.pressRow = this.pressRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  getRef(){
    return firebaseApp.database().ref();
  }
  componentWillMount() {
    this.getList(this.itemsRef);
  }
  componentDidMount() {
    this.getList(this.ItemsRef);
  }
  getList(itemsRef) {
    // let items = [
    //   { title: "Edward", sTitle: "lanto" },
    //   { title: "Edward2", sTitle: "lanto2" }
    // ];

    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title:child.val().title,
          _key:child.key
        })
      })
    })

    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    });
  }

  pressRow(item) {
    console.log(item);
  }

  renderRow(item) {
    return (
      <TouchableHighlight
        onPress={item => {
          this.pressRow(item);
        }}
      >
        <View style={style.li}>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View>
        {/* <Scene key="root"> */}
        {/* <Scene key="home" component={Home} title="Home"/> */}
        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
          initial={true}
        />
        {/* <Scene key="messageinput" component={MessageInput} title="Message Input" />
        </Scene> */}
      </View>
    );
  }
}

export default App;
