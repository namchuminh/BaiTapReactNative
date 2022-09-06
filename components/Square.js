import React from "react"
import {View, Text} from 'react-native'

const Square = (props) =>{
    const {content} = props;
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
            <Text style={{
                width: 100,
                height: 100,
                backgroundColor: 'red',
                color: 'white',
                textAlign: 'center',
                
            }}>{content}</Text>
        </View>
    )
}

export default Square;