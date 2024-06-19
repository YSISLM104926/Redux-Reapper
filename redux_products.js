// state - count:0
// action - increment, decrement, reset
// reducer
// store

const {createStore, combineReducers} = require("redux");

const ADD_PRODUCTS = "ADD_PRODUCTS"
const SHOW_PRODUCTS = "SHOW_PRODUCTS"

const ADD_CART_ITEMS = "ADD_CART_ITEMS"
const GET_CART_ITEMS = "GET_CART_ITEMS"

// product state
const initialProductsState = {
     products : ['milk','honey'],
     count : 2
}

// cart state 
const initialCartsState = {
    cart : ['banana','apple','mango'],
    count : 3
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


//cart actions
const addCartAction = (newProduct) => {
    return {
         type: ADD_CART_ITEMS,
         payload : newProduct
    }
}

const showCartAction = () => {
    return {
         type: GET_CART_ITEMS,
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

// cart reducer
const cartReducer = (state=initialCartsState, action) => {
    switch (action.type) {
        case ADD_CART_ITEMS:
            return {
                users : [...state.cart, action.payload],
                count : state.count + 1
            }
        case GET_CART_ITEMS:
            return {
                ...state
            }    
        default:
            return state            
    }   
}



const rootReducer = combineReducers({
    productRe : productReducer,
    cartRe : cartReducer
})

// store
const store = createStore(rootReducer);

// showing the state
store.subscribe(()=> {
    console.log(store.getState());
})

// products dispatch
store.dispatch(showProductAction());
store.dispatch(addProductAction("butter"));

// cart dispatch
store.dispatch(showCartAction());
store.dispatch(addCartAction("EggPlant"));


