  
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,TextInput
} from "react-native";

// import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { width: WIDTH, height: HEIGHT  } = Dimensions.get("screen");
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";
import {scale, verticalScale, moderateScale} from "./style"

const LoginScreen1 = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [show1, setshow1] = React.useState(false);
  const [visible1, setVisible1] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);


  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
       
       <View>
      <Ionicons
          style={styles.inputIcons}
          name="ios-person-add"
          size={25}
          color="black"
        />

        <TextInput    
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={"Name"}
          style={styles.textBox} /></View>
           <View>
      <FontAwesome
          style={styles.inputIcons}
          name="envelope-square"
          size={24}
          color="black"
        />

        <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={"Email"}
          style={styles.textBox} /></View>  
          <View>
          <Entypo style={styles.inputIcons} name="lock" size={25} color="black" />
      
<TextInput       
placeholder={"Password"}
secureTextEntry={visible1}
returnKeyType="done"

style={styles.textBox} />
</View>
          <View>
                     <Entypo style={styles.inputIcons} name="lock" size={25} color="black" />
                 
        <TextInput       
          placeholder={"Confirm Password"}
          secureTextEntry={visible}
          returnKeyType="done"

          style={styles.textBox} />
          </View>
      <TouchableOpacity style={styles.btneye}
          onPress={() => {
            setVisible(!visible)
            setshow(!show)
          }}>
          <FontAwesome name={show === false ? 'eye' : 'eye-slash'} size={25}  color="#808080"
 />
        </TouchableOpacity>  
        <TouchableOpacity style={styles.btneye1}
          onPress={() => {
            setVisible1(!visible1)
            setshow1(!show1)
          }}>
          <FontAwesome name={show1 === false ? 'eye' : 'eye-slash'} size={25}  color="#808080"
 />
        </TouchableOpacity>   
     
        <View style={{alignItems:"center",top:verticalScale(60)}}>
      <TouchableOpacity 
                onPress={() => navigation.navigate("switch")}

        style={{    justifyContent: "center",borderRadius:10,
 paddingRight:scale(250),paddingLeft:scale(250),backgroundColor:"#ffa500",height:verticalScale(100)}}>
        <Text style={{ color:"#fff",fontSize:20,  }}
        >Sign up</Text>
       
      </TouchableOpacity>
      </View>
   
        <TouchableOpacity style={styles.account} onPress={() => navigation.navigate("LoginScreen")}
          
        >
          <Text style={styles.label2}>Already Have an Account ?<Text style={{color:"#0000FF",fontSize:18,fontWeight:"bold"}} > Login</Text></Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:"absolute",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    height:"100%",
    width:"100%"
    
  },
  textBox: {
    margin: "3%" ,
    elevation: 9,
    paddingLeft:50,
top:verticalScale(60),
width:verticalScale(480),
    fontSize: 22,
    height: verticalScale(110),
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
borderRadius:10,
  color: 'black',
  borderColor:"#fff",
  fontSize:20
  },
  
  Textinput: {
    width: WIDTH - 50,
    height: 45,
    borderRadius: 25,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",


    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    fontSize: 16,
  },
  inputIcons: {
    position: "absolute",
    top: verticalScale(110),
    left: scale(40),
    elevation:10,
    color:"#808080"


  },
  inputContainer1: {
    marginTop: 20,
    top: 25,
    //position: "absolute",
  },
  inputContainer2: {
    marginTop: 50,
    top: -25,
    // position: "absolute",
  },

  
  btneye: {
    top: verticalScale(-30),
    left:scale(200),
    elevation:10
  },
  
  
  btneye1: {
    top: verticalScale(-220),
    left:scale(200),
    elevation:10
  },
  
  Signin:{ 
     
    top:45,backgroundColor:"black"},

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    // backgroundColor: "#432577",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 20,
    top: -30,
    borderBottomWidth: 1,

    borderStyle: "solid",
    borderWidth: 2,
    width: 240,
    height: 40,
  },
  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
      color:"#808080",
      alignItems:"flex-end"


  },
  label2: {
 alignContent:"center",
 fontSize:20,
    color:"#808080",



},
textlabe2:{
    top:-57,
},
  text: {
    color: "darkblue",
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },
  error: {
    fontSize: 14,
    color: "#FF0000",
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  errorview: {
    fontSize: 100,
  },
  label: {
    fontSize: 26,
    color: "#ffff",
    fontWeight: "bold",
    right: -89,
    bottom: 40,
    position: "absolute",
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: "absolute",
  },
  textlabel: {
    position: "absolute",
    alignItems:"center",
    left:115,
    fontFamily: "sans-serif",

  },
  forgotPassword: {
    width: "100%",

    alignItems: "flex-end",
    marginBottom: 24,
    top: HEIGHT-866,
    right: 15
  },
  account: {
    width: "100%",
    alignItems: "center",
    top:verticalScale(120),
  },
});
export default LoginScreen1;