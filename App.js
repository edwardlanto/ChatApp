import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
const Home = require('./components/Home');
const styles = require('./styles');


// let instance = null;

// class FirebaseService {
//   constructor() {
//     if (!instance) {
//       this.app = firebase.initializeApp(firebaseConfig);
//       instance = this;
//     }
//     return instance;
//   }
// }

// type Props = {};
class ChatApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im a container</Text>
        <Home />
      </View>
    );
  }
}

export default ChatApp;
