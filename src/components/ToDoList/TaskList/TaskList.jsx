import React from 'react';
import style from "./TaskList.module.scss";

const TaskList = (props) => {

    const activeTasks = props.tasks.filter(task => !task.isDone);
    const doneTasks = props.tasks.filter(task => task.isDone);

    const activeList = activeTasks.map(task => <li
        tabIndex="0"
        key={Math.floor(Math.random() * 1000000)}
        data-number={task.id}
        className={style.task}>
        {task.title}
    </li>);

    const doneList = doneTasks.map(task => <li
        tabIndex="0"
        key={Math.floor(Math.random() * 1000000)}
        data-number={task.id}
        className={style.task + " " + style.task_done}>
        {task.title}
    </li>);

    return (
        <ul className={style.list} onClick={(e) => {props.changeStatus(e)}}>
            {activeList}
            {(!!doneTasks.length && !!activeTasks.length) && <span className={style.line}/>}
            {doneList}
        </ul>
    );
};

export default TaskList;