import {
    ADD_COUNTER,
    ADD_TASK,
    CHANGE_COLOR,
    DECREMENT,
    FETCH_COUNTER_SUCCESS,
    INCREMENT, REMOVE_TASK,
    SUBTRACT, UPDATE_TASK
} from "../constanst/types";

const initialState = {
    counter: 0,
    statusColor: false,
    tasks: []
}

const reducer = (state = initialState, action) => {
    console.log(action.payload?.title)
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
        case ADD_TASK: {
            return {
               tasks: [...state.tasks, action.payload]
            }
        }
        case REMOVE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        }
        case UPDATE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if(item.id === action.payload){
                        item.statusTask = true
                    }

                })
            }
        }
        default:
            return state
    }
}

export default reducer;