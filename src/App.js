import React from 'react';
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";

const App = () => {
    return (
        <div className="container mx-auto">
            <Header/>
            <TaskForm/>
            <Tasks/>
        </div>
    );
};

export default App;