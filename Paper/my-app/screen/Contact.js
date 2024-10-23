import react from 'react';
import {View, Text, Button, TextInput, TouchableOpacity} from 'react-native'

export default function Contact(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [message, setmessage]=usemessage('');
    
    const handleSubmit = () => {
    
        Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
     
        setName('');
        setEmail('');
        setMessage('');
      };

      return (
        <>
        <Text styles={styles.text}>Contact Us!!</Text>
        <View style={styles.inputGroup}>
                <Text style={styles.label}>Name:</Text>
                <TextInput placeholder="Your Number" style={styles.input} secureTextEntry={true} />
            </View>
        <View style={styles.conatiner}>
            <Text styles={styles.text}>Email</Text>
            <TextInput placeholder='Enter your mail' style={styles.input} ></TextInput>
            </View>  

         <View style={styles.conatiner}>
            <Text style={styles.message}>Message</Text>
            <TextInput placeholder='Enter yur message' style={styles.input}></TextInput>
            </View> 
         <View style={styles.number}>
            <Text style={styles.text}>Number:</Text>
            <TextInput placeholder='Enter tiur number' style={styles.number}></TextInput>
            </View>   
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>

        </>
      )

}
const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#555',
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingLeft: 10,
      backgroundColor: '#fff',
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top',
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  