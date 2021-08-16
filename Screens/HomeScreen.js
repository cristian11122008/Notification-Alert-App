import * as React from "react"
import {View,Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import SignUp from './SignUp'
import {Header, Icon} from "react-native-elements"
export default class HomeScreen extends React.Component{
  list=()=>{
    return(
      <View>
        <Icon name='home' type='font-awesome' color='black' size={20}
          onPress={() =>this.props.navigation.navigate('SignUp')}/>
         
      </View>
    )
  }
  render(){
    return(
      <View style={{flex:1}}>
      <SafeAreaProvider>
     <Header
       
          centerComponent={{ text:" Notification Alert", style: { color: 'black', fontSize:20, } }}
          rightComponent={<this.list {...this.props}/>}
          backgroundColor = "#D3D3D3"
        />
      
</SafeAreaProvider>
  <View style={styles.containerBox}>
  <Text style={styles.containerText}> Notification Transfer </Text>
   <View style={{flexDirection:"row"}}>
    <View style={{flexDirection:"row", marginTop:130, marginLeft:30}}>
  <TouchableOpacity>
  <Image
  source={require("../QuestionMarkforme.png")} style={{width:20, height:20}}/>
  </TouchableOpacity>
  <Text> Help </Text>
  </View>
        </View>
        <View style={{marginTop:-100, marginLeft: 100}}>
         <TouchableOpacity style={styles.button}>
         <Image source={require("../Bellfor***.png")} style={{width:20, height:20}}/>
 <Text> Turn Off </Text>
  </TouchableOpacity>
</View>
</View>
        <View style={styles.containerBox}>
  <Text style={styles.containerText}> Blacklist </Text>

        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  containerBox:{
width: 300,
height: 100,
backgroundColor:"#D3D3D3",
borderRadius: 20,
flex:2,
marginBottom:100,
marginLeft: 17
  },
  containerText:{
fontSize: 25,
marginTop: 10,
  },

 button:{
   flexDirection:"row",
   justifyContent: "center",
   alignSelf: "center",
    backgroundColor:"#D3D3D3",
    borderWidth:2,
    borderRadius:10,
    height: 60,
    width:120,
    justifyContent:"center",
    alignSelf:"center",
    marginTop:50
  }

})