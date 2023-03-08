import {
    ADD_COUNTER, ADD_TASK,
    CHANGE_COLOR,
    DECREMENT, ERROR_TASKS, FETCH_COUNTER_ERROR,
    FETCH_COUNTER_REQUEST,
    FETCH_COUNTER_SUCCESS, GET_TASK, GET_TASKS,
    INCREMENT, REMOVE_TASK, REMOVE_TASK_API,
    SUBTRACT, TASKS_REQUEST, UPDATE_TASK, UPDATE_TASK_STATUS
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

export const updateTask = (id, status) => {
    return { type: UPDATE_TASK, payload: {id, status} }
}

export const addTask = (task) => {
    return { type: ADD_TASK, payload: task }
}

export const removeTask = (id) => {
    return { type: REMOVE_TASK, payload: id }
}

export const tasksRequest = () => {
    return { type: TASKS_REQUEST}
}

export const getTasks = (tasks) => {
    return { type: GET_TASKS, payload: tasks}
}

export const errorTasks = () => {
    return { type : ERROR_TASKS}
}

export const getTasksApi = () => {
    return dispatch => {
        dispatch(tasksRequest());
        axios.get('/counter').then(res => {
            dispatch(getTasks(res.data))
        }, error => {
            dispatch(errorTasks())
        })
    }
}


export const removeTaskApi = (id) => {
    return dispatch => {
        dispatch(removeTask(id))
        axios.delete(`/counter/${id}`).then(() =>{
            console.log("delete task")
        })
    }
}

export const createTask = (task) => {
    return dispatch => {
        axios.post('/counter', task).then(() => {
            dispatch(getTasksApi());
        })
    }
}

export const updateTaskStatus = (id, status) =>{
    return dispatch => {
        dispatch(updateTask(id, status));
        axios.put(`/counter/${id}`, {statusTask: status}).then(() => {
            console.log("change status");
        })
    }
}