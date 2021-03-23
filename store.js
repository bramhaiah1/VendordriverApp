

// import { createStore } from 'redux'

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// const store = createStore(todos, ['Use Redux'])

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// alert(store.getState())

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer'
const configureStore = () => {
    let composeEnhancers = compose;

    if (__DEV__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

   
//alert("hhh")
    return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
}
export default configureStore