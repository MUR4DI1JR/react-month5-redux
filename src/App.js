import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "./axios";

const App = () => {
    const [number, setNumber] = useState(0);
    const statusColor = useSelector(state => state.statusColor);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementCounter = () => {
        axios.get('/counter/1').then( res => {
            const summ = res.data.counter + 1;

            axios.put('/counter/1', {counter: summ}).then(() => {
                console.log("send request");
            });

            setNumber(prevState => prevState + 1);
        })
        dispatch({type: "INCREMENT"});
    }

    const decrementCounter = () => {
        dispatch({type: 'DECREMENT'});
    }

    const incrementByCounter = () => {
        dispatch({type: 'ADD_COUNTER', payload: 15});
    }

    const changeColor = () => {
        dispatch({type: 'CHANGE_COLOR'});
    }

    const decrementByCounter = () => {
        setTimeout(() => {
            dispatch({type: 'SUBTRACT', payload: 10});
        }, 3000)
    }

    useEffect(() => {
        axios.get('/counter').then( res => {
            const count = res.data[0].counter;
            setNumber(count);
        })
    }, []);

    return (
        <div className="block justify-center items-center">
            <div className="text-center">
                <p>counter: {counter}</p>
                <p>API counter: {number}</p>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={incrementCounter}>increment</button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={decrementCounter}>decrement</button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={incrementByCounter}>increment by 5</button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={changeColor}> change color </button>
                <button className="py-2 px-4 bg-gray-500 rounded-2xl text-white ml-2" onClick={decrementByCounter}>decrement by 5</button>
            </div>
            <div className={`flex justify-center w-[350px] h-[250px] ${statusColor ? 'bg-red-600' : 'bg-teal-500'}`}></div>
        </div>
    );
};

export default App;