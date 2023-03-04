import {
    ADD_COUNTER, ADD_TASK,
    CHANGE_COLOR,
    DECREMENT, FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS, GET_TASK,
    INCREMENT, REMOVE_TASK,
    SUBTRACT, UPDATE_TASK
} from "../constanst/types";
import axios from "../axios"

export const incrementCounter = () => {
    return { type: INCREMENT};
};

export const decrementCounter = () => {
    return { type: DECREMENT };
};

export const addCounter = () => {
    return { type: ADD_COUNTER, payload: 5};
};

export const subtractCounter = () => {
    return { type: SUBTRACT, payload: 5};
};

export const changeColor = () =>{
    return { type: CHANGE_COLOR}
}

export const fetchCounterRequest = () => {
    return { type: FETCH_COUNTER_REQUEST };
};

export const fetchCounterSuccess = (counter) => {
    return { type: FETCH_COUNTER_SUCCESS, counter}
};

export const fetchCounterError = () => {
    return { type: FETCH_COUNTER_ERROR }
}

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get('/counter').then(res => {
            dispatch(fetchCounterSuccess(res.data[0].counter))
        }, error => {
            dispatch(fetchCounterError())
        })
    }
}

export const incrementCounterAPI = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get('/counter/1').then( res => {
            let summ = res.data.counter + 1;
            axios.put('/counter/1', {counter: summ}).then(() => {
                    //loader = false
                }
            ).finally(() => {
                dispatch(incrementCounter())
            })
        })
    }
}

export const decrementCounterAPI = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get('/counter/1').then( res => {
            let summ = res.data.counter - 1;
            axios.put('/counter/1', {counter: summ}).then(() => {
                //loader = false
            }).finally(() => {
                dispatch(decrementCounter())
            })
        })
    }
}

export const updateTask = (id) => {
    return { type: UPDATE_TASK, payload: id }
}

export const addTask = (task) => {
    return { type: ADD_TASK, payload: task }
}

export const removeTask = (id) => {
    return { type: REMOVE_TASK, payload: id }
}