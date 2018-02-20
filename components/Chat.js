import React from 'react';
import ReactNative from 'react-native';

import{
    View,
    Text
} from 'react-native';
class Chat extends React.Component{
    componentDidMount(){
     
    }
    
    render(){

        return(
            <View>
                <Text>Chat Component</Text>
                {console.log(this.props)}
            </View>
        )
    }
}

export default Chat;