import React, { Component } from 'react';
import{  View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
const style = require('../style');
const consts = style.constants;

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }
    render(){
        return(
            <View style={style.saveButton}>
                <TouchableHighlight onPress={this.props.onPress}>
                    <Text>{this.props.title}</Text>
                </TouchableHighlight>
            </View>

            )
        }
}

export default Input;