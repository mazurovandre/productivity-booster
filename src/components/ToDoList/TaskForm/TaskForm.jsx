import React from 'react';
import style from './TaskForm.module.scss';

const TaskForm = (props) => {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.addTask()
        }}>
            <div className={style.block}>
                <input
                    className={style.input}
                    type="text"
                    value={props.inputText}
                    onChange={(e) => {props.changeInputState(e)}}
                    placeholder="Enter your task"
                />
                <button className={style.btn}>Add</button>
            </div>
        </form>
    );
};

export default TaskForm;