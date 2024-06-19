const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").thunk; // Note the `.default` for the default export
const axios = require("axios");

// Constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Initial state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
};

// Action creators
const getTodosRequest = () => ({
    type: GET_TODOS_REQUEST
});

const getTodosSuccess = (todos) => ({
    type: GET_TODOS_SUCCESS,
    payload: todos
});

const getTodosFailed = (error) => ({
    type: GET_TODOS_FAILED,
    payload: error
});

// Reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

// Async action to fetch data
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then((res) => {
                const todos = res.data;
                const titles = todos.map((todo)=> todo.title)
                dispatch(getTodosSuccess(titles));
            })
            .catch((error) => {
                dispatch(getTodosFailed(error.message));
            });
    };
};

// Verify thunk is a function
console.log(typeof thunk); // Should print 'function'

// Create store with middleware applied
const store = createStore(todosReducer, applyMiddleware(thunkMiddleware));

// Subscribe to store updates
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch async action
store.dispatch(fetchData());
