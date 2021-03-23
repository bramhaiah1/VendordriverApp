import {
    FETCH_PRODUCTS,
    
  } from "./actiontype";
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
  export const fetchProducts = () => (dispatch) => {
    //  alert("aa")
   dispatch({ type: FETCH_PRODUCTS, payload: images1 });}