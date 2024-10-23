import React from 'react';
import { View,  Button} from 'react-native'
export default function aboutus({navigation}) {
    return (
        <>
        <View>Hello I am ABOUT US page</View>
        <Button onpress={()=>navigation.navigate('LogIn')} tittle='Go to Log In Page'>About  US</Button>
        </>
    )
}
