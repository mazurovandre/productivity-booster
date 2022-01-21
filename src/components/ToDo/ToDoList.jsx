import React, {useState} from 'react';
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const ToDoList = () => {

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Finish my work', isDone: false}
    ])

    const changeInputState = (e) => {
        setInputText(e.target.value);
    }

    const addTask = () => {
        if (inputText) {
            setTasks(prevState => ([
                {
                    id: tasks.length + 1,
                    title: inputText,
                    isDone: false
                },
                ...prevState
            ]))
            setInputText('');
        }
    }

    const changeStatus = (e) => {
        const id = Number(e.target.getAttribute('data-number'));
        const currentTask = tasks.find(task => task.id === id);
        const currentTaskIndex = tasks.findIndex(task => task.id === id);

        if (!currentTask.isDone) {
            setTasks(prevState => ([
                ...prevState.slice(0, currentTaskIndex),
                {
                    id: currentTask.id,
                    title: currentTask.title,
                    isDone: true
                },
                ...prevState.slice(currentTaskIndex + 1)
            ]))
        } else {
            setTasks(prevState => ([
                ...prevState.slice(0, currentTaskIndex),
                ...prevState.slice(currentTaskIndex + 1)
            ]))
        }
    }

    return (
        <div>
            <div>
                <TaskForm
                    inputText={inputText}
                    addTask={addTask}
                    changeInputState={changeInputState}
                    changeStatus={changeStatus}/>
                <TaskList tasks={tasks} changeStatus={changeStatus}/>
            </div>
        </div>
    );
};

export default ToDoList;