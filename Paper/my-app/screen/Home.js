import React from 'react';
import {View, Text, Button} from 'react-native'
export default function home ({navigation}){
    return (
        <>
        <View> Hello I am Home Page</View>
        <Button onpress={()=>navigation.navigate('About Us')} tittle="Go to about us page">Home Us</Button>
        </>
    )
}

