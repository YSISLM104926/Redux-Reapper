// state - count:0
// action - increment, decrement, reset
// reducer
// store

const {createStore} = require("redux");

const ADD_USER = "ADD_USER"

// state
const initialUsersState = {
     users : ['jason'],
     count : 0
}

// actions
const addAction = (newUser) => {
    return {
         type: ADD_USER,
         payload : newUser
    }
}


const userReducer = (state=initialUsersState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                // count : state.count + 1
                users : [...state.users, action.payload],
                count : state.count + 1
            }
        default:
            return state            
    }   
}

// store
const store = createStore(userReducer);

// showing the state
store.subscribe(()=> {
    console.log(store.getState());
})


store.dispatch(addAction("rafiq"));
store.dispatch(addAction("sakil"));


