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
  TextInput,
  ScrollView,
} from "react-native";
import Home from "./components/Home";
import Chat from "./components/Chat";
import AddButton from "./components/AddButton";
const styles = require("./styles");

class App extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Welcome to Simple Chat" initial />
          <Scene key="chat" component={Chat} title="Chat"/>
        </Scene>
      </Router>
    )
  }

}
export default App;
