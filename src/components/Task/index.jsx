import React from 'react';
import {useDispatch} from "react-redux";
import {removeTaskApi, updateTask, updateTaskStatus} from "../../redux/action";

const Task = ({title, id, statusTask}) => {
    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(removeTaskApi(id));
    }

    const handleStatus = (id, status) => {
        dispatch(updateTaskStatus(id, status));
    }

    return (
        <div className={`flex justify-between border rounded-[5px] px-2 py-4 my-[10px] ${statusTask ? "bg-green-500" : "bg-gray-300"}`} key={id}>
            <div className="flex items-center">
                {
                    statusTask ?
                        <button
                            className="bg-red-400 text-white border py-2 px-4 mr-2 rounded-[5px]"
                            onClick={() => handleStatus(id, !statusTask)}
                        >
                            не сделано
                        </button>
                        :
                        <button
                            className="bg-green-400 text-white border py-2 px-4 mr-2 rounded-[5px]"
                            onClick={() => handleStatus(id, !statusTask)}>
                            сделано
                        </button>
                }
                <h4 className="text-white capitalize font-bold">{title}</h4>
            </div>
            <button
                onClick={() => handleDeleteTask(id)}
                className="bg-red-500 text-white py-[2px] px-[4px] uppercase rounded-[5px]">удалить</button>
        </div>
    );
};

export default Task;