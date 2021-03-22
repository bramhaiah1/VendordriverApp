  
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
const { width: WIDTH, height: HEIGHT  } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";
import {scale, verticalScale, moderateScale} from "./style"

const LoginScreen = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);


  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
       <View style={{ top:verticalScale(120),backgroundColor:"#fff",alignItems:"center"}}
              >
        <Text style={{color:"black",fontWeight:"bold",fontSize:25,}}>Sign In</Text>
       </View>
       <Image
        style={{
          height: verticalScale(100),
          width: verticalScale(250),
top:verticalScale(-100)
        }}
        source={require("../assets/Dokan.jpeg")}
      ></Image>
       <View style={{alignItems:"center"}}>
      <FontAwesome
          style={styles.inputIcons}
          name="envelope-square"
          size={30}
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
     <View style={{alignItems:"center",top:verticalScale(170)}}>
      <TouchableOpacity 
                onPress={() => navigation.navigate("switch")}

        style={{    justifyContent: "center",borderRadius:10,
 paddingRight:scale(250),paddingLeft:scale(250),backgroundColor:"#ffa500",height:verticalScale(100)}}>
        <Text style={{ color:"#fff",fontSize:20,  }}
          >Login</Text>
       
      </TouchableOpacity>
      </View> 
        <TouchableOpacity style={styles.forgotPassword}
          onPress={() => navigation.navigate("forgot")}
        >
          <Text style={styles.label1}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.account}
          onPress={() =>navigation.navigate("switch")}
        >
          <Text style={styles.label2}>Create New Account</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
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
 

  btneye: {
    top: verticalScale(-30),
    left:scale(220),
    elevation:10
  },
  
  label1: {
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
   top:verticalScale(-100),
   right:scale(70)
  },
  account: {
    width: "100%",
    alignItems: "center",
    top:verticalScale(120),
  },
});
export default LoginScreen;