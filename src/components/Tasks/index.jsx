import React from 'react';
import Task from "../Task";
import {useSelector} from "react-redux";

const Tasks = () => {
    const tasks = useSelector(state => state.tasks);

    if (tasks.length === 0){
        return <p className="text-center">нету задачи</p>
    }

    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-[25px] text-center">Tasks</h1>
            {
                tasks.map(item => {
                    return <Task key={item.id} title={item.title} id={item.id} statusTask={item.statusTask}/>
                })
            }
        </div>
    );
};

export default Tasks;