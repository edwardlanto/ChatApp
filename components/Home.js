import React, { Component } from 'react';
import{  View, Text, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Input from './Input';
const style = require("../style");

class Home extends React.Component{
    render(){
        return(
            <View>
                <Text style={style.center}>Enter your username </Text>
                <Input />
       
            </View>
        )
    }
}
export default Home;

