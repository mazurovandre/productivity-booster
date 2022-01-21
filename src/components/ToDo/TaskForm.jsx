import React from 'react';

const TaskForm = (props) => {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.addTask()
        }}>
            <div>
                <input
                    type="text"
                    value={props.inputText}
                    onChange={(e) => {props.changeInputState(e)}}
                    placeholder="Enter your task"
                />
                <button>Add</button>
            </div>
        </form>
    );
};

export default TaskForm;