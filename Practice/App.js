import { View, TextInput, StyleSheet, Text, TouchableOpacity ,StatusBar,ImageBackground } from "react-native";
import React, {useState} from 'react'
import { Switch } from 'react-native'


export default function BoolSwitch() {
    const [isEnabled , setIsEnabled]
} 

export default function App() {

    const handlePress = () => {
        alert("Sign Up Pressed");
    }
    

    return (
        <View style={styles.container}>
           
         <StatusBar barStyle="light-content" hidden={false} backgroundColor="gray"></StatusBar>
      
            <View style={styles.hr} />

            <ImageBackground style={styles.image} resizeMode='cover' source={
                {
                    uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dreact&psig=AOvVaw3bd8Pa4gT_2SkgF2ctqSSY&ust=1728497592097000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi5gLqx_4gDFQAAAAAdAAAAABAE'
                }
            }></ImageBackground>
            {/* Registration Form Title */}
            <Text style={styles.reg}>Registration Form</Text>
            
            {/* Horizontal line using View */}
            <View style={styles.hr} />

            {/* Input Fields */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>F.Name:</Text>
                <TextInput placeholder="First Name" style={styles.input} />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>L.Name:</Text>
                <TextInput placeholder="Last Name" style={styles.input} />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Number:</Text>
                <TextInput placeholder="Your Number" style={styles.input} secureTextEntry={true} />
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

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
                <Text style={styles.btnText}>Sign Up!</Text>
            </TouchableOpacity>

            
        </View>
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
    },
    image: {
        flex:1,
        justifyContent: 'center',
    }
});

// import { StyleSheet,TextInput,Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}><h1>Registration Form</h1></Text>
//        <View style={styles.vieww}>
//       <Text style={styles.textField}>F.Name:<TextInput style={styles.input} placeholder="Enter your First name" ></TextInput></Text>
//       </View>
//       <View style={styles.vieww}>
//       <Text style={styles.textField}>L.Name:<TextInput style={styles.input} placeholder="Enter your Last name" ></TextInput></Text>
//       </View>


//       <View style={styles.vieww}>
//         <Text style={styles.textField}>E-Mail:<TextInput style={styles.input} placeholder="Enter your Mail" ></TextInput></Text>
//       </View>

//       <View style={styles.vieww}>
//          <Text style={styles.textField}>Contact No:<TextInput style={styles.input} placeholder="Enter your Number" ></TextInput></Text>
//       </View>

//       <View style={styles.vieww}>
//          <Text style={styles.textField}>Password<TextInput style={styles.input} placeholder="Enter your Password" ></TextInput></Text>
//       </View>

//       <button style={styles.button}>Sign Up</button>
      





      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 'auto',
//         width: 400,
//         borderWidth: 2,
//         borderRadius: 10,
//         borderColor: "grey",
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20,
//         marginTop: 50,
//         backgroundColor:'pink'

//   },
//   text: {
//     justifyContent:'center',
//     textAlign:'center',
    
//   },
//   textField: {
   
//     width: 80, 
//     textAlign: 'right',
//     marginRight: 10,
//     fontSize: 16,
    
    

//   },
//   button: {
//     justifyContent:'center',
//     backgroundColor:'pink',
//     width:90,
//     height:70,
//     textAlign:'center',
//     text:'bold'
//   },
//   vieww: {
//     flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 15,
//         justifyContent: 'space-between',
//         width: '100%',
//   },
//   input: {
//     height: 40,
//         width: 200,
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingLeft: 10,
//   },
// });



