import {ADD_COUNTER, CHANGE_COLOR, DECREMENT, FETCH_COUNTER_SUCCESS, INCREMENT, SUBTRACT} from "../constanst/types";

const initialState = {
    counter: 0,
    statusColor: false
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type){
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case ADD_COUNTER: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case SUBTRACT: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case CHANGE_COLOR: {
            return {
                ...state,
                statusColor: !state.statusColor
            }
        }
        case FETCH_COUNTER_SUCCESS: {
            return {
                ...state,
                counter: state.counter = action.counter
            }
        }
        default:
            return state
    }
}

export default reducer;