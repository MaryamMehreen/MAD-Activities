import React from 'react'
import { View, TextInput, StyleSheet, Text, TouchableOpacity ,StatusBar ,Button} from "react-native";

export default function login({navigation}) {


    return (
        <>
        <View style={styles.container}>
           
       
           
            <View style={styles.hr} />
            
       
            <Text style={styles.reg}>Registration Form</Text>
            
            <View style={styles.hr} />

            <View style={styles.inputGroup}>
                <Text style={styles.label}>F.Name:</Text>
                <TextInput placeholder="First Name" style={styles.input} />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>L.Name:</Text>
                <TextInput placeholder="Last Name" style={styles.input} />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Email:</Text>
                <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Password:</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm:</Text>
                <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true} />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Sign Up!</Text>
            </TouchableOpacity>
           
            <Button onPress={()=>navigation.navigate('Contact')} title='Go to Contact page'></Button> 
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 400,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "grey",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 50,
        backgroundColor:'pink'
    },
    backgroundImage: {
        flex: 1, 
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    hr: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 10,
    },
    inputGroup: {
        
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        justifyContent: 'space-between',
        width: '100%',
    },
    label: {
        width: 80, // Adjust to fit your label text
        textAlign: 'right',
        marginRight: 10,
        fontSize: 16,
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    reg: {
        fontSize: 30,
        color: 'purple',
    },
    btn: {
        backgroundColor: 'purple',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});


import react from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
export default function login (navigation) {
    return (
        <>
        <View  style={styles.conatiner}>
            <View style={styles.hr}>
                <View style={styles.text}>
                    <Text style={styles.text}> Name:</Text>
                    <TextInput style={styles.text} placeholder='Your name'></TextInput>
                </View>
                <View style={styles.conatiner}>
                    <Text style={styles.text}>Email</Text>
                    <TextInput placeholder='Yiur email' style={StyleSheet.mail}></TextInput>
                </View>
                <TouchableOpacity style={styles.but} >
                    <Text style={styles.button}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    );
}

const  style=StyleSheet.create ({
 conatiner: {
    
 }
})

