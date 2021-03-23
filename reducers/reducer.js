
import {
    FETCH_PRODUCTS,
    
  } from "./action";


export default function todos(state = [], action) {
    
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.text])
        case FETCH_PRODUCTS:
            return { ...state, items: action.payload, filteredItems: action.payload };
       
      default:
        return state
    }
    
  }

  