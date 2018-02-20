import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
// import { Platform, StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Chat from "./components/Chat";
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
  render() {
    return (
      <Router style={style.container}>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="chat" component={Chat} title="Come" />
        </Scene>
      </Router>
    );
  }
}

export default App;
