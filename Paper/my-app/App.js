import statusbar from 'expo status-bar'
import { StyleSheet } from 'react-native';
import {NavigationConatiner} from '@react-navigation/native'
import {createNativeStacknavigator} from '@react-navigation/native-stack'
import {NavigationConatiner} from ''
import home from './screen/Home';
import aboutus from './screen/Aboutus';
import login from './screen/Login';
import Contact from './screen/Contact';
export default function app(){
  const stack=createNativeStacknavigator();
  return (
    <NavigationConatiner>
      <stack.Navigator initialRoutename='Home'>
        <stack.Navigator name='Home' component={home}></stack.Navigator>
        <stack.Navigator name='aboutus' component={aboutus}></stack.Navigator>
        <stack.Navigator name='login' component={login}></stack.Navigator>
        <stack.Navigator name='Contact' component={Contact}></stack.Navigator>


      </stack.Navigator>
    </NavigationConatiner>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



