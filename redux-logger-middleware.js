// state - count:0
// action - increment, decrement, reset
// reducer
// store

const {createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

const ADD_PRODUCTS = "ADD_PRODUCTS"
const SHOW_PRODUCTS = "SHOW_PRODUCTS"


// product state
const initialProductsState = {
     products : ['milk','honey'],
     count : 2
}



//product actions
const addProductAction = (newProduct) => {
    return {
         type: ADD_PRODUCTS,
         payload : newProduct
    }
}

const showProductAction = () => {
    return {
         type: SHOW_PRODUCTS,
    }
}


// product reducer
const productReducer = (state=initialProductsState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {
                users : [...state.products, action.payload],
                count : state.count + 1
            }
        case SHOW_PRODUCTS:
            return {
                ...state
            }    
        default:
            return state            
    }   
}






// store
const store = createStore(productReducer, applyMiddleware(logger));

// showing the state
store.subscribe(()=> {
    console.log(store.getState());
})

// products dispatch
store.dispatch(showProductAction());
store.dispatch(addProductAction("butter"));


