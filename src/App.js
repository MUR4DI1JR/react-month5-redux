import React, {useEffect} from 'react';
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import {getTasksApi} from "./redux/action";
import {useDispatch} from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTasksApi())
    }, [])

    return (
        <div className="container mx-auto">
            <Header/>
            <TaskForm/>
            <Tasks/>
        </div>
    );
};

export default App;