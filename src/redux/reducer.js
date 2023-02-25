const initialState = {
    counter: 25,
    statusColor: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT': {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case 'ADD_COUNTER': {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case 'SUBTRACT': {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case 'CHANGE_COLOR': {
            return {
                ...state,
                statusColor: !state.statusColor
            }
        }
        default:
            return state
    }
}

export default reducer;