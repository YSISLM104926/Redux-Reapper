const {createStore} = require("redux");

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// state 
const initialCounterState = {
    count: 0,
}
const initialUsersState = {
    users: [{ name: 'md. likhon mia' }]
}

// action
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

// Reducer
const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
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

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());