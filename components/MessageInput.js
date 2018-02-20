import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
// import { FormLabel, FormInput } from 'react-native-elements'
const style = require('../style');


class MessageInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          message:''
        }
      }
    render(){
        return(
            <View>
               <TextInput style={style.nameInput} onChangeText={(message) => {
                    this.setState({
                        message:message
                    })
                }}/>
               {/* <Text>adfgdfg</Text> */}
            </View>
        )
    }
}

export default MessageInput;