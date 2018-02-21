import React, { Component } from 'react';
import{  View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
const styles = require("../styles");

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentAuthor:''
        }
    }

    checkName(user){
        if(user.length < 3){
            Alert.alert('Username must be longer than 3 characters')
        }else{
            Actions.chat({
                currentAuthor:this.state.currentAuthor,
                icon:this.state.icon
            })
        }
    }

    render(){
        return(
            <View>
                <Text style={[styles.navbarTitle, styles.center]}>Enter your username </Text>
                <TextInput onChangeText={(text) => {
                    this.setState({currentAuthor:text})
                }} style={styles.nameInput}></TextInput>
                <TouchableOpacity style={[styles.action, styles.top ]}onPress={()=> {
                    this.checkName(this.state.currentAuthor)
                    }}
                    
                >
                    <Text style={styles.actionText}>Next</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
export default Home;

