import React, {useState} from 'react';
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Box from "@mui/material/Box";

const ToDo = () => {

    // STATUS:
    // 0: Active;
    // 1: In Progress;
    // 2: Done;

    const [tasks, setTasks] = useState([
        {id: '1', title: 'Finish my work', status: 0}
    ])

    const addTask = (text) => {
        if (text) {
            setTasks(prevState => ([
                {
                    id: tasks.length + text,
                    title: text,
                    status: 0
                },
                ...prevState
            ]))
        }
    }

    const deleteTask = (id) => {
        setTasks(prevState => {
            return prevState.filter(task => task.id !== id);
        })
    }

    const getDoneTask = (id) => {
        setTasks(prevState => (prevState.map(task => {
            if (task.id === id && task.status < 2) task.status = task.status + 1;
            return task
        })))
    }

    const getBackTask = (id) => {
        setTasks(prevState => (prevState.map(task => {
            if (task.id === id && task.status > 0) task.status = task.status - 1;
            return task
        })))
    }

    return (
        <Box>
            <TaskForm addTask={addTask}/>
            <TaskList tasks={tasks}
                      deleteTask={deleteTask}
                      getBackTask={getBackTask}
                      getDoneTask={getDoneTask}/>
        </Box>
    );
};

export default ToDo;