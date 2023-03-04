import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/action";

const TaskForm = () => {
    const tasks = [];
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    // const addTasksL = () => {
    //     const task = {
    //         id: Date.now(),
    //         title
    //     }
    //
    //     tasks.push(task);
    // }


    const handleAdd = () => {
        const task = {
            id: Date.now(),
            title,
            statusTask: false
        }

        dispatch(addTask(task))
        setTitle("")
    }

    return (
        <div className="w-[80%] mx-auto my-[30px]">
            <input
                className="w-full border rounded-[5px] py-2 px-4 outline-0"
                value={title}
                onChange={(e) => onChangeTitle(e)}
                type="text"
            />
            <button onClick={handleAdd} className="bg-green-500 py-2 px-4 text-white uppercase rounded-[5px] my-[10px]">создать</button>
        </div>
    );
};

export default TaskForm;