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
import ToolBar from "./components/Toolbar";
const style = require("./style");

// import * as firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBHpuAEzrFocRoLBUZedAi_CQ0nXrfBqkY",
//   authDomain: "chat-app-4b7e6.firebaseapp.com",
//   databaseURL: "https://chat-app-4b7e6.firebaseio.com",
//   projectId: "chat-app-4b7e6",
//   storageBucket: "chat-app-4b7e6.appspot.com",
//   messagingSenderId: "985990696062"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// type Props = {};
class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial />
          <Scene key="chat" component={Chat} title="Chat" intial />
        </Scene>
      </Router>
    )
  }

}

 

export default App;
