import React, { Component } from 'react';
import{  View, Text, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
const style = require("../style");

class Home extends React.Component{
    render(){
        return(
            <View>
                <Text>Hello</Text>
                {/* <TextInput style={style}/> */}
            </View>
        )
    }
}
export default Home;

