// state - count:0
// action - increment, decrement, reset
// reducer
// store

const {createStore} = require("redux");

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

// state
const initialCounterState = {
     count : 0
}

// actions
const incrementAction = () => {
    return {
         type: INCREMENT
    }
}

const decrementAction = () => {
    return {
         type: DECREMENT
    }
}

const resetAction = () => {
    return {
         type: RESET
    }
}


const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count : state.count + 1
            }
        case DECREMENT:
            return {
                count : state.count - 1
            }
        case RESET:
            return {
                count : 0
            }
        default:
            return state            
    }   
}

// store
const store = createStore(counterReducer);

store.subscribe(()=> {
    console.log(store.getState());
})


store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());


