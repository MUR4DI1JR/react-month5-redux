import React from 'react';
import {useDispatch} from "react-redux";
import {removeTask, updateTask} from "../../redux/action";

const Task = ({title, id, statusTask}) => {
    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(removeTask(id))
    }

    const handleStatus = (id) => {
        dispatch(updateTask(id))
    }

    return (
        <div className={`flex justify-between border rounded-[5px] px-2 py-4 my-[10px] ${statusTask ? "bg-green-500" : "bg-gray-300"}`} key={id}>
            <div className="flex">
                <button onClick={() => handleStatus(id)} >сделано</button>
                <h4>{title}</h4>
            </div>
            <button onClick={() => handleDeleteTask(id)}  className="bg-red-500 text-white py-[2px] px-[4px] uppercase rounded-[5px]">remove</button>
        </div>
    );
};

export default Task;