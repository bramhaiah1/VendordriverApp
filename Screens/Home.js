import React, { Component, useEffect } from "react";
import { Text,View,StyleSheet,FlatList,TextInput,Image,ScrollView,TouchableOpacity,Dimensions} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";
import Cate from './category'
import { Avatar } from 'react-native-elements';
import Avatarmodel from './Avatar'
import {scale, verticalScale, moderateScale} from "./style"
import { SliderBox } from "react-native-image-slider-box";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AntDesign } from '@expo/vector-icons';
import {fetchProducts} from '../reducers/action'
// const {width} = Dimensions.get('screen');
// const height = width * 0.5;
const images =[
  "https://sukhis.com/wp-content/uploads/2017/06/Indian-Food-Guide.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCoXdQX18ZgxblJIZCxAXNz-OB_B7kNDdTw&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
]

const images1=[
  {id:1,image:require("../assets/Accesories_category.jpg"),Text:"Accessories"},
  {id:2,image:require("../assets/Baby_category.jpg"),Text:"Baby"},
  {id:3,image:require("../assets/Women_category.jpg"),Text:"Women"},
  {id:4,image:require("../assets/Men_category.jpg"),Text:"Men"},
  {id:5,image:require("../assets/Leather_category.jpg"),Text:"Leather"},
  {id:6,image:require("../assets/Electronics_category.jpeg"),Text:"Electronics"},
  {id:7,image:require("../assets/Fashion_category.jpg"),Text:"Fashion"},
  {id:8,image:require("../assets/Clothing_category.jpg"),Text:"Clothing"},



]
class Home extends Component{
 _keyExtractor = (item, idx) => item.id;
   
   _renderItem = ({ item }) => (
    <Avatarmodel item={ item }  />
  );
  
 componentDidMount(){
   this.props.fetchProducts()
   alert(JSON.stringify(this.props.products))

 }
render() {
     // alert(JSON.stringify(this.props.products))

    return(
        <View style={{flex:1}}>
           
           <View style={{top:verticalScale(66) ,flexDirection: "row" }}>
      <TouchableOpacity >
        <Entypo name="menu" size={40} color="black" />
        
      </TouchableOpacity>

      <Image
        style={{
          height: verticalScale(60),
          width: verticalScale(150),
top:verticalScale(10),
left:scale(30)
        }}
        source={require("../assets/Dokan.jpeg")}
      ></Image>
    </View>
  
            <View style={{marginTop:verticalScale(120),width:verticalScale(100),height:verticalScale(1000),paddingLeft:scale(10),justifyContent:"space-evenly"}}>
             
  
          <Icon style={{left:verticalScale(500), top:scale(20) ,elevation:10}} name="search" size={20} color="#000" />
          <View style={{left:verticalScale(20),top:scale(-50)}}><TextInput
            style={styles.searchBar}
           // onChangeText={(query) => this.searchHandler(query)}
           // value={this.state.searchQuery}
            placeholder={"   Search Product..."}
          /></View>
               <ScrollView showsVerticalScrollIndicator={false} style={{width:verticalScale(540),height:verticalScale(900),margin:scale(20)}}>
              
               <SliderBox 
  images={images}
 
  sliderBoxHeight={200}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
/>





<Text style={{fontSize:20,fontWeight:"bold",top:scale(50)}}>Category</Text>
<TouchableOpacity  style={{alignItems:"flex-end"}}><Text style={{color:"#808080"}}>See All({images1.length-1})</Text></TouchableOpacity>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{ width:verticalScale(520),height:verticalScale(300),paddingLeft:scale(30),}}>
                {
                    images1.map((item,index) => (
                        <View style={{alignItems:"center"}}><Text style={{top:verticalScale(200),}}>{item.Text}</Text>
       <TouchableOpacity style={{padding:scale(30)}}>              
<Avatar 
         
         size="large"
         rounded


         source={item.image}

/>
</TouchableOpacity> 
                </View>    ))
                }
                </ScrollView>
                <View style={{top:scale(10)}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Best Selling Products</Text>
<TouchableOpacity style={{alignItems:"flex-end"}}><Text style={{top:scale(-50),color:"#808080"}}>See All({images1.length-1})</Text></TouchableOpacity>
</View><ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{ width:verticalScale(520),height:verticalScale(300),paddingLeft:scale(30),}}>
              
                {
                    images.map((item,index) => (
                      
                        <View style={{alignItems:"center"}}>
                          
       <TouchableOpacity style={{}}>              
       
       <Image source={{ uri: item }}  />

</TouchableOpacity> 

                </View>    ))
                }
                </ScrollView>
                <Cate/>
                </ScrollView>
            </View>
           

        </View>
    )
    
}}
const mapStateToProps = (state) => ({
  products: state,
});

const styles = StyleSheet.create({
    textView:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#FFEA61",
        borderRadius:10,
      
      
     
     
       
       

    },
    
    text1:{
        justifyContent:"center",
      alignItems:"center",
        fontWeight:"bold",
        paddingLeft:50,
        fontSize:15,
        margin:5,
        marginTop:20
        
        
      
      
       
    },
    text2:{
       
        justifyContent:"center",
        alignItems:"center",
        alignItems:"center",
        fontSize:13,
        paddingLeft:55,
        marginBottom:20
       
       
       
       
        
    },
    searchBar: {
      width: verticalScale(540),
      backgroundColor: '#fff',
     paddingLeft: scale(22),
      height: verticalScale(80),
      elevation:9
    },
    icon:{
        paddingStart:15,
        position:"absolute",
        marginTop:17
       

    }
   
})
export default connect(mapStateToProps, {fetchProducts})(Home);
