import React, { Component } from 'react';
import{  View, Text, TouchableOpacity } from 'react-native';
const styles = require("../styles");

class AddButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.action}>
                <TouchableOpacity
                onPress={this.props.onPress}
                >
                    <Text style={styles.actionText}>Add Message</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddButton

