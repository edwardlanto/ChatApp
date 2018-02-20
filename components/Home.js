import React, { Component } from 'react';
import{  View, Text, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
const style = require("../style");

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            name: ''
        }
    }
    render(){
        return(
            <View>
                <Text style={style.center}>Enter your username </Text>
                <TextInput style={style.nameInput}
                    onChangeText={(text) =>{
                        this.setState({
                            name:text
                        })
                    }}
                />
                <Button title="Enter Chat"
                    onPress={() => {
                        Actions.chat({
                            username:this.state.name
                        })
                    }}
                ></Button>
            </View>
        )
    }
}
export default Home;

