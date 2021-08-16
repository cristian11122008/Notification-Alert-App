import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import SignUp from './Screens/SignUp'
import HomeScreen from "./Screens/HomeScreen"
export default class App extends React.Component {
  render(){
  return (
   
    <AppContainer/>
    
  );

  }
}
const switchNavigator=createSwitchNavigator({
  SignUp:{screen:SignUp},
  HomeScreen:{screen:HomeScreen}
})
const AppContainer=createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
    backgroundColor: '#ecf0f1',
   
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
