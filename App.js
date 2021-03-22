import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Fontisto from "react-native-vector-icons/Fontisto";
 import { MaterialIcons } from '@expo/vector-icons';
 import Icon from "react-native-vector-icons/FontAwesome5"
 import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
 import { createDrawerNavigator, DrawerItems,DrawerActions } from "react-navigation-drawer";
 import { Provider } from "react-redux";

import { createAppContainer } from 'react-navigation'
import Login from './Screens/Loginscreen'
import Register from './Screens/Registrationscrene'
import Drawer from './Screens/Drawe'
import Forgot from './Screens/Forgotpaass'
import Home from './Screens/Home'
import Store from './store'
const LOGIN = createStackNavigator({

  LoginScreen: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),
  
  },
  forgot: {
    screen:Forgot,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <Drawer navigationProps={navigation} />,

headerTitle:"Password Reset" , 
headerTintColor:"black" ,   
justifyContent:"center"
    }),
 },
  switch: {
    screen:Register,
    navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
  },
  
})

const HOME1 = createStackNavigator(
  {
    Logout: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({      
        headerLeft: () =><Drawer navigationProps={navigation}   />,
        headerShown:false,

        //headerTintColor:"#fff" ,  h 
        headerStyle: {
          backgroundColor: '#fff'
        },
    }),
    },
   
   
  },)
const AppNavigator1 = createDrawerNavigator({
 
  
  InitialPage:{
    screen:HOME1,
    navigationOptions: ({navigation}) => {
      return {
          drawerLabel: () => null,
      }
  
    
    },
  },
  Login:{
    screen:LOGIN,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="sign-in-alt" size={30}  />
      }
    
    },
  },
 
})
const AppContainer = createAppContainer(AppNavigator1);
export default AppContainer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
