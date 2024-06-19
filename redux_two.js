// state - count:0
// action - increment, decrement, reset
// reducer
// store

const {createStore} = require("redux");

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const INCREMENT_BY_FIVE = "INCREMENT_BY_FIVE"

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


const incrementByFiveAction = (value) => {
    return {
         type: INCREMENT_BY_FIVE,
         payload: value
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
        case INCREMENT_BY_FIVE:
            return {
                ...state,
                count : state.count + action.payload
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
store.dispatch(incrementByFiveAction(5));


