import React, { Component } from 'react';
import{  View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
const styles = require("../styles");

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentAuthor:''
        }
    }

    checkName(){
        if(this.state.currentAuthor === ''){
            this.setState({
                currentAuthor:"Anonymous"
            })
        }
    }

    render(){
        return(
            <View>
                <Text style={[styles.navbarTitle, styles.center]}>Enter your username </Text>
                <TextInput onChangeText={(text) => {
                    this.setState({currentAuthor:text})
                }} style={style.nameInput}></TextInput>
                <TouchableOpacity style={style.action}onPress={()=> {
                    this.checkName()
                    Actions.chat({
                        currentAuthor:this.state.currentAuthor
                    });
                    }}>
                    <Text style={style.actionText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Home;

