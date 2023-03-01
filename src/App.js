import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    addCounter,
    changeColor,
    subtractCounter,
    fetchCounter, incrementCounterAPI, decrementCounterAPI
} from "./redux/action";

const App = () => {
    const statusColor = useSelector(state => state.statusColor);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementCounterAPI());
        // dispatch(incrementCounter());
    }

    const decrement = () => {
        dispatch(decrementCounterAPI());
        // dispatch(decrementCounter());
    }

    const incrementByCounter = () => {
        dispatch(addCounter());
    }

    const changeColorBlock = () => {
        dispatch(changeColor());
    }

    const decrementByCounter = () => {
        setTimeout(() => {
            dispatch(subtractCounter());
        }, 3000)
    }

    useEffect(() => {
        dispatch(fetchCounter())
    }, []);

    return (
        <div className="block justify-center items-center">
            <div className="text-center">
                <p>counter: {counter}</p>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={increment}>increment</button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={decrement}>decrement</button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={incrementByCounter}>increment by 5</button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={changeColorBlock}> change color </button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={decrementByCounter}>decrement by 5</button>
            </div>
            <div className={`flex justify-center w-[350px] h-[250px] ${statusColor ? 'bg-red-600' : 'bg-teal-500'}`}></div>
        </div>
    );
};

export default App;