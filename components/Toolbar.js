import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

export default class Toolbar extends Component{
    render(){
        return(
            <View>
                <StatusBar
                    backgroundColor="coral" 
                />
                <Text style={style.navBarTitle}>Welcome</Text>
            </View>
        )
    }
}

export default ToolBar;