import * as React from 'react';
import { Text, View, StyleSheet ,Image,TextInput,TouchableOpacity} from 'react-native';
import db from '../config'
import firebase from 'firebase'
export default class SignUp extends React.Component{
   constructor(){
        super();
        this.state={
          emailId : '',
          password: ''
        }
      }
    
      login=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('HomeScreen')
            }
          }
          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }
        }
        else{
            alert('enter email and password');
        }
      }

  render(){
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
       <Image source={require("../alert.png")} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center'}}/>
     <Text style={styles.title}>Notification Alert</Text>
</View>

 <Text style={[styles.title,{color:'black',marginLeft:20, marginTop:30}]}>SignUp</Text>
<View style={{marginTop:60}}>

 <TextInput
 style={styles.inputBox}
 placeholder='Enter your Email'
 keyboardType='enail-address'
  onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
 />
 <TextInput
 style={styles.inputBox}
 placeholder='enter your Password'
  secureTextEntry = {true}
          
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
 /></View>
 <TouchableOpacity style={styles.button}
 onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
 <Text style={[styles.title,{fontSize:20}]}>LOGIN</Text>
 </TouchableOpacity>
    </View>
  );

  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  title:{
    color:"black",
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    fontFamily:'Gazelle',
    marginTop:10
  },
  inputBox:{
    borderWidth:1,
    backgroundColor:"#D3D3D3",
    width:200,
    height:40,
    margin:20,
    justifyContent:"center",
    alignSelf:"center",
    borderRadius:10,
    textAlign:"center"

  },
  button:{
    backgroundColor:"#D3D3D3",
    width:150,
    justifyContent:"center",
    alignSelf:"center",
    marginTop:50
  }
})