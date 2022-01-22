import React, {useState} from 'react';
import TextField from "@mui/material/TextField";

const TaskForm = (props) => {

    const [inputText, setInputText] = useState('');

    const changeInputState = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(inputText);
        setInputText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-basic"
                label="Enter your task"
                variant="standard"
                value={inputText}
                onChange={changeInputState}
                sx={{
                    width: '100%',
                    marginBottom: '20px'
                }}
            />
        </form>
    );
};

export default TaskForm;