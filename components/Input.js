import React, { Component } from 'react';
import{  View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
const style = require('../style');

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }

    onPress(item){
        console.log(this.state.name)
    }

    render(){
        return(
            <View>
            <TextInput style={style.nameInput}
                onChangeText={(text) =>{
                    this.setState({name:text})
                }}
            />
            <Button title="Enter Chat"
                    onPress={() => {
                        console.log(this.state)
                        Actions.chat({
                            username:this.state.name
                        })
                    }}
                ></Button>
            
            </View>

            )
        }
}

export default Input;