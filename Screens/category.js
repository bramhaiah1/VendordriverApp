import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight ,TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { createStackNavigator, createAppContainer,navigate,navigation } from "react-navigation";


class ItemCard extends Component {
  

  render() {
   // const { item, addToCart } = this.props;

    return (
      <View style={ styles.itemCard }>

        <Image source={{ uri: "https://sukhis.com/wp-content/uploads/2017/06/Indian-Food-Guide.jpg" }} style={{ width: 80, height: 50 }}/>
        <View style={ styles.productDetail }>
          <Text style={ styles.productTitle }>nnhhh</Text>
          <Text style={ styles.productPrice }>#Order id-</Text>
          <View style={ styles.inputNumberContainer }>
           
          </View>
          <TouchableOpacity style={{backgroundColor:"#ffa500",  justifyContent: "center",
    marginLeft: 170,
    top:-38,
    borderBottomWidth: 1,
    borderColor:"#ffa500",
    borderStyle: "solid",
    borderWidth: 1,
    width: 70,
    height: 25,
  }}          onPress={
    () =>this.props.navigation.navigate("order")
  }
      
>
        <Text style={ {color:"#fff",
    fontSize: 14,
    textAlign: "center",fontWeight:"bold",
    }}>View</Text>
    
      </TouchableOpacity>
   
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft:"3%",
    marginRight:"3%",

    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  productDetail: {
    marginLeft: 2,
    marginTop:2,
    paddingTop:30,
    flex: 1,
    justifyContent: 'flex-start',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color:"#808080"
  },
  inputNumberContainer: { 
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  inputNumber: {
    flex: 1,
    padding: 4,
    width: 32,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  incDecBtn: {
    paddingTop: 4,
    paddingBottom: 4,
    width: 32,
    backgroundColor: '#263238',
  },
  incDecBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
export default withNavigation(ItemCard)
